## 日历组件

````jsx

 <Schedule
        phone={true}                 // 是移动端传true, pc可不传此参数
        type=''                      // 周历或月历, string类型, 'week'|'month'  
        data={}                      // 固定格式日期数据  []
        lesson={}                    // 固定格式课程数据  [] 
        today={}                     // string   '2018,9,10'
        changeType={}                // 改变type的回调函数, 参数同上面的type
        changeNum={}                 // 改变计数的回调函数, 参数number类型             -1 上周/月   |   0 本周/月   |   1 下周/月 
      />