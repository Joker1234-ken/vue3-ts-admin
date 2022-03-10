<template>
  <div class="content">
    <div class="login_box">
      <h2 class="title">
        <span>后台管理系统</span>
      </h2>

      <div class="input">
        <el-input
          class="username"
          v-model="userState.username"
          placeholder="请输入账号"
          @keyup.enter="login"
        ></el-input>

        <el-input
          class="password"
          v-model="userState.password"
          placeholder="请输入密码"
          type="password"
          @keyup.enter="login"
        ></el-input>

        <div style="display: flex; justify-content: flex-end">
          <el-checkbox v-model="remember"> 记住密码 </el-checkbox>
        </div>
      </div>

      <div>
        <el-button
          :loading="login_loading"
          round
          color="#626aef"
          class="login_button"
          @click="login"
        >
          登录
        </el-button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserType } from '../../store/modules/types'
import { setLogin } from '../../api/login'
// import md5 from 'md5'
import { setToken } from '../../utils/auth'
const router = useRouter()

const login_loading = ref<boolean>(false)
const remember = ref<boolean>(false)
const userState = reactive<UserType>({
  username: '',
  password: ''
})

const login = async () => {
  login_loading.value = true

  const user = await setLogin({
    ...userState
    // password: md5(userState.password)
  })

  login_loading.value = false

  if (user.code === 0) {
    success(user.data.token)
  }
}

const success = (token: string) => {
  setToken(token)

  router.push('/')

  ElMessage({ message: '登录成功', type: 'success' })

  onRemember()
}

const onRemember = () => {
  if (remember.value) {
  } else {
  }
}
</script>

<style scoped lang="less">
.content {
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, lightblue, purple);

  display: grid;
  place-items: center;

  .login_box {
    width: 350px;
    height: 500px;
    border-radius: 20px;
    background: white;

    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      height: 100px;
      line-height: 7.8;
    }

    .input {
      width: 300px;
      height: 260px;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
    }

    .login_button {
      font-weight: 700;
      color: white;
      width: 180px;
    }
  }
}
</style>
