import './App.css';
import MyRoute from './MyRoute';
// import Display from './Display';
// import First from './First';
// import {Second,Hi} from './Second';
// import cartReducer from './redux/reducers/cartReducer';
import { legacy_createStore } from 'redux' //it help to know compiler that any reducer is our store
import { Provider } from 'react-redux'
import store from './store';

function App() {
  // const stores=legacy_createStore(cartReducer)
  return (
    // <Provider store={stores}> 
    <Provider store={store}> 
    {/* store is predefined stores is variable */}
      <MyRoute />
    </Provider>
  );
}

export default App;
