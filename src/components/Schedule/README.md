## 日历组件

````jsx

 <Schedule
        phone={true}                 // 是移动端传true, pc可不传此参数
        type=''                      // 周历或月历, string类型, 'week'|'month'  
        date={}                      // 日期数据  []
        lesson={}                    // 课程数据  [] 
        today={}                     // string   'YYYY-MM-DD'
        changeType={}                // 改变type的回调函数, 参数同上面的type
        changeNum={}                 // 改变计数的回调函数, 参数number类型             -1 上周/月   |   0 本周/月   |   1 下周/月 
      />