<template>
  <div class="content">
    <div class="imgbox">
      <img src="https://y.gtimg.cn/mediastyle/yqq/img/logo@2x.png?nowebp=1 2x" alt />
    </div>
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="logincanvas">
        <van-field
          v-model="code"
          name="验证码"
          label="验证码"
          placeholder="验证码"
          :rules="[{ required: true, message: '验证码' }]"
        />
        <div @click="codehandel" class>
          <JScanvas :identifyCode="identifyCode"></JScanvas>
        </div>
      </div>
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>

     <van-collapse    v-model="activeNames">
        <van-collapse-item style="withd: 100%" title="其他登录方式" name="1">
            <img width="80" height="100" src="https://img-blog.csdnimg.cn/20191105144801852.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80MjQxODc3NA==,size_16,color_FFFFFF,t_70" alt="">
          </van-collapse-item>
      </van-collapse>
    <div class="checkbox">
      <van-checkbox v-model="checked" checked-color="#07c160">同意《《用户许可协议》》</van-checkbox>
    </div>
  </div>
</template>

<script>
import JScanvas from "../components/Sidentify.vue";
export default {
  name: "login",
  components: {
    JScanvas
  },
  data() {
    return {
      username: "admin",
      password: "admin",
      checked: [],
      activeNames:[],
      code: "",
      Qrcode: '88888888888',
      identifyCode: "adfc"
    };
  },
  mounted() {
    this.qrcodeShow()
  },
  methods: {
     qrcodeShow: function () {
  
     },
    onSubmit(values) {
      this.$router.push("/index");
      console.log("submit", values);
    },
    codehandel() {
      // 随机生成 字符串
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 5; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      this.identifyCode = text;
    }
  }
};
</script>

<style scoped>
.logincanvas {
  display: flex;
  align-content: center;
}
/deep/.van-cell--clickable {
    text-align: right;
}
.content {
  padding: 50px;
}
.imgbox {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  margin-bottom: 50px;
  margin-top: 50px;
}
.loginAll {
  padding: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row-reverse;
}


img {
  width: 400px;
}
</style>