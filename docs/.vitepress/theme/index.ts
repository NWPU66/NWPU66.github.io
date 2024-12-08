import DefaultTheme from 'vitepress/theme'
// import Foo from '../../views/Echarts.vue'
import './mycss.css'
export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // app.component('foo', Foo)
  }
}
