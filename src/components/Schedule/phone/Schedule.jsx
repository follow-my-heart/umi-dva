import Header from './Header'
import Month from './Month'
import Week from './Week'
import styles from './schedule.less'

const Schedule = ({ date, today, type = 'weeks', changeType, changeNum, onClick, selectKey }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        return <div className={styles.schedule}>
            <Header date={date} type={type} changeType={changeType} changeNum={changeNum} />
            <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
            {type === 'weeks'
                ? <Week date={date} today={today} onClick={onClick} />
                : <Month data={data} today={today} onClick={onClick} selectKey={selectKey} />
            }
        </div>
    } else return null
};
export default Schedule;
