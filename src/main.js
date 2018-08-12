import Vue from 'vue'
import App from './App.vue'

import './styles/styles.scss';

Vue.filter('capitalize', (value) => {
  if (!value) return ''
  value = value.split(' ');
  for (let i = 0; i < value.length; i++) {
    value[i] = value[i][0].toUpperCase() + value[i].slice(1);
  }
  return value.join(' ');
});

new Vue({
  el: '#app',
  render: h => h(App)
})
