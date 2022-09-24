import { Provider } from 'react-redux';
import { store } from './src/redux/store/store';
import Router from './src/routes/Router';

export default function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}
