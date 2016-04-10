import React from 'react';
import ReactDom from 'react-dom';
import Main from 'containers/main';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

ReactDom.render((
  <Main />
), document.getElementById('root'));
