<template>
    <div>
        <div class="bg">
        <video id="v1" autoplay muted loop>
        <source  src="../img/background.mp4">
        </video>
        </div>
        <div class="header">
            <div>H&M<span style="font-size:35px; font-weight:400">  TECHNOLOGY</span></div>
        </div>
        <br>
        <div class="login">
            <input type="text" placeholder="username" name="username" v-model="username" :class="{'errorModel': errorMessage != '' && usernameErrorFlag}"><br>
            <input type="password" placeholder="password" name="password" v-model="password" :class="{'errorModel': errorMessage != '' && passwordErrorFlag}"><br>
            <input type="button" name="login" value="Login" @click="clickLogin()">
            <input type="button" name="register" value="Register" @click="clickRegister()">
            <p name="errorMessage" class="error">{{errorMessage}}</p>
        </div>
    </div>
</template>

<script>
import UserService from "../services/UserService";

export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
      usernameErrorFlag: false,
      passwordErrorFlag: false
    };
  },
  methods: {
    clickLogin: function() {
      if (
        this.username.length > 0 &&
        this.username.length <= 20 &&
        this.password.length > 0 &&
        this.password.length <= 10
      ) {
        var rex = /[`~!@#$%^&*()_+<>?:"{},/;'[\]]/im;
        if (!rex.test(this.username)) {
          let userObj = {
            username: this.username,
            password: this.password
          };
          console.info(UserService);
          if (UserService.userLogin(userObj)) {
            window.location.href = "/Admin";
          }
        } else {
          this.errorMessage =
            "username include invalid characters, please input again.";
          this.usernameErrorFlag = true;
          let usernameEle = document.getElementsByName("username")[0];
          let errorEle = document.getElementsByName("errorMessage")[0];
          let eles = [];
          eles.push(usernameEle);
          eles.push(errorEle);
          this.autoChange(eles);
        }
      } else {
        this.errorMessage =
          "username or password is invalid, please input again.";
        this.usernameErrorFlag = true;
        this.passwordErrorFlag = true;
        let usernameEle = document.getElementsByName("username")[0];
        let passwordEle = document.getElementsByName("password")[0];
        let errorEle = document.getElementsByName("errorMessage")[0];
        let eles = [];
        eles.push(usernameEle);
        eles.push(passwordEle);
        eles.push(errorEle);
        this.autoChange(eles);
      }
    },
    clickRegister: function() {
      window.location.href = "/Register";
    },
    autoChange: function(eles) {
      if (eles) {
        var that = this;
        let defaultOpacity = 1;
        var timer = setInterval(() => {
          defaultOpacity = that.autoReset(defaultOpacity, 0.1, eles);
          if (defaultOpacity === 0) {
            clearInterval(timer);
          }
        }, 300);
      }
    },
    autoReset: function(opacity, speed, eles) {
      var currentOpacity = opacity - speed;
      if (currentOpacity > 0.1) {
        eles.forEach(element => {
          element.style.opacity = currentOpacity;
        });
        return currentOpacity;
      } else {
        this.errorMessage = "";
        this.username = "";
        this.password = "";
        this.usernameErrorFlag = false;
        this.passwordErrorFlag = false;
        eles.forEach(element => {
          element.style.opacity = 1;
        });
        eles[0].focus();
        return 0;
      }
    }
  }
};
</script>

<style scoped>
.bg {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -999;
  zoom: 1;
}

video {
  height: 100%;
  width: 100%;
  position: fixed;
  object-fit: fill;
  filter: opacity(95%);
}

.grad {
  position: absolute;
  top: -20px;
  left: -20px;
  right: -40px;
  bottom: -40px;
  width: auto;
  height: auto;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    color-stop(0%, rgba(0, 0, 0, 0)),
    color-stop(100%, rgba(0, 0, 0, 0.65))
  );
  /* Chrome,Safari4+ */
  z-index: 1;
  opacity: 0.7;
}

.header {
  position: absolute;
  top: calc(30% - 50px);
  left: calc(50% - 120px);
  z-index: 2;
}

.header div {
  float: left;
  color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 60px;
  font-weight: 400;
}

.header div span {
  color: #5379fa !important;
}

.login {
  position: absolute;
  top: calc(33%);
  left: calc(50% - 110px);
  height: 150px;
  padding: 10px;
  z-index: 2;
  text-align: -webkit-auto;
}

.login input[type="text"] {
  width: 350px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
}

.login input[type="password"] {
  width: 350px;
  height: 30px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 5px;
  color: #fff;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 4px;
  margin-top: 10px;
}

.login input[name="login"] {
  width: 173px;
  height: 35px;
  background: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 5px;
  color: #a18d6c;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
}

.login input[name="register"] {
  width: 172px;
  height: 35px;
  background: #fff;
  border: 1px solid #fff;
  cursor: pointer;
  border-radius: 5px;
  color: #a18d6c;
  font-family: "Exo", sans-serif;
  font-size: 16px;
  font-weight: 400;
  padding: 6px;
  margin-top: 10px;
  margin-left: 10px;
}

.login input[type="button"]:hover {
  opacity: 0.8;
}

.login input[type="button"]:active {
  opacity: 0.6;
}

.login input[type="text"]:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.login input[type="password"]:focus {
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.login input[type="button"]:focus {
  outline: none;
}

::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

::-moz-input-placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.error {
  color: #ff6666;
  margin-top: 10px;
}

.errorModel {
  border-color: #ff6666 !important;
  /* border-block-start-color: #ff6666;
  border-block-end-color: #ff6666; */
}
</style>
