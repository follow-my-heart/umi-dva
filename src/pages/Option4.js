import { DatePicker, List } from 'antd-mobile'
import './test.less'
import React from 'react'

function formatDate(date) {
  const pad = n => n < 10 ? `0${n}` : n;
  const dateStr = `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const timeStr = `${pad(date.getHours())}:00`;
  return `${dateStr} ${timeStr}`;
}

class Demo extends React.Component {
  state = {
    date: null,
  }
  render() {
    return (
      <List className='list'>
        <DatePicker
          className='integer'
          value={this.state.date}
          extra='请选择日期'
          title='开始时间'
          minDate={new Date()}
          format={val => formatDate(val)}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal" arrow='empty' activeStyle={{ color: 'red' }}></List.Item>
        </DatePicker>

        <DatePicker
          value={this.state.date}
          extra='请选择日期'
          title='结束时间'
          minDate={new Date()}
          format={val => formatDate(val)}
          onChange={date => this.setState({ date })}
        >
          <List.Item arrow="horizontal" arrow='empty'></List.Item>
        </DatePicker>
      </List>
    );
  }
}
export default Demo;