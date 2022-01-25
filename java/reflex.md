# 反射

## 概念
    这种动态获取类的信息以及动态调用对象的方法的功能来自于Java语言的反射（Reflection）机制。

    * 优点：
      * 可以调用私有方法,访问设置私有变量
      * 可以让interger的ArrayList可以存取String类型的数据

## 获取Class对象方式

###### 1.使用Class类的静态方法。例如:　　

```
Class<?> aClass = Class.forName("com.java.web.man");
```

###### 2.使用类的.class语法。如:

```
Class<?> aClass = String.class;
```

###### 3.使用对象的getClass()方法。如：

```
String str = "aa";  // Student s1 = new Student();
Class<?> classType1 = str.getClass();  // Class<Student> sClass = s1.getClass();
```


## 获取方法对象
```
Class<?> personObj = Class.forName(objName);

Method eat = personObj.getMethod("eat");
Method[] methods = personObj.getMethods();

Method eat = personObj.getDeclaredField("eat");
Method[] methods = personObj.getDeclaredFields();

```


## 获取实例对象
```
Class<?> personObj = Class.forName(objName);

Field sex = personObj.getField("sex");  
Field[] fields = personObj.getFields();

personObj.getDeclaredField("name");
Field[] declaredFields = personObj.getDeclaredFields();
```

## 举例
### 1.生成对象
```
Class<?> aClass = Class.forName("com.java.web.man");
Constructor<?> constructor = aClass.getConstructor(int.class,String.class);
Object o = constructor.newInstance(10,"张三");  //o就是反射生成的对象实例
```

### 2.获取方法
```
Class<?> aClass = Class.forName("com.java.web.man");
Method[] methods = aClass.getMethods();
for (Method s:methods){
    System.out.println(s);
}

输出:
public void com.java.web.man.eatfood()
public void com.java.web.man.playgame()
public void com.java.web.man.eat()
public java.lang.String com.java.web.Person.toString()
public java.lang.String com.java.web.Person.getName()
public void com.java.web.Person.setName(java.lang.String)
public int com.java.web.Person.getAge()
public void com.java.web.Person.setAge(int)
public final void java.lang.Object.wait(long,int) throws java.lang.InterruptedException
public final native void java.lang.Object.wait(long) throws java.lang.InterruptedException
public final void java.lang.Object.wait() throws java.lang.InterruptedException
public boolean java.lang.Object.equals(java.lang.Object)
public native int java.lang.Object.hashCode()
public final native java.lang.Class java.lang.Object.getClass()
public final native void java.lang.Object.notify()
public final native void java.lang.Object.notifyAll()
```

### 3.调用方法

```
Class<?> aClass = Class.forName("com.java.web.man");   
Constructor<?> constructor = aClass.getConstructor(int.class,String.class);
Object o = constructor.newInstance(10,"张三");
Method eat = aClass.getMethod("eat");
eat.invoke(o);  //等效于执行
```