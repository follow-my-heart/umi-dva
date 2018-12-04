let moment = require('moment');

/**
 * @function formatMonthData - 输入时间戳, 输出对应月份的日期数据
 * @param {Date} date - Date()对象
 * @returns {{inputDate: string, startTime: string, endTime: string, data: [{time: string, thisMonth: boolean, year: number, month: number, day: number}]}
 */

export const formatMonthData = date => {
    // 本月第一天
    const firstDayDate = new Date(date.getFullYear(), date.getMonth(), 1);
    const firstDayWeekIndex = formatWeekIndex(firstDayDate.getDay());
    // 本月总共天数
    const daysInMonth = moment(date).daysInMonth();
    // 日历数组
    let outDay, time, data = new Map();
    
    for (let i = 0; i < 42; i++) {
        outDay = moment(firstDayDate).add(i - firstDayWeekIndex, 'days');
        time = outDay.format('YYYY-MM-DD');
        data.set(time, {
            time,
            thisMonth: i >= firstDayWeekIndex && i < daysInMonth + firstDayWeekIndex,
            isSelect: false,
            year: outDay.format('YYYY'),
            month: outDay.format('M'),
            day: outDay.format('D'),
            week: formatWeekMap(outDay.day()),
            weekDay: outDay.day(),
        })
    }
    return {
        inputDate: moment(date).format('YYYY-MM-DD'),
        startTime: [...data.values()][0].time,
        endTime: [...data.values()][41].time,
        data,
    }
};

/**
 * @function countDateTag - 计算点击 上下周/月的Date对象
 * @param {'weeks'|'months'} type - 周 | 月
 * @param {Date} date - Date()对象
 * @param {number} n - 上下周/月计数 
 * @returns {Date} - 标记时间Date对象
 */

export const countDateTag = (type, date, n) => {
    return n === 0 ? date : moment(date).add(n, type)._d
};

/**
 * @function formatWeekData - 输入时间戳, 输出对应周的日期数据
 * @param {Date} date - Date()对象
 * @returns {{inputDate: string, startTime: string, endTime: string, data: [{time: string, year: number, month: number, day: number}]}
 */

export const formatWeekData = date => {
    const weekNum = formatWeekIndex(date.getDay());
    let inputDay, time, data = new Map();

    for (let i = 0; i < 7; i++) {
        inputDay = moment(date).add(i - weekNum, 'days');
        time = inputDay.format('YYYY-MM-DD');
        data.set(time, {
            time,
            year: inputDay.format('YYYY'),
            month: inputDay.format('M'),
            day: inputDay.format('D'),
            week: formatWeekMap(inputDay.day()),
            weekDay: inputDay.day(),
        })
    }
    return {
        inputDate: moment(date).format('YYYY-MM-DD'),
        startTime: [...data.values()][0].time,
        endTime: [...data.values()][6].time,
        data,
    }
};
export const formatWeekMap = n => {
    let week = '';
    switch (n) {
        case 0: week = '周日'; break;
        case 1: week = '周一'; break;
        case 2: week = '周二'; break;
        case 3: week = '周三'; break;
        case 4: week = '周四'; break;
        case 5: week = '周五'; break;
        case 6: week = '周六'; break;
    }
    return week
}

/**@function formatWeekIndex - 周一到周日序列*/

export const formatWeekIndex = n => n === 0 ? 6 : n - 1;

/**@function repairNum - 数字补零*/

export const repairNum = n => n < 10 ? `0${n}` : n;

/**
 * @function formatInterval - 格式化开始结束时间, 区分上午下午晚上
 * @param {string} s - 开始时间
 * @param {string} e - 结束时间
 * @returns {{interval: string, start: string, end: string, section: string}} - 标记时间Date对象
 */

export const formatInterval = (s, e) => {
    let section = '';
    const start = moment(new Date(s)).format('HH:mm');
    const end = moment(new Date(e)).format('HH:mm');
    const startTime = new Date(s).getHours();
    if (startTime < 12) section = 'morning';
    else if (startTime < 18) section = 'afternoon';
    else section = 'night';
    return {
        interval: `${start}-${end}`,
        start,
        end,
        section,
    }
}
