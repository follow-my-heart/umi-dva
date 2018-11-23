
import styles from './Option1.less'
import { Menu } from 'antd'
import Link from 'umi/link'

export default ({ children, location, ...param }) => {

  return (
    <div className={styles.main}>
      <Menu
        className={styles.menu}
        defaultSelectedKeys={[location.pathname]}
        mode="horizontal"
      >
        {
          ["/Option1/Page1",
            "/Option1/Page2",
            "/Option1/Page3",
            "/Option1/Page4"].map(v =>
              <Menu.Item key={v}><Link to={v}>{v.split("/")[2]}</Link></Menu.Item>)
        }
      </Menu>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}
