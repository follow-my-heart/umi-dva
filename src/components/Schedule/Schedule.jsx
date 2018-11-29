import Header from './Header'
import Month from './Month'
import Week from './Week'
import Detail from './Detail'
import styles from './schedule.less'

const Schedule = ({ date, lesson, today, type, changeType, changeNum, phone, onClick, detail }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        return <div className={styles.schedule}>
            <Header date={date} type={type} changeType={changeType} changeNum={changeNum} phone={phone} />
            <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
            <div style={{ display: 'flex' }}>
                {type === 'weeks'
                    ? <Week data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                    : <Month data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                }
                {type === 'months' && !phone ? <Detail detail={detail} /> : null}
            </div>

        </div>
    } else return null
};
export default Schedule;
