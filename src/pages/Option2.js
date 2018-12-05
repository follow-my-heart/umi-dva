import Schedule from '../components/Schedule/phone/Schedule'

import { connect } from 'dva';

const mySchedule = ({ schedule, dispatch }) => {

  const { tid, type, today, date, n, step, detail, selectKey } = schedule;
  const changeType = (newType) => {
    dispatch({
      type: 'schedule/changeData',
      payload: { tid, step, detail, n: 0, type: newType },
    })
  }

  const changeNum = (num) => {
    dispatch({
      type: 'schedule/changeData',
      payload: { tid, type, detail, step: num, n: num === 0 ? 0 : n + num },
    })
  }

  const onClick = (value, key) => {
    let { data } = date;
    if (type === 'weeks') {

    } else {
      if (key === selectKey) return;
      data.set(key, { ...data.get(key), isSelect: true });
      if (selectKey) data.set(selectKey, { ...data.get(selectKey), isSelect: false });
      dispatch({
        type: 'schedule/changeSelect',
        payload: { detail: value, selectKey: key, date },
      })
    }
  }
  return (
    <div>
      <Schedule
        type={type}
        date={date}
        today={today}
        changeType={changeType}
        changeNum={changeNum}
        onClick={onClick}
        selectKey={selectKey}
      />
    </div>
  )
}

export default connect(({ schedule }) => ({
  schedule,
}))(mySchedule);