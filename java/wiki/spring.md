## spring简介
######  IOC:
> 如果一个类A 的功能实现需要借助于类B，那么就称类B是类A的依赖，如果在类A的内部去实例化类B，那么两者之间会出现较高的耦合，一旦类B出现了问题，类A也需要进行改造，如果这样的情况较多，每个类之间都有很多依赖，那么就会出现牵一发而动全身的情况，程序会极难维护，并且很容易出现问题。要解决这个问题，就要把A类对B类的控制权抽离出来，交给一个第三方去做，把控制权反转给第三方，就称作控制反转（IOC Inversion Of Control）。控制反转是一种思想，是能够解决问题的一种可能的结果，而依赖注入（Dependency Injection）就是其最典型的实现方法。由第三方（我们称作IOC容器）来控制依赖，把他通过构造函数、属性或者工厂模式等方法，注入到类A内，这样就极大程度的对类A和类B进行了解耦。
###### AOP:

## 依赖注入
> 依赖注入（Dependency Injection）是IOC的最典型的实现方法

> applicationContext.xml分模块引用  ```<import resource="applicationContext-xxx.xml"/>```


![](/java/wiki/javaweb/jdbc/依赖注入原理.jpg)

[依赖注入.xmind](/java/wiki/javaweb/attachment/依赖注入原理.xmind)


* 属性 setter 注入
* 构造方法注入

> xml配置

![](/java/wiki/javaweb/jdbc/spring-依赖注入.jpg)

[依赖注入.xmind](/java/wiki/javaweb/attachment/spring依赖注入.xmind)


> 注解开发

![](/java/wiki/javaweb/jdbc/spring注解开发.png)

[依赖注入.xmind](/java/wiki/javaweb/attachment/spring注解开发.xmind)

## AOP