// import logo from './logo.svg';
// import {Add, Multiply} from './helpers';
// import char, {Hi} from './swChar';
import ShoppingCart from './shoppingCart';
import items from './items';
import moreItems from './moreItems';
import './App.css';


function App() {
  return (
    <div>
      <ShoppingCart items={items}/>
      <ShoppingCart items={moreItems}/>
    </div>
  );
}

export default App;
