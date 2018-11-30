import Header from './header/Header'
import PcMonth from './month/PcMonth'
import PhoneMonth from './month/PhoneMonth'
import PhoneWeek from './week/PhoneWeek'
import PcWeek from './week/PcWeek'
import Detail from './detail/Detail'
import styles from './schedule.less'

const Schedule = ({ date, lesson, today, type, changeType, changeNum, phone, onClick, detail }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        const header = <Header date={date} type={type} changeType={changeType} changeNum={changeNum} phone={phone} />
        if (phone) {
            return <div className={styles.phoneSchedule}>
                {header}
                <div className={styles.title}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
                {type === 'weeks'
                    ? <PhoneWeek data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                    : <PhoneMonth data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                }
            </div>
        } else {
            return <div className={styles.pcSchedule}>
                {header}
                {type === 'months' ? <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div> : null}
                <div className={styles.pcContent}>
                    {type === 'weeks'
                        ? <PcWeek data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                        : <PcMonth data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                    }
                    {type === 'months' ? <Detail detail={detail} /> : null}
                </div>
            </div>
        }

    } else return null
};
export default Schedule;
