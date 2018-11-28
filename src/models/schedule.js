import queryString from 'query-string'
import { getSchedule } from '../services/api'
import { formatMonthData, formatWeekData, countDateTag } from '../components/Schedule/dateTool'

export default {

    namespace: 'schedule',

    state: {
        tid: null,
        data: null,
        lessonData: null,
        input_date: null,
        today: '2018-11-28',
        step: 0,
        type: 'weeks',
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
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
            const { tid, n, type, step } = payload;
            const calendarData = type === 'weeks'
                ? formatWeekData(countDateTag(type, new Date(), n))
                : formatMonthData(countDateTag(type, new Date(), n))
            const { start_time, end_time, data, input_date } = calendarData;
            const res = yield call(getSchedule, JSON.stringify({ start_time, end_time, tid }));
            if (res.data && res.data.data) {
                yield put({
                    type: 'updateData',
                    payload: {
                        tid, data, input_date, n, step, type,
                        lessonData: res.data.data,
                    },
                });
            }
        },
    },
    reducers: {
        showLoading(state) {
            return { ...state, loading: true };
        },
        updateData(state, action) {
            return { ...state, ...action.payload, loading: false };
        },
    },
};