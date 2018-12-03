## 日历组件

````jsx

```
phone
```
    <Schedule
        type=''                      // 周历或月历, string类型, 'week'|'month'  
        date={}                      // 日期数据  {}
        today={}                     // string   'YYYY-MM-DD'
        changeType={}                // 改变type的回调函数, 参数同上面的type
        changeNum={}                 // 改变计数的回调函数, 参数number类型             -1 上周/月   |   0 本周/月   |   1 下周/月 
        onClick={}                   // 每个格子的点击事件, 参数 lesson, date, index                  ( lesson, date, index ) => {}
      />
```
pc
```
    <Schedule
        type=''                      // 周历或月历, string类型, 'week'|'month'  
        date={}                      // 日期数据  {}
        today={}                     // string   'YYYY-MM-DD'
        changeType={}                // 改变type的回调函数, 参数同上面的type
        changeNum={}                 // 改变计数的回调函数, 参数number类型             -1 上周/月   |   0 本周/月   |   1 下周/月 
        onClick={}                   // 每个格子的点击事件, 参数 lesson, date, index                  ( lesson, date, index ) => {}
        detail={}                    // 每天课程信息, 移动端不用传, pc 传 月份onClick事件的参数  {lesson, date, index }
      />