import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import {config} from './firebaseConfig'

Vue.use(VueRouter)
Vue.config.productionTip = false

new Vue({
    router,
    created() {
        firebase.initializeApp(config);
        firebase.auth().onAuthStateChanged((user) => {
          if(user) {
            this.$router.push('/success')
          } else {
            this.$router.push('/auth')
          }
         });
        },
  el: '#app',
  //components: { App },
  //template: '<App/>',
  render: h => h(App)
})