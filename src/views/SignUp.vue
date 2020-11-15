<template>
  <div>
    <v-app-bar height="50em" color="#F5F5F5" dense flat>
    </v-app-bar>
    <v-content style="background:#F5F5F5;height: auto;" class="pa-0 fill-height">
      <v-card
      class="mx-auto fill-width"
      flat
      max-width="820"
    >
      <v-card-title class="text-center pa-6">
        <h4 class="fill-width">会員情報入力</h4>
      </v-card-title>
      <v-divider> </v-divider>
      <div class="px-6 py-8">
        <div style="max-width:400px" class="mx-auto">

          <v-container>
            <v-row>
              <v-col>
                <v-btn
                  class="fill-width text-capitalize caption"
                  color="#DB4437"
                  dark
                  depressed
                  height="40px"
                  tile
                >
                  <img
                    class="button-logo-img mr-4"
                    src="https://madeby.google.com/static/images/google_g_logo.svg"
                    style="height:24px;"
                  />
                  Googleで登録
                </v-btn>
              </v-col>

              <v-col>
                <v-btn
                  class="fill-width text-capitalize caption"
                  color="#3B5998"
                  dark
                  depressed
                  height="40px"
                  tile
                >
                  <img
                    class="button-logo-img mr-4"
                    src="@/assets/facebook.png"
                    style="height:24px;"
                  />
                  Facebookで登録
                </v-btn>
              </v-col>
            </v-row>

            <v-row>
              <v-col>
                <v-btn
                  class="fill-width text-capitalize caption"
                  color="#1DA1F2"
                  dark
                  depressed
                  height="40px"
                  tile
                >
                  <img
                    class="button-logo-img mr-4"
                    src="@/assets/twitter.png"
                    style="height:24px;"
                  />
                  Twitterで登録
                </v-btn>
              </v-col>

              <v-col>
                <v-btn
                  class="fill-width text-capitalize caption"
                  color="#24292e"
                  dark
                  depressed
                  height="40px"
                  tile
                >
                  <img
                    class="button-logo-img mr-4"
                    src="@/assets/github.png"
                    style="height:24px;"
                  />
                  Githubで登録
                </v-btn>
              </v-col>
            </v-row>

          </v-container>

          <div class="separator separator_login_page">
            <div class="middle_separator">または</div>
          </div>
          <div class="pt-3">
            <div>
              <v-text-field
                v-model="email"
                autofocus
                dense
                class="mb-3"
                :rules="[rules.required]"
                height="40px"
                label="メールアドレス"
              ></v-text-field>

              <v-text-field
                v-model="password"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                :type="passwordShow ? 'text' : 'password'"
                dense
                :rules="[rules.required]"
                height="40px"
                name="input-password"
                label="パスワード"
                hint="英数字12桁以上で入力してください。"
                @click:append="passwordShow = !passwordShow"
              ></v-text-field>
            </div>
            <div class="login-btn pb-6">
              <v-btn
                class="fill-width caption"
                color="#FFCB00"
                depressed
                height="40px"
                tile
              >
                会員登録
              </v-btn>
            </div>
          </div>
          <v-divider></v-divider>
          <v-card-text align="center">
            <span>既にアカウントをお持ちの方は <router-link to="/login">ログイン</router-link> に移動</span>
          </v-card-text>
        </div>
      </div>
      </v-card>
    </v-content>
    <footer style="background: #F5F5F5">
      <div class="pa-8 d-flex flex-warp justify-center fill-wdith">
        <router-link to="privacy" class="link-caption mr-8">プライバシーポリシー</router-link>
        <router-link to="tos" class="link-caption mr-8">利用規約</router-link>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      password: null,
      passwordShow: false,
      rules: {
        required: value => !!value || '必須入力項目です。'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fill-width {
  width: 100%;
}
.link-caption {
  text-decoration: none;
  color: #666 !important;
  font-size: .75rem;
}
.separator {
  margin-top: 30px;
  height: 0;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #fff;
  position: relative;
}
.middle_separator {
  position: absolute;
  padding: 0 16px;
  color: #777;
  background: #fff;
  font-size: 13px;
  text-shadow: 0 1px 0 #fff;
  text-transform: uppercase;
  top: -9px;
  left: 41%;
}
.login-btn{
  margin-top:1em;
}
</style>
