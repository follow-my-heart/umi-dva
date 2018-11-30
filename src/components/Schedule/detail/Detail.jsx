import styles from '../schedule.less'
import { formatInterval } from '../../../utils/dateTool'


export const Detail = ({ detail }) => {
    if (detail) {
        const list = detail.course.map((_v, i) => {
            const lessonTime = formatInterval(_v.startTime * 1000, _v.endTime * 1000);
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
