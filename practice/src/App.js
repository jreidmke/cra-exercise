// import logo from './logo.svg';
// import {Add, Multiply} from './helpers';
// import char, {Hi} from './swChar';
import ShoppingCart from './shoppingCart';
import items from './items';
import './App.css';


function App() {
  return (
    <ShoppingCart items={items}/>
  );
}

export default App;
