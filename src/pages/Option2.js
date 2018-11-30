import PhoneSchedule from '../components/Schedule/schedule/PhoneSchedule'
import PcSchedule from '../components/Schedule/schedule/PcSchedule'

import { connect } from 'dva';

const mySchedule = ({ schedule, dispatch }) => {
  const { tid, type, today, date, lesson, n, step, detail } = schedule;

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
  const onClick = (course, date) => {
    console.log(course, date)
    if (type === 'weeks') {

    } else {
      dispatch({
        type: 'schedule/changeData',
        payload: { tid, type, step, n, detail: { course, date } },
      })
    }
  }
  return (
    <div>
      <PhoneSchedule
        type={type}
        date={date}
        lesson={lesson}
        today={today}
        changeType={changeType}
        changeNum={changeNum}
        onClick={onClick}
      />
      {/* <PcSchedule
        type={type}
        date={date}
        lesson={lesson}
        today={today}
        changeType={changeType}
        changeNum={changeNum}
        onClick={onClick}
        detail={detail}
      /> */}
    </div>
  )
}

export default connect(({ schedule }) => ({
  schedule,
}))(mySchedule);