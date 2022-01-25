## 多线程安全问题
```
多线程的安全问题的根本原因是:共享变量

解决方案:代码块/同步方法/锁机制
```

## 代码块
```
public class buyTicketAsync implements Runnable{
    public int ticket = 100;  //总的票数

    Object o = new Object();  //共享变量锁，任何一个对象都可以

    @Override
    public void run() {
        while (true){
            synchronized (o){  //核心代码：o代表的是一个锁，只有持有这个锁才能执行块中的代码
                if (ticket>0){
                    System.out.println();
                    System.out.println(Thread.currentThread().getName()+":正在卖出第"+ticket+"张票");
                    ticket--;
                }
            } //块代码结束，o变量被释放
        }
    }
}
```

## 同步方法
```
public class buyTicketAsyncMethod implements Runnable{
    public int ticket = 100;


    @Override
    public void run() {
        while (true){
            buyTicket();
        }
    }

    public synchronized  void buyTicket(){  //方法前加入synchronized代表是同步方法，等效于枷锁
            if (ticket>0){
                System.out.println();
                System.out.println(Thread.currentThread().getName()+":正在卖出第"+ticket+"张票");
                ticket--;
            }
    }
}
```

## 锁机制
```


```import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

public class buyTicket implements Runnable{
    public int ticket = 100;
    Lock l = new ReentrantLock();  //独占锁

    @Override
    public void run() {
        while (true){
            l.lock();  //加锁
            if (ticket>0){
                System.out.println();
                System.out.println(Thread.currentThread().getName()+":正在卖出第"+ticket+"张票");
                ticket--;
            }
            l.unlock(); //释放锁
        }
    }
}