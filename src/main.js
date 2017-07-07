// Import Vue
import Vue from 'vue'

// Import F7
import Framework7 from 'framework7'

// Import F7 Vue Plugin
import Framework7Vue from 'framework7-vue'

// Import F7 iOS Theme Styles
import Framework7Theme from 'framework7/dist/css/framework7.ios.min.css'

import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'
/* OR for Material Theme:
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
*/



// Import App Custom Styles
import c_style from './css/c_style.css'
import indexStyle from './css/index.css'
import taskStyle from './css/task.css'
import fontStyle from "./font/iconfont.css"
// Import Routes
import Routes from './routes.js'

// Import App Component
import App from './app'
import store from './store/store'
// Init F7 Vue Plugin

Vue.use(Framework7Vue)

import ajax from './ajax/ajax.js'

Vue.prototype.$ajax = ajax;

// Init App
var app = new Vue({
  el: '#app',
  template: '<app/>',
  // Init Framework7 by passing parameters here
  framework7: {
    root: '#app',
    /* Uncomment to enable Material theme: */
    // material: true,
    routes: Routes,
    modalTitle:"提示",
  },
  store,
  // Register App Component
  components: {
    app: App
  }
});


