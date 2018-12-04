import styles from './schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const Month = ({ data, today, onClick }) => {

    if (data) {
        let gird = [];
        data.forEach((value, key) => {
            gird.push(<div className={[
                `${styles.monthGird}`,
                `${value.time === today ? styles.today : ''}`,
                `${value.thisMonth ? styles.thisMonth : ''}`,
                `${value.isSelect ? styles.select : ''}`
            ].join(' ')}
                key={key}
                onClick={() => onClick(value, key)}
            >
                <div className={styles.day}>{value.day}</div>
                <div className={styles.text}>{value.text}</div>
            </div>)
        });

        return <div className={styles.phoneMonth}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{gird}</div>
        </div>
    } else return null
};
export default Month;