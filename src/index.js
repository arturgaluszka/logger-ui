import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './reducers'
//todo: remove
import {changeFilter} from "./actions"

const store = createStore(rootReducer);

//todo: remove
store.dispatch(changeFilter("ADF_FILTER"));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
