import { useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meal';
import Cart from './components/Cart/Cart';
import CartProvider from './store/CartProvider';
import ItemProvider from './store/ItemProvider';

function App(props) {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <ItemProvider>
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
    </ItemProvider>
  );
}

export default App;