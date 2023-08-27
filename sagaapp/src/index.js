import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/MovieList';
import store from './store';
import { Provider } from 'react-redux';


// We are connecting store with view using provider//

ReactDOM.render(
    <Provider store={store}> 
        <App/>
    </Provider>
    ,document.getElementById('root')
)

if(module.hot) {module.hot.accept(App)}
