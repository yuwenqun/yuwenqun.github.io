# 多线程高并发安全

#### 先看一段代码
```
threadRunnable.java:

public class threadRunnable implements  Runnable{
    private int ticket=100;

    @Override
    public void run() {
        while (true) {
            if (ticket > 0) {
                System.out.println(Thread.currentThread().getName() + "获取了第 " + ticket + " 张票");
                ticket--;
            }

        }
    }
}

main:
public class threadtest {
    public static void main(String[] args) throws InterruptedException {
        threadRunnable t = new threadRunnable();

        Thread t1 = new Thread(t,"飞机");
        Thread t2 = new Thread(t,"坦克");

        t1.start();
        t2.start();
    }
}

输出结果:
飞机获取了第 100 张票
坦克获取了第 100 张票
坦克获取了第 98 张票
飞机获取了第 99 张票
飞机获取了第 96 张票
坦克获取了第 97 张票
飞机获取了第 95 张票
飞机获取了第 93 张票
飞机获取了第 92 张票
......
...

```

#### 分析
    对于类中的ticket为2个线程的共享变量,由于2个线程都会争抢CPU的运行时间,
    同一个时刻可能获取到相同的变量值,就会出现上述的情况


#### 解决方案
    可以使用同步块的方式解决,threadRunnable.java修改后的代码
```
public class threadRun implements Runnable {
    private int ticket = 100;
    private Object o = new Object();  //🔒

    @Override
    public void run() {
        while (true) {
            synchronized (o){  //同步块加锁机制,同一时刻只有一个线程能获取锁,并且没有获取锁的线程会等待
                if (ticket > 0) {
                    System.out.println(Thread.currentThread().getName() + "获取了第 " + ticket + " 张票");
                    ticket--;
                }
            }

        }

    }
}
```