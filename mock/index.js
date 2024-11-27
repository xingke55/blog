import Mock from 'mockjs'
import user from './modules/user'
const { mock } = Mock
export default function mockXHR() {
  mock('/api/users/login/', 'post', user.login)
}

mockXHR()
