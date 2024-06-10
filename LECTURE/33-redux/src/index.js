import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import Bank from './Bank';

import {configureStore} from '@reduxjs/toolkit';
import rootReducer from './store';
import {Provider} from 'react-redux'; //컴포넌트에 store를 넘겨주는 역할을 해준다.
import {composeWithDevTools} from '@redux-devtools/extension';

const root = ReactDOM.createRoot(document.getElementById('root'));

//store 정의 : 전역 상태를 관리하는 공간임. 하나의 프로젝트에 하나 이상 있으면 안된다.
const store = configureStore({reducer : rootReducer},composeWithDevTools());
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <App2 />   
      <hr />
      <App3 />
      <hr />
      <App4 /> */}
      <Bank/>
    </Provider>
  </React.StrictMode>
);