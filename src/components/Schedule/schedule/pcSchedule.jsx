import Header from '../header/Header'
import PcMonth from '../month/PcMonth'
import PcWeek from '../week/PcWeek'
import Detail from '../detail/Detail'
import styles from '../schedule.less'

const pcSchedule = ({ date, lesson, today, type, changeType, changeNum, onClick, detail }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        return <div className={styles.pcSchedule}>
            <Header date={date} type={type} changeType={changeType} changeNum={changeNum} />
            {type === 'months' ? <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div> : null}
            <div className={styles.pcContent}>
                {type === 'weeks'
                    ? <PcWeek data={data} lesson={lesson} today={today} onClick={onClick} />
                    : <PcMonth data={data} lesson={lesson} today={today} onClick={onClick} />
                }
                {type === 'months' ? <Detail detail={detail} /> : null}
            </div>
        </div>
    } else return null
};
export default pcSchedule;
