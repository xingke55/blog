import { Random } from 'mockjs' // 导出随机函数

function login(req) {
  // req是一个请求对象，包含: url，type和body属性
  return {
    code: 200,
    data: {
      username: Random.cname(),
      token: Random.guid(),
      message: 'Login successfully.'
    }
  }
}

function profile(req) {
  return {
    code: 200,
    data: {
      username: Random.cname(),
      age: Random.integer(10, 30),
      date: Random.date(),
      message: ''
    }
  }
}

function logout(req) {
  return {
    code: 200,
    data: {
      message: 'Logout successfully.'
    }
  }
}

export default {
  login,
  profile,
  logout
}
