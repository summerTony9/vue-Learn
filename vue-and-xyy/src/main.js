import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

import { Button } from 'vant';
import { SwipeCell } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Icon } from 'vant';
import { Circle } from 'vant';

import 'vant/lib/index.css';

createApp(App)
  .use(Button)
  .use(SwipeCell)
  .use(Cell)
  .use(CellGroup)
  .use(Icon)
  .use(Circle)
  .mount('#app')
