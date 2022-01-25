## Calendar的使用
```
Calendar instance = Calendar.getInstance();
int year = instance.get(Calendar.YEAR);
int month = instance.get(Calendar.MONTH) + 1;
int day = instance.get(Calendar.DATE);
int hour = instance.get(Calendar.HOUR);
int minute = instance.get(Calendar.MINUTE);
int seconds = instance.get(Calendar.MILLISECOND);
System.out.println(year+"年" + month+ "月" +day + "日"+" " +hour + ":" + minute +":" + seconds);
//2021年4月14日 11:10:


Date time = instance.getTime(); //Wed Apr 14 11:10:14 CST 2021
long timeInMillis = instance.getTimeInMillis(); //1618369814780
```