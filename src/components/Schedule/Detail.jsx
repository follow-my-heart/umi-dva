import styles from './schedule.less'
import { formatInterval } from './dateTool'


export const Detail = ({ detail }) => {
    if (detail) {
        console.log(detail)
        const list = detail.course.map((_v, i) => {
            const lessonTime = formatInterval(_v.start_time * 1000, _v.end_time * 1000);
            return <div key={i} className={styles.item}>
                <div className={styles.subtitle}>{lessonTime.interval}</div>
                <div className={styles.card}>{_v.true_name}</div>
            </div>
        }
        )
        return <div className={styles.detail}>
            <div className={styles.detailHeader}>{detail.date.time}</div>
            <div className={styles.list}>{list}</div>
        </div>
    } else return null
};
export default Detail;
