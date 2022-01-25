## 1.Java自带序列化机制
* 第一种
```
使用默认的序列化机制，即实现Serializable接口即可，不需要实现任何方法。

该接口没有任何方法，只是一个标记而已，告诉Java虚拟机该类可以被序列化了。
然后利用writeObject进行序列化和用readObject进行反序列化。
```
#### 代码
```
import java.io.Serializable;

public class person implements Serializable {   //只要类中加入Serializable标志即可，无法实现具体的方法
    private int age=0;
    private String name;

    ......
}

main函数:
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        //序列化
        person p1 = new person(18, "张三");
        ObjectOutputStream objectOutputStream = new ObjectOutputStream(new FileOutputStream("./xx.obj"));
        objectOutputStream.writeObject(p1);


        //反序列化
        ObjectInputStream objectInputStream = new ObjectInputStream(new FileInputStream("./xx.obj"));
        Object o = objectInputStream.readObject();
        System.out.println((person)o);

    }

```
* 第二种
```
实现Externalizable接口。

Externalizable接口是继承自Serializable接口的，我们在实现Externalizable接口时，
必须实现writeExternal(ObjectOutput)和readExternal(ObjectInput)方法，
在这两个方法下我们可以手动的进行序列化和反序列化那些需要保存的成员变量。
```

#### 代码
```
public class person2 implements Externalizable {  //实现Externalizable接口
    private int age=0;
    private String name;

    ........


    @Override
    public void writeExternal(ObjectOutput out) throws IOException { //重写序列化方法
        out.writeUTF(name);
        out.writeInt(age);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException { // 重写反序列化方法
        this.name = in.readUTF();
        this.age = in.readInt();
    }
}
```
## 2.FastJson序列化机制
* fastjson在序列化以及反序列化的过程中并没有使用Java自带的序列化机制，而是自定义了一套机制。

#### fastjson漏洞总结
![](/java/fastjson/fastjson.png)

[fastjson.xmind](/java/fastjson/fastjson.xmind)
## 3.AutoType
![](/java/fastjson/fastjson原理分析.jpg)

```
autoType发生的位置在图中的1位置。
autoType指的就是:调用JSON.parse()通过json字符串中指定@type字段来指定要将字符串转换为什么类的对象实例
version <= 1.2.24没有做任何的限制，导致可以任意反序列化,也就能能够任意的实例化任何的对象，就能造成任意的代码执行。
rmi或者ldap只是利用的桥梁。
1.2.25开始引入autoType的控制(黑白名单反序列化类的),但是autoType过滤不严谨就造成多种绕过的问题。
直到1.2.68版本开始引入safemode模式,当safeMode开启时，@type这个specialkey完全无用。
无论白名单和黑名单，都不支持autoType。
因此目前位置1.2.68开始较少有RCE的漏洞(1.autotype需要支持 2.存在可被利用的第三方库的引入)。
```
