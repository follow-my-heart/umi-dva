import styles from './schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

export const Week = ({ data, lesson, today, phone }) => {
    if (data) {
        const gird = data.map(_v => {
            let detail = [], gird = [];
            if (lesson) {
                lesson.forEach(value => {
                    if (value.day === _v.time) detail = value.course;
                });
            }
            return <div key={_v.time} className={styles.weekGrid}>
                <div>{`${_v.month}.${_v.day}`}</div>
                <div className={styles.lessonColumn}>
                </div>
            </div>
        })

        return <div className={styles.week}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{gird}</div>
        </div>
    } else return null
};
export default Week;
