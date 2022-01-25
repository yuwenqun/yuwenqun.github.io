## 介绍
```
1、List,Set都是继承自Collection接口，Map则不是

2、List特点：元素有放入顺序，元素可重复 ，Set特点：元素无放入顺序，元素不可重复，重复元素会覆盖掉，（注意：元素虽然无放入顺序，但是元素在set中的位置是有该元素的HashCode决定的，其位置其实是固定的，加入Set 的Object必须定义equals()方法 ，另外list支持for循环，也就是通过下标来遍历，也可以用迭代器，但是set只能用迭代，因为他无序，无法用下标来取得想要的值。） 
 
3.Set和List对比： 
Set：检索元素效率低下，删除和插入效率高，插入和删除不会引起元素位置改变。 
List：和数组类似，List可以动态增长，查找元素效率高，插入删除元素效率低，因为会引起其他元素位置改变。 
 
4.Map适合储存键值对的数据
```


## List使用
```
public static void main(String[] args) {
    ArrayList<String> s = new ArrayList<>();

    s.add("hello");
    s.add("world");

    Iterator<String> iterator = s.iterator();
    while (iterator.hasNext()){
        String next = iterator.next();
        System.out.println(next);
    }

    for (String s1 : s) {
        System.out.println(s1);
    }

}
```

## Set使用
```
public static void main(String[] args) {
    HashSet<String> strings = new HashSet<>();

    strings.add("a");
    strings.add("b");
    strings.add("a");
    strings.add("0");


    System.out.println(strings);  // [0, a, b]

    for (String string : strings) {
        System.out.println(string);
    }
}
```

## Map使用
```
public static void main(String[] args) {
    HashMap<Integer, String> integerStringHashMap = new HashMap<>();

    integerStringHashMap.put(1,"hello");
    integerStringHashMap.put(2,"world");

    System.out.println(integerStringHashMap);  //{1=hello, 2=world}

    Set<Integer> integers = integerStringHashMap.keySet();
    for (Integer integer : integers) {
        System.out.println(integer);  // key
        String s = integerStringHashMap.get(integer);
        System.out.println(s); // value
    }
    
    Iterator<Integer> iterator = integers.iterator();
    while (iterator.hasNext()){
        Integer next = iterator.next();
        System.out.println(next); //key
        System.out.println(integerStringHashMap.get(next)); //value
    }
}
```