## 概念
```
根据类的路径(例如:java.lang.Runtime)通过反射能获得该类,并且能获取该类的所有方法
并且能执行,无需import该类和new实例化对象
```

```
Class clazz = Class.forName("java.lang.Runtime") :  获取类的方法
clazz.newInstance()  :实例化对象
Method method = class.getMethod("exec") :获取类的exec方法,如果方法需要参数则需要传对应的类,例如String.class
method.invoke((clazz.newInstance()) :执行exec方法
```


## 反射执行过程
![](/java/reflex/reflex_md.jpg)

* Class.forName: 执行的对应类的static{} 中的代码
* newInstance(): 执行的是构造方法
* invoke : 执行的是调用对应的方法中的代码
  *   ```如果这个方法是一个普通方法，那么第一个参数是类对象```
  *   ```如果这个方法是一个静态方法，那么第一个参数是类```


## 反射枚举
#### 1.静态方法调用[Runtime.getRuntime.exec]
Runtime.getRuntime.exec("open /Applications/Calculator.app");
```
Class<?> aClass = Class.forName("java.lang.Runtime");
Method exec = aClass.getMethod("exec",String.class); // public Process exec(String command) {...}
Method getRuntime = aClass.getMethod("getRuntime");// public static Runtime getRuntime() { .... }
Object Runtime_getRuntime = getRuntime.invoke(aClass); //Runtime.getRuntime
exec.invoke(Runtime_getRuntime, "open /Applications/Calculator.app"); //Runtime.getRuntime.exec("open /Applications/Calculator.app")
```
#### 2.普通方法调用[java.lang.ProcessBuilder]
new ProcessBuilder("touch /tmp/1.txt").start();
```
Class<?> aClass = Class.forName("java.lang.ProcessBuilder");

String[] cmds = new String[]{"open","/Applications/Calculator.app"};  //定义执行的命令
Constructor<?> pbConstruct = aClass.getConstructor(List.class); //public ProcessBuilder(List<String> command){ ...... }
ProcessBuilder processBuilder = ((ProcessBuilder) pbConstruct.newInstance(Arrays.asList(cmds)));  // new ProcessBuilder("open /Application/Calculator.app");
processBuilder.start(); // run
```

***以上是通过方式1触发***
```
String[] cmds = new String[]{"open","/Applications/Calculator.app"};

Class<?> aClass = Class.forName("java.lang.ProcessBuilder");
Method start = aClass.getMethod("start");

start.invoke(aClass.getConstructor(List.class).newInstance(Arrays.asList(cmds)));
```

#### 3.私有方法和私有构造
```
Class clazz = Class.forName("java.lang.Runtime"); 
Constructor m = clazz.getDeclaredConstructor();   //私有构造
m.setAccessible(true);  //必须设置否则无法调用私有方法
clazz.getMethod("exec", String.class).invoke(m.newInstance(), "calc.exe");
```