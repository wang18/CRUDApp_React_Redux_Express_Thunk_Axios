import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import RootReducer  from './reducers/index';
import thunk from 'redux-thunk';

const appStore = createStore(
    RootReducer,
    applyMiddleware(thunk)
);


ReactDOM.render(<Provider store={appStore}>
                    <BrowserRouter>
                        <App />
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));
registerServiceWorker();
