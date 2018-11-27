import Month from './Month'
import Week from './Week'
import styles from './schedule.less'

const Schedule = ({ data, lesson, today, type, changeType, changeNum, phone }) => {
    const header = <div className={styles.scheduleHeader}>
        {
            [{ key: 'week', value: '周' },
            { key: 'month', value: '月' }].map(v =>
                <div className={styles.button} onClick={() => changeType(v.key)} key={v.key}>
                    <div className={type === v.key ? styles.select : null}>{v.value}</div>
                </div>
            )
        }
        <div className={styles.cell} onClick={() => changeNum(-1)}>{'<'}</div>
        <div className={styles.cell} onClick={() => changeNum(0)}>{type === 'week' ? '本周' : '本月'}</div>
        <div className={styles.cell} onClick={() => changeNum(1)}>{'>'}</div>
    </div>
    const todayArr = today ? today.split(',') : [];
    return <div>
        {header}
        <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
        {type === 'week'
            ? <Week data={data} lesson={lesson} today={today} phone={phone} />
            : <Month data={data} lesson={lesson} today={today} phone={phone} />
        }
    </div>
}
export default Schedule;