<template>
  <div class="container">
    <div class="login-content">
      <div class="login-header">
        <div :class="loginClass">账号登录</div>
        <div :class="loginClass">扫码登录</div>
      </div>
      <el-form
        ref="ruleFormRef"
        style="max-width: 600px"
        :model="ruleForm"
        :rules="rules"
        label-width="auto"
        class="demo-ruleForm"
        :size="formSize"
        status-icon
      >
        <el-form-item label="用户名" prop="username"
          ><el-input v-model="ruleForm.username" style="width: 300px; height: 40px"></el-input
        ></el-form-item>
        <el-form-item label="密码" prop="password"
          ><el-input v-model="ruleForm.password" style="width: 300px; height: 40px"></el-input
        ></el-form-item>
        <el-form-item label="验证码" prop="verfiyPicture">
          <el-input v-model="ruleForm.verfiyPicture" style="width: 200px; height: 40px"></el-input>
          <div ref="codeRef" class="code" @click="getImageCaptcha"></div>
        </el-form-item>
        <div class="login">
          <el-checkbox v-model="ruleForm.remember" label="记住密码" size="large" />
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { reactive, ref, onBeforeMount } from 'vue'
import { ComponentSize, ElMessage, FormInstance, FormRules } from 'element-plus'
import axios from 'axios'

import { getCaptchaImage, login } from '@/service/login/index'
interface RuleForm {
  username: string
  password: string
  verfiyPicture: string
  remember: boolean
}
const ruleForm = reactive<RuleForm>({
  username: '',
  password: '',
  verfiyPicture: '',
  remember: true
})
const checkUsername = (rule: any, value: any, callback: any) => {
  if (value.length >= 6) {
    return callback('用户名长度不能超过6个字符')
  }
  callback()
}
const checkPassword = (rule: any, value: any, callback: any) => {
  if (value.length <= 3) {
    return callback('密码长度不能低于3个字符')
  }
  callback()
}
const checkPicture = (rule: any, value: any, callback: any) => {
  callback()
}
const rules = reactive<FormRules<RuleForm>>({
  username: { validator: checkUsername, trigger: 'blur' },
  password: { validator: checkPassword, trigger: 'blur' },
  verfiyPicture: { validator: checkPicture, trigger: 'blur' }
})

const imageCaptcha = ref<string>('')
const codeRef = ref<HTMLElement>(null)
const ruleFormRef = ref<FormInstance>(null)
//获取验证码
const getImageCaptcha = () => {
  getCaptchaImage()
    .then((res) => {
      imageCaptcha.value = res.data.img
      codeRef.value.innerHTML = imageCaptcha.value
    })
    .catch((e) => {
      console.log(e)
    })
}
onBeforeMount(() => {
  getImageCaptcha()
})

//登录按钮
const handleLogin = () => {
  login(ruleForm)
    .then((res) => {
      debugger
      if (res.data.code === 500) {
        ElMessage.error(res.data.message)
        ruleForm.verfiyPicture = ''
      }
    })
    .catch((e) => {
      console.log(e)
    })
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  margin-top: 300px;

  /* align-content: center; */
  .login-header {
    display: flex;
    justify-content: space-between;
    height: 40px;
  }
  .login {
    display: flex;
    justify-content: space-between;
  }
  .code {
    width: 100px;
    display: flex;
    align-items: center;
  }
}
</style>
