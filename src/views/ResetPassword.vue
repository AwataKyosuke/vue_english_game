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
        <v-card-text align=center>登録しているメールアドレスを入力してください。</v-card-text>
        <div style="max-width:420px" class="mx-auto">
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

            </div>
            <div class="login-btn pb-6">
              <v-btn
                class="fill-width caption"
                color="#FFCB00"
                depressed
                height="40px"
                tile
              >
                パスワードをリセット
              </v-btn>
            </div>
          </div>
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
