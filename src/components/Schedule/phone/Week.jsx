import styles from './schedule.less'
import { formatInterval, repairNum, formatWeekIndex } from '../../../utils/dateTool'

const Week = ({ date, today, onClick }) => {

    if (date) {
        const { data } = date;
        let header = [], content = [];
        data.forEach((value, key) => {
            header.push(<div key={key} className={styles.headerGird}>
                <div>{value.week}</div>
                <div>{key === today ? '今天' : `${repairNum(value.month)}.${repairNum(value.day)}`}</div>
            </div>);
            if (date.message) {
                content = <div className={styles.message}><span className={styles.image} />{date.message}</div>
            } else {
                let list = [];
                if (value.course) {
                    value.course.map((item, i) => {
                        const lessonTime = formatInterval(item.start_time * 1000, item.end_time * 1000);
                        list.push(<div key={i}
                            className={[
                                `${styles[lessonTime.section]}`,
                                `${styles.cell}`,
                            ].join(' ')}
                            onClick={() => onClick(item, lessonTime)}>
                            <div className={styles.label}>{item.true_name.slice(0, 3)}</div>
                            <div className={styles.label}>{lessonTime.start}</div>
                            <div className={styles.label}>{lessonTime.end}</div>
                        </div>)
                    })
                }
                content[formatWeekIndex(value.weekDay)] = <div className={styles.list} key={key}>{list}</div>;
            }
        })

        return <div className={styles.week}>
            <div className={styles.weekHeader}>{header}</div>
            <div className={styles.weekContent}>{content}</div>
        </div>
    } else return null
};

export default Week;