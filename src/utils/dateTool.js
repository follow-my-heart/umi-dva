let moment = require('moment');

/**
 * @function formatMonthData - 输入时间戳, 输出对应月份的日期数据
 * @param {Date} date - Date()对象
 * @returns {{inputDate: string, startTime: string, endTime: string, data: [{time: string, thisMonth: boolean, year: number, month: number, day: number}]}
 */

export const formatMonthData = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    // 本月第一天
    const firstDayDate = new Date(year, month, 1);
    const firstDayWeekIndex = formatWeekIndex(firstDayDate.getDay());
    // 本月最后一天
    const lastDayDate = month === 11 ? new Date(year + 1, 0, 0) : new Date(year, month + 1, 0);
    // 本月总共天数
    const monthDay = lastDayDate.getDate();
    // 上月最后一天
    const lastMonthDate = month === 0 ? new Date(year, 0, 0) : new Date(year, month, 0);
    // 上月总天数
    const lastMonthDay = lastMonthDate.getDate();
    // 本月加上月天数
    const dayNum = monthDay + firstDayWeekIndex;
    // 下月第一天
    const nextMonthDate = month === 11 ? new Date(year + 1, 0, 1) : new Date(year, month + 1, 1);
    // 开始日期
    const startYear = lastMonthDate.getFullYear();
    const startMonth = repairNum(lastMonthDate.getMonth() + 1);
    const startDay = lastMonthDay - firstDayWeekIndex + 1;
    // 结束日期
    const endYear = nextMonthDate.getFullYear();
    const endMonth = repairNum(nextMonthDate.getMonth() + 1);
    const endDay = repairNum(42 - dayNum);
    // 日历数组
    let data = [];
    for (let i = 0; i < firstDayWeekIndex; i++) {
        data.push({
            time: `${startYear}-${startMonth}-${startDay + i}`,
            thisMonth: false,
            year: startYear,
            month: startMonth,
            day: startDay + i,
        })
    }
    for (let i = 0; i < monthDay; i++) {
        data.push({
            time: `${year}-${repairNum(month + 1)}-${repairNum(1 + i)}`,
            thisMonth: true,
            year,
            month: repairNum(month + 1),
            day: repairNum(1 + i),
        })
    }
    for (let i = 0; i < endDay; i++) {
        data.push({
            time: `${endYear}-${endMonth}-${repairNum(1 + i)}`,
            thisMonth: false,
            year: endYear,
            month: endMonth,
            day: repairNum(1 + i),
        })
    }
    return {
        inputDate: moment(date).format('YYYY-MM-DD'),
        startTime: data[0].time,
        endTime: data[41].time,
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
    let inputDay = moment(date);
    let data = [];
    for (let i = 0; i < 7; i++) {
        inputDay = moment(date).add(i - weekNum, 'days')
        data.push({
            time: inputDay.format('YYYY-MM-DD'),
            year: inputDay.format('YYYY'),
            month: inputDay.format('MM'),
            day: inputDay.format('DD'),
        })
    }
    return {
        inputDate: moment(date).format('YYYY-MM-DD'),
        startTime: data[0].time,
        endTime: data[6].time,
        data,
    }
};
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
