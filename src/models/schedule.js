import queryString from 'query-string';

import { formatMonthData, formatWeekData, countDateTag } from '../utils/dateTool';
let moment = require('moment');
const today = moment(new Date()).format('YYYY-MM-DD');

export default {
  namespace: 'schedule',

  state: {
    tid: null,
    today,
    selectKey: today,
  },

  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ search }) => {
        const query = queryString.parse(search);
        dispatch({
          type: 'changeData',
          payload: { tid: query.tid, n: 0, type: 'weeks', selectKey: today },
        });
      });
    },
  },

  effects: {
    *changeData({ payload }, { put }) {
      const { tid, type, n, step, detail } = payload;
      const calendarData =
        type === 'weeks'
          ? formatWeekData(countDateTag(type, new Date(), n))
          : formatMonthData(countDateTag(type, new Date(), n));
      let data = calendarData.data;
      if (data.has(today)) {
        data.set(today, { ...data.get(today), isSelect: true, day: '今天' });
      }
      let date = { ...calendarData, data };
      yield put({
        type: 'updateData',
        payload: { tid, type, n, step, detail, date },
      });
    },

    *changeSelect({ payload }, { put }) {
      yield put({ type: 'updateData', payload });
    },
  },

  reducers: {
    updateData(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
