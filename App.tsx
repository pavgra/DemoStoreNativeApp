
import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import Navigator from './components/Navigator';
import Catalog from './components/Catalog';
import ShoppingCart from './components/ShoppingCart';
import Pay from './components/Pay';

const tabs = [
  {
    name: 'Catalog',
    component: Catalog,
    iconName: ({ focused }: { focused: Boolean }) => focused ? 'list' : 'list',
  },
  {
    name: 'Cart',
    component: ShoppingCart,
    iconName: ({ focused }: { focused: Boolean }) => 'cart',
  },
];

const App = () => {
  return (
    <Provider store={store}>
      <Navigator tabs={tabs} />
    </Provider>
  );
};

export default App;
