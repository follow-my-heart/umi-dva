import styles from './schedule.less'

export const Header = ({ date, type = 'weeks', changeType, changeNum }) => {
    if (date) {
        return <div className={styles.header}>
            <div className={styles.type}>
                {
                    [{ key: 'weeks', value: '周' }, { key: 'months', value: '月' }].map(v =>
                        <div className={styles.button} onClick={() => changeType(v.key)} key={v.key}>
                            <div className={type === v.key ? styles.select : null}>{v.value}</div>
                        </div>
                    )
                }
            </div>
            <div className={styles.switch}>
                <div className={styles.cell} onClick={() => changeNum(-1)}>{'<'}</div>
                <div className={styles.cell} onClick={() => changeNum(0)}>{type === 'weeks' ? '本周' : '本月'}</div>
                <div className={styles.cell} onClick={() => changeNum(1)}>{'>'}</div>
            </div>
        </div>;
    } else return null
};
export default Header;