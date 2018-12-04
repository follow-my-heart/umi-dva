import styles from './schedule.less'
import { formatInterval } from '../../../utils/dateTool'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const Week = ({ date, today, onClick }) => {

    if (date) {
        const { data } = date;
        let content = [];
        data.forEach((value, key) => {
            let gird = [];
            if (value.course) {
                value.course.map((item, i) => {
                    const lessonTime = formatInterval(item.start_time * 1000, item.end_time * 1000);
                    gird.push(<div key={i} className={styles[lessonTime.section]} onClick={() => onClick(item, lessonTime)}>
                        <div>姓名</div>
                        <div>{lessonTime.start}</div>
                        <div>{lessonTime.end}</div>
                    </div>)
                })
            }
            content.push(<div key={key} className={styles.weekGrid}>
                <div>{`${value.day}`}</div>
                <div className={styles.lessonColumn}>
                    {gird}
                </div>
            </div>)
        })

        return <div className={styles.phoneWeek}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{content}</div>
        </div>
    } else return null
};

export default Week;