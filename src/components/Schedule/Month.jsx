
import styles from './schedule.less'

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
    <div key={v} className={styles.weekGrid}>{v}</div>)

const Month = ({ data, lesson, today, phone }) => {

    if (data && lesson) {

        const gird = data.map(_v => {

            let lessonDetail = [];
            if (lesson.courses) {
                lesson.courses.forEach(value => {
                    if (value.day === _v.time) {
                        lessonDetail = value.course;
                    }
                })
            }
            const cell = [];
            for (let i = 0; i < lessonDetail.length; i++) {
                cell.push(<div key={i} className={styles.cell} />)
            }
            const text = lessonDetail.length > 0 ? `${lessonDetail.length}节课` : null

            return <div className={styles.monthGird}
                key={_v.date}
                style={{
                    color: _v.this_month ? '#000' : '#eee',
                    background: _v.date === today ? '#eee' : '#fff',
                }}>
                <div className={styles.day}>{typeof (_v.day) === 'number' ? _v.day : _v.day.slice(1)}</div>
                <div className={styles.lesson}>{phone ? cell : text}</div>
            </div>
        })

        return <div>
            <div className={styles.headerWeek}>{header}</div>
            <div className={styles.month}>{gird}</div>
        </div>
    } else return null
}
export default Month;