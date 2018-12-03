import Header from './Header'
import Month from './Month'
import Week from './Week'
import Detail from './Detail'
import styles from './schedule.less'

const Schedule = ({ date, lesson, today, type, changeType, changeNum, onClick, detail }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        return <div className={styles.pcSchedule}>
            <Header date={date} type={type} changeType={changeType} changeNum={changeNum} />
            {type === 'months' ? <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div> : null}
            <div className={styles.pcContent}>
                {type === 'weeks'
                    ? <Week data={data} lesson={lesson} today={today} onClick={onClick} />
                    : <Month data={data} lesson={lesson} today={today} onClick={onClick} />
                }
                {type === 'months' ? <Detail detail={detail} /> : null}
            </div>
        </div>
    } else return null
};
export default Schedule;
