import Schedule from '../components/Schedule/Schedule'
import { connect } from 'dva';

const mySchedule = ({ schedule, dispatch }) => {
  const { lessonData, data, today } = schedule;
  const changeType = (type) => {
    console.log(type)
  }
  const changeNum = (num) => {
    console.log(num, 'num')
  }
  return (
    <div >
      <Schedule
        phone={true}
        type='month'
        data={data}
        lesson={lessonData}
        today={today}
        changeType={changeType}
        changeNum={changeNum}
      />
    </div>
  )
}

export default connect(({ schedule }) => ({
  schedule,
}))(mySchedule);