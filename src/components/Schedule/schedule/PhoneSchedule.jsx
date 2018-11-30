import Header from '../header/Header'
import PhoneMonth from '../month/PhoneMonth'
import PhoneWeek from '../week/PhoneWeek'
import styles from '../schedule.less'

const PhoneSchedule = ({ date, lesson, today, type, changeType, changeNum, onClick }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        return <div className={styles.phoneSchedule}>
            <Header date={date} type={type} changeType={changeType} changeNum={changeNum} />
            <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
            {type === 'weeks'
                ? <PhoneWeek data={data} lesson={lesson} today={today} onClick={onClick} />
                : <PhoneMonth data={data} lesson={lesson} today={today} onClick={onClick} />
            }
        </div>
    } else return null
};
export default PhoneSchedule;
