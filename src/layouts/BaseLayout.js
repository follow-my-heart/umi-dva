import React from 'react'
import styles from './BaseLayout.less'
import { Menu } from 'antd'
import Link from 'umi/link'
import router from 'umi/router'

export default class BaseLayout extends React.PureComponent {

  componentDidMount() {
    if (this.props.location.pathname === '/') router.push('/Option1/Page1');
  }

  handleClick = (...props) => {
    // console.log(props, 'handleClick')
  }

  render() {
    const { children, location, ...param } = this.props;

    return (
      <div className={styles.main}>
        <Menu
          className={styles.menu}
          onClick={this.handleClick}
          defaultSelectedKeys={[`/${location.pathname.split("/")[1]}`]}
          mode="inline"
        >
          {
            ["/Option1/Page1", "/Option2", "/Option3", "/Option4"].map(v =>
              <Menu.Item key={`/${v.split("/")[1]}`}><Link to={v}>{v.split("/")[1]}</Link></Menu.Item>
            )
          }
        </Menu>
        <div className={styles.content}>
          {children}
        </div>
      </div>
    )
  }
}
