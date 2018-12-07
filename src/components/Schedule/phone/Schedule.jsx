import Header from './Header'
import Month from './Month'
import Week from './Week'
import styles from './schedule.less'
import PropTypes from 'prop-types';

const Schedule = ({ date, today, type = 'weeks', changeType, changeNum, onClick }) => {

  const { data, inputDate } = date;
  const todayArr = inputDate.split('-');
  return <div className={styles.schedule}>
    <Header type={type} changeType={changeType} changeNum={changeNum} />
    <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
    {type === 'weeks'
      ? <Week date={date} today={today} onClick={onClick} />
      : <Month data={data} today={today} onClick={onClick} />
    }
  </div>
};

Schedule.propTypes = {
  date: PropTypes.object.isRequired,
  today: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['weeks', 'months']).isRequired,
  changeType: PropTypes.func.isRequired,
  changeNum: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Schedule;
