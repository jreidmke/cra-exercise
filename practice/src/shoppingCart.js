import CartItem from "./CartItem";

const ShoppingCart = ({items, user}) => {
    return (
        <div>
        <h1>{user}'s Cart</h1>
        {items.map(i =>
            <CartItem name={i.name} price={i.price} qty={i.qty}/>
            )}
        <h4>Total: {items.map(i=>i.price * i.qty).reduce((a, b) => a+b)}</h4>
      </div>
    )
}

export default ShoppingCart;