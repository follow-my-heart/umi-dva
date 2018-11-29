import styles from './schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const Month = ({ data, lesson, today, onClick }) => {
    if (data) {
        const gird = data.map(_v => {
            let text = '', detail = [], color = _v.this_month ? '#000' : '#ccc';
            let day = typeof (_v.day) === 'number' ? _v.day : _v.day.slice(1);
            if (_v.time === today) day = '今天';
            if (lesson) {
                lesson.forEach(value => {
                    if (value.day === _v.time) detail = value.course;
                });
                text = detail.length > 0 ? `${detail.length}节课` : null
            }
            return <div className={styles.monthGird}
                key={_v.time}
                onClick={() => onClick(detail, _v)}
                style={{ color, background: _v.time === today ? ' rgb(247, 247, 247)' : '#fff' }}
            >
                <div className={styles.day}>{day}</div>
                <div className={styles.lesson}>{text}</div>
            </div>
        });

        return <div className={styles.month}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{gird}</div>
        </div>
    } else return null
};
export default Month;
