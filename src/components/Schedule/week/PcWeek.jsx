import styles from '../schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const PcWeek = ({ data, lesson, today, phone, onClick }) => {
    if (data) {
        const content = data.map(_v => {
            return <div key={_v.time} className={styles.weekGrid}>
                <div>{`${_v.month}.${_v.day}`}</div>
            </div>
        })
        return <div className={styles.pcWeek}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{content}</div>
        </div>
    } else return null
};
export default PcWeek;