import styles from '../schedule.less'

export const Header = ({ date, type, changeType, changeNum, phone }) => {
    if (date) {
        return <div className={styles.header}>
            {
                [{ key: 'weeks', value: '周' }, { key: 'months', value: '月' }].map(v =>
                    <div className={styles.button} onClick={() => changeType(v.key)} key={v.key}>
                        <div className={type === v.key ? styles.select : null}>{v.value}</div>
                    </div>
                )
            }
            <div className={styles.cell} onClick={() => changeNum(-1)}>{'<'}</div>
            <div className={styles.cell} onClick={() => changeNum(0)}>{type === 'weeks' ? '本周' : '本月'}</div>
            <div className={styles.cell} onClick={() => changeNum(1)}>{'>'}</div>
        </div>;
    } else return null
};
export default Header;