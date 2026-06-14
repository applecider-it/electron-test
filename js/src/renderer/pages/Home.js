const Home = {
  template: `
    <div>
      <h1>{{ message }}</h1>
      <input v-model="text" placeholder="入力..." type="text">
      <button @click="send">送信</button>
    </div>
  `,
  data() {
    return {
      message: 'Hello Vue!',
      text: '',
    };
  },
  methods: {
    send() {
      window.myAPI.callMainFunction(this.text);
    },
  },
};

export default Home;
