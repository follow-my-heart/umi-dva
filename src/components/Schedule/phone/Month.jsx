import styles from './schedule.less'
import PropTypes from 'prop-types';

const header = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'].map(v =>
  <div key={v} className={styles.headerGrid}>{v}</div>);

const Month = ({ data, today, onClick }) => {

  let gird = [];
  data.forEach((value, key) => {
    gird.push(<div key={key}
      className={[
        `${styles.monthGird}`,
        `${value.time === today ? styles.today : ''}`,
        `${value.thisMonth ? styles.thisMonth : ''}`,
        `${value.isSelect ? styles.select : ''}`
      ].join(' ')}
      onClick={() => onClick(value, key)}
    >
      <div className={styles.day}>{value.day}</div>
      <div className={styles.text}>{value.text}</div>
    </div>)
  });

  return <div className={styles.month}>
    <div className={styles.monthHeader}>{header}</div>
    <div className={styles.monthContent}>{gird}</div>
  </div>
};

Month.propTypes = {
  data: PropTypes.object.isRequired,
  today: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Month;