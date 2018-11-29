import queryString from 'query-string'
import { getSchedule } from '../services/api'
import { formatMonthData, formatWeekData, countDateTag } from '../components/Schedule/dateTool'
import lesson from '../components/Schedule/lesson'
let moment = require('moment');

export default {

    namespace: 'schedule',

    state: {
        tid: null,
        today: moment(new Date()).format('YYYY-MM-DD'),
    },

    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, search }) => {
                const query = queryString.parse(search);
                dispatch({
                    type: 'changeData',
                    payload: { tid: query.tid, n: 0, type: 'weeks' },
                });
            });
        },
    },
    // 异步行为
    effects: {
        *changeData({ payload }, { call, put }) {
            const { tid, type, n, step, detail } = payload;
            const calendarData = type === 'weeks'
                ? formatWeekData(countDateTag(type, new Date(), n))
                : formatMonthData(countDateTag(type, new Date(), n))
            const { start_time, end_time } = calendarData;
            // const res = yield call(getSchedule, JSON.stringify({ start_time, end_time, tid }));
            // if (res.data && res.data.data && res.data.data.courses) {
            yield put({
                type: 'updateData',
                payload: {
                    tid, type, date: calendarData, n, step, detail,
                    // lesson: res.data.data.courses,
                    lesson: lesson.data.courses,
                },
            });
            // }
        },
    },
    reducers: {
        updateData(state, { payload }) {
            return { ...state, ...payload };
        },
    },
};