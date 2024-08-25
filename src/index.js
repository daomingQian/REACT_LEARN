/*
 * @Author: chenqian 813928419@qq.com
 * @Date: 2024-08-24 11:32:49
 * @LastEditors: chenqian 813928419@qq.com
 * @LastEditTime: 2024-08-25 18:53:32
 * @FilePath: \REACT_LEARN\src\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/locale/zh_CN';
// for date-picker i18n
import 'dayjs/locale/zh-cn';
import {ConfigProvider} from 'antd';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
