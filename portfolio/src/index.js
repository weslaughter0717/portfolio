import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes/Routes';
import { AppContainer } from 'react-hot-loader'
import registerServiceWorker from './registerServiceWorker';

import './Theme/globalStyle';

ReactDOM.render(<AppContainer>
                {Routes}
                </AppContainer>,
document.getElementById('root'));
registerServiceWorker();
