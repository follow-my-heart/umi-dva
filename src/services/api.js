import request from '../utils/request'


export async function getSchedule(params) {
    return request('http://1v1-teacher-test.xueba100.com/teacher/getScheduleNew', {
        method: 'post',
        body: params,
    });
}
