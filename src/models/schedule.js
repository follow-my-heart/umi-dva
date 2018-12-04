import queryString from 'query-string'
import { getSchedule } from '../services/api'
import lesson from '../services/lesson'

import { formatMonthData, formatWeekData, countDateTag } from '../utils/dateTool'
let moment = require('moment');

const formatLessonData = (date, lesson) => {
    let data = date;
    if (lesson && lesson.length > 0) {
        lesson.map(v => {
            if (data.has(v.day)) {
                data.set(v.day, {
                    ...date.get(v.day),
                    course: v.course,
                    text: `${v.course.length}节课`,
                })
            }
        })
    }
    console.log(data)
    return data
}
const today = moment(new Date()).format('YYYY-MM-DD');
export default {

    namespace: 'schedule',

    state: {
        tid: null, today, selectKey: today
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, search }) => {
                const query = queryString.parse(search);
                dispatch({
                    type: 'changeData',
                    payload: { tid: query.tid, n: 0, type: 'weeks', selectKey: today },
                });
            });
        },
    },

    effects: {
        *changeData({ payload }, { call, put }) {
            const { tid, type, n, step, detail } = payload;
            const calendarData = type === 'weeks'
                ? formatWeekData(countDateTag(type, new Date(), n))
                : formatMonthData(countDateTag(type, new Date(), n))
            const { startTime, endTime } = calendarData;
            let data = calendarData.data;
            if (data.has(today)) {
                data.set(today, { ...data.get(today), isSelect: true, day: '今天' })
            }
            let date = { ...calendarData, data };
            const res = yield call(getSchedule, JSON.stringify({ start_time: startTime, end_time: endTime
                // , tid: "170000001"
             }));
            if (res.data && res.data.data) {
                res.data.data.length === 0
                    ? date = { ...calendarData, data, message: '没有课程安排哦' }
                    : data = formatLessonData(calendarData.data, res.data.data.courses)
            }
            yield put({
                type: 'updateData',
                payload: { tid, type, n, step, detail, date },
            });
        },
        *changeSelect({ payload }, { put }) {
            yield put({
                type: 'updateData',
                payload,
            });
        },
    },
    reducers: {
        updateData(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};