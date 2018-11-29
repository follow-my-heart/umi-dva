import Header from './Header'
import Month from './Month'
import { PhoneWeek, PcWeek } from './Week'
import Detail from './Detail'
import styles from './schedule.less'

const Schedule = ({ date, lesson, today, type, changeType, changeNum, phone, onClick, detail }) => {
    if (date) {
        const { data, inputDate } = date;
        const todayArr = inputDate.split('-');
        if (phone) {
            return <div className={styles.phoneSchedule}>
                <Header date={date} type={type} changeType={changeType} changeNum={changeNum} phone={phone} />
                <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
                {type === 'weeks'
                    ? <PhoneWeek data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                    : <Month data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                }
            </div>
        } else {
            return <div className={styles.pcSchedule}>
                <Header date={date} type={type} changeType={changeType} changeNum={changeNum} phone={phone} />
                {type === 'months' ? <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div> : null}
                <div className={styles.pcContent}>
                    {type === 'weeks'
                        ? <PcWeek data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                        : <Month data={data} lesson={lesson} today={today} phone={phone} onClick={onClick} />
                    }
                    {type === 'months' ? <Detail detail={detail} /> : null}
                </div>
            </div>
        }

    } else return null
};
export default Schedule;
