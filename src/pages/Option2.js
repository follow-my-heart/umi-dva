import Schedule from '../components/Schedule/Schedule'
import { connect } from 'dva';

const mySchedule = ({ schedule, dispatch }) => {
  const { tid, type, today, date, lesson, n, step } = schedule;

  const changeType = (newType) => {
    dispatch({
      type: 'schedule/changeData',
      payload: { tid, step, n: 0, type: newType },
    })
  }
  const changeNum = (num) => {
    dispatch({
      type: 'schedule/changeData',
      payload: { tid, type, step: num, n: num === 0 ? 0 : n + num },
    })
  }
  return (
    <Schedule
      // phone={true}
      type={type}
      date={date}
      lesson={lesson}
      today={today}
      changeType={changeType}
      changeNum={changeNum}
    />
  )
}

export default connect(({ schedule }) => ({
  schedule,
}))(mySchedule);