import React from 'react';
import ReactDOM from 'react-dom';
import App from './common/components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from './common/reducers/main'
import history from "./common/history";
import {Router} from "react-router";

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App/>
        </Router>
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
