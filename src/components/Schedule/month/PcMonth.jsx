import styles from '../schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const PcMonth = ({ data, lesson, today, onClick }) => {
    if (data) {
        const gird = data.map((_v, i) => {
            let text = '', detail = [];
            let day = typeof (_v.day) === 'number' ? _v.day : _v.day.slice(1);
            if (_v.time === today) day = '今天';
            if (lesson) {
                lesson.forEach(value => {
                    if (value.day === _v.time) detail = value.course;
                });
                text = detail.length > 0 ? `${detail.length}节课` : null
            }
            return <div className={[
                `${styles.monthGird}`,
                `${_v.time === today ? styles.today : ''}`,
                `${_v.thisMonth ? styles.thisMonth : ''}`,
            ].join(' ')}
                key={_v.time}
                onClick={() => onClick(detail, _v, i)}
            >
                <div className={styles.day}>{day}</div>
                <div className={styles.lesson}>{text}</div>
            </div>
        });

        return <div className={styles.pcMonth}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{gird}</div>
        </div>
    } else return null
};
export default PcMonth;