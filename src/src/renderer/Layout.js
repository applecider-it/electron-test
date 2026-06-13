const Layout = {
  template: `
    <div>
      <nav>
        <router-link to="/">ホーム</router-link>
        <router-link to="/settings">設定</router-link>
      </nav>
      <router-view></router-view>
    </div>
  `,
};

export default Layout;
