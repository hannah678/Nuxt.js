// https://vcalendar.io/installation.html
import Vue from 'vue';
import VCalendar from 'v-calendar';

// Use v-calendar & v-date-picker components
Vue.use(VCalendar, {
  componentPrefix: 'vc',  // Use <vc-calendar /> instead of <v-calendar />
});


// nust.config.js 에 plugins: [
//     {src: '~plugins/vue-calendar.js', mode: 'client'}], 넣어주기
