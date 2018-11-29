import Month from './Month'
import Week from './Week'
import styles from './schedule.less'

const Schedule = ({ date, lesson, today, type, changeType, changeNum, phone }) => {
    if (date) {
        const { data, inputDate } = date;
        const header = <div className={styles.header}>
            {
                [{ key: 'weeks', value: '周' }, { key: 'months', value: '月' }].map(v =>
                    <div className={styles.button} onClick={() => changeType(v.key)} key={v.key}>
                        <div className={type === v.key ? styles.select : null}>{v.value}</div>
                    </div>
                )
            }
            <div className={styles.cell} onClick={() => changeNum(-1)}>{'<'}</div>
            <div className={styles.cell} onClick={() => changeNum(0)}>{type === 'weeks' ? '本周' : '本月'}</div>
            <div className={styles.cell} onClick={() => changeNum(1)}>{'>'}</div>
        </div>;
        const todayArr = inputDate.split('-');
        return <div className={styles.schedule}>
            {header}
            <div className={styles.today}>{`${todayArr[0]}年${todayArr[1]}月`}</div>
            {type === 'weeks'
                ? <Week data={data} lesson={lesson} today={today} phone={phone} />
                : <Month data={data} lesson={lesson} today={today} phone={phone} />
            }
        </div>
    } else return null
};
export default Schedule;
