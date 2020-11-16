<template>
  <header>
    <v-app-bar dense dark>
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <!-- タイトル -->
      <v-toolbar-title class="font-weight-bold">English Game</v-toolbar-title>
      <!-- タブメニュー -->
      <v-tabs right>
        <v-tab class="px-0" v-for="(menuItem, index) in viewMenus" :key="menuItem">
          <v-btn class="py-10" @click="redirectTo(index, menuItem.path)">
            <v-icon dark left v-text="menuItem.icon" />
            {{ menuItem.label }}
          </v-btn>
        </v-tab>
        <v-tab v-if=loggedIn()>
          <v-btn @click="logout"><v-icon dark left v-text="logoutMenu.icon" />{{ logoutMenu.label }}</v-btn>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- ハンバーガーメニューの中身 -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-subheader>メニュー</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(menuItem, index) in viewMenus" :key="menuItem">
            <v-list-item-icon><v-icon v-text="menuItem.icon"></v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="menuItem.label" @click="redirectTo(index, menuItem.path)" />
            </v-list-item-content>
          </v-list-item>
          <v-list-item v-if="loggedIn()">
            <v-list-item-icon><v-icon v-text="logoutMenu.icon"></v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="logoutMenu.label" @click="logout" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      selectedItem: 0,
      menuItems: [
        { path: '/', icon: 'mdi-home', label: 'トップページ', mode: 'always' },
        { path: '/signup', icon: 'mdi-account-plus', label: '新規登録', mode: 'unauth' },
        { path: '/login', icon: 'mdi-login', label: 'ログイン', mode: 'unauth' },
        { path: '/#', icon: 'mdi-account', label: 'マイページ', mode: 'auth' }
      ],
      logoutMenu: { icon: 'mdi-logout', label: 'ログアウト' }
    }
  },
  computed: {
    viewMenus: function () {
      if (this.loggedIn()) {
        return this.menuItems.filter(x => x.mode === 'always' || x.mode === 'auth')
      } else {
        return this.menuItems.filter(x => x.mode === 'always' || x.mode === 'unauth')
      }
    }
  },
  methods: {
    redirectTo (index, path) {
      this.$router.push(path)
    },
    loggedIn () {
      return this.$store.state.UserToken
    },
    logout () {
      this.$store.dispatch('logout')
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss" scoped>

.v-toolbar__title {
  overflow: visible;
}

.v-app-bar__nav-icon {
  @include display_pc {
    display: none !important;
  }
}

.v-tabs {
  justify-content: flex-start;
  display: none;

  @include display_pc {
    display: block !important;
  }
}

</style>
