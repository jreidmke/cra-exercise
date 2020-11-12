import items from './items';

const ShoppingCart = () => {
    return (
        <div>
        <h1>Shopping Cart</h1>
          <div>
            {items.map(i => (
              <div>
                <h4>{i.name}</h4>
                <ul>
                  <li>Price: {i.price}</li>
                  <li>Qty: {i.qty}</li>
                </ul>
              </div>
            ))}
            <h4>Total: {items.map(i=>i.price * i.qty).reduce((a, b) => a+b)}</h4>
          </div>
      </div>
    )
}

export default ShoppingCart;