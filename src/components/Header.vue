<template>
  <header>
    <v-app-bar dense dark>
      <!-- ハンバーガーメニュー -->
      <v-app-bar-nav-icon @click="drawer=true"></v-app-bar-nav-icon>
      <!-- タイトル -->
      <v-toolbar-title class="font-weight-bold">English Game</v-toolbar-title>
      <!-- タブメニュー -->
      <v-tabs right>
        <v-tab v-for="menuItem in menuItems" :key="menuItem">
          <v-btn @click="onTabClick(menuItem.name)">
            <v-icon dark left v-text="menuItem.icon" />
            {{ menuItem.label }}
          </v-btn>
        </v-tab>
      </v-tabs>
    </v-app-bar>

    <!-- ハンバーガーメニューの中身 -->
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list nav dense>
        <v-subheader>メニュー</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="menuItem in menuItems" :key="menuItem">
            <v-list-item-icon><v-icon v-text="menuItem.icon"></v-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="menuItem.label" @click="onMenuClick(menuItem.name)" />
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
      selectedItem: 1,
      menuItems: [
        { name: 'Home', icon: 'mdi-home', label: 'トップページ' },
        { name: 'Search', icon: 'mdi-magnify', label: '検索' },
        { name: 'User', icon: 'mdi-account', label: 'マイページ' },
        { name: 'Setting', icon: 'mdi-cog', label: '設定' }
      ]
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
