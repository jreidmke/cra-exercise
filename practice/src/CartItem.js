const CartItem = ({name, price, qty}) => {
    return (
          <div>
              <h4>{name}</h4>
              <ul>
                  <li>Qty: {qty}</li>
                  <li>Price: {price}</li>
                  <li>Subtotal: {price*qty}</li>
              </ul>
          </div>
    )
}

export default CartItem;

// <div>
// {items.map(i => (
// <div>
//     <h4>{i.name}</h4>
//     <ul>
//     <li>Price: {i.price}</li>
//     <li>Qty: {i.qty}</li>
//     </ul>
// </div>
// ))}
// <h4>Total: {items.map(i=>i.price * i.qty).reduce((a, b) => a+b)}</h4>
// </div>