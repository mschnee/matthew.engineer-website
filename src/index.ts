import { setConfig } from 'react-hot-loader'

setConfig({
  ignoreSFC: true, // RHL will be __completely__ disabled for SFC
  pureRender: true, // RHL will not change render method
});

import * as React from 'react';
import * as ReactDom from 'react-dom';

import App from './App';

async function install(rootEl: HTMLElement | null) {
    if (rootEl) {
        ReactDom.render(
            React.createElement(App), 
            rootEl
        );
    }
}

install(document.getElementById('root'));
