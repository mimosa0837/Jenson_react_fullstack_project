// 入口index
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './redux/store'
import App from './App'

// 将App组件标签渲染到index页面的div上
ReactDOM.render((
  // 向所有的容器组件提供store
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('root'))