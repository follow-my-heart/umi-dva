import styles from './schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>);

const Month = ({ data, lesson, today, phone }) => {
    if (data) {
        const gird = data.map(_v => {
            let cell = [], text = '', lessonDetail = [], color = _v.this_month ? '#000' : '#ccc';
            if (lesson && lesson.courses) {
                lesson.courses.forEach(value => {
                    if (value.day === _v.time) lessonDetail = value.course;
                });
                for (let i = 0; i < lessonDetail.length; i++) {
                    cell.push(<div key={i} className={styles.cell} style={{ background: color }} />)
                }
                text = lessonDetail.length > 0 ? `${lessonDetail.length}节课` : null
            }
            return <div className={styles.monthGird}
                key={_v.time}
                style={{ color, background: _v.time === today ? '#eee' : '#fff' }}
            >
                <div className={styles.day}>
                    {typeof (_v.day) === 'number' ? _v.day : _v.day.slice(1)}
                </div>
                <div className={styles.lesson}>{phone ? cell : text}</div>
            </div>
        });

        return <div className={styles.month}>
            <div className={styles.header}>{header}</div>
            <div className={styles.content}>{gird}</div>
        </div>
    } else return null
};
export default Month;
