import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux/configureStore';
import App from '../App';

const TestApp = () => (

  <Provider store={store}>
    <BrowserRouter>

      <App />

    </BrowserRouter>
  </Provider>
);

export default TestApp;
