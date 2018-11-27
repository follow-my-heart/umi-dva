import queryString from 'query-string'
import { getSchedule } from '../services/api'
import { formatMonthData } from '../components/Schedule/dateTool'

export default {

    namespace: 'schedule',

    state: {
        tid: null,
        lessonData: null,
        type: 'week',
        num: 0,
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname, search }) => {
                const query = queryString.parse(search);
                dispatch({
                    type: 'getLesson',
                    payload: { tid: query.tid },
                });
            });
        },
    },
    // 异步行为
    effects: {
        *getLesson({ payload }, { call, put }) {
            yield put({ type: 'showLoading' });
            const { tid } = payload;
            const monthData = formatMonthData(new Date(2018, 9, 27));
            console.log(monthData, 'monthData')
            const { start_time, end_time, data, today } = monthData;
            const res = yield call(getSchedule, JSON.stringify({ start_time, end_time, tid }));
            if (res.data && res.data.data) {
                yield put({
                    type: 'updateData',
                    payload: { tid, lessonData: res.data.data, data, today },
                });
            }
        },
        *changeType({ payload }, { call, put }) {

        },
        *changeNum({ payload }, { call, put }) {

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