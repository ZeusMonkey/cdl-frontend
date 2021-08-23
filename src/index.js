import { render } from 'react-dom';
import Root from './pages/Root';

import './index.css';

render(<Root />, document.getElementById('root'));

module.hot.accept();
