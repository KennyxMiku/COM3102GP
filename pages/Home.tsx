import { useState } from 'react'
import { getAllItems, Item } from './core';

const shopItems = getAllItems();

interface LineItem {
    id: string;
    item: string,
    quantity: number,
    price:number
}

const Demo: React.FC = function () {
    const [cart, setCart] = useState<LineItem[]>([]);
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    function addItemToCart(item: Item) {
        let check: boolean = false;
        let num: number;
        for (let i = 0; i < cart.length; i++) {
            
                if (cart[i].id == item.id) {
                    check = true;
                    num = i;
                }     
        }
        if (check) {

            cart[num].quantity = cart[num].quantity + 1;
            setCart([...cart]);
        }
        else {
            setCart([...cart, { id: item.id, item: item.title, quantity: 1, price: item.price }]);
        }
 
  }
    
    function addnum(index: number) {
            cart[index].quantity = cart[index].quantity + 1;
            setCart([...cart]);
    }

    function deductnum(index: number) {
        if (cart[index].quantity === 1) {
            
            cart.splice(index, 1);
            setCart([...cart]);
            if (cart.length >= 1) { }
            else {
                setCount(0);
            }
        }
        else {
            cart[index].quantity = cart[index].quantity - 1;
            setCart([...cart]);
        }
    }

    function removeItem(index: number) {
        setCount(count - cart[index].price * cart[index].quantity);
        cart.splice(index, 1);
        setCart([...cart]);
        
        if (cart.length >= 1) { }
        else {
            setCount(0);
        }
    }
    function removeall(index: number) {
        cart.splice(0, index);
        setCart([...cart]);
        setCount(0);
    }
    


    function Total() {
       
        let num: number = 0;
        
            for (let i = 0; i < cart.length; i++) {
              num=  cart[i].price * cart[i].quantity + num;
        }
        setCount((count-count) + num);
    }
    return (
        <div style={{ backgroundColor: '#abdbe3'}}>
            <p style={{ backgroundColor: 'white' }}><h1> Product:</h1> </p>
            {shopItems.map(item => <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />)}
            <p style={{ backgroundColor: 'white' }}> <h2>Cart items:</h2> </p>
          {cart.map((item, index) => <CartItem key={item.item} item={item} onRemove={() => removeItem(index)} onAddd={() => addnum(index)} ondeduct={() => deductnum(index)} />)}

            <p><button onClick={() => removeall(cart.length)}> Reset</button>  <button onClick={() => Total()}> Cacluate Total</button></p>
            <p style={{ fontSize: '30px' }}>Total: ${count}</p>
        </div>
  )
}

const ShopItem: React.FC<{
    item: Item;
    onAdd: () => void;
}> = function ({ item, onAdd }) {
    const { title, price, description } = item

    
    return (

        <div style={{ border:` 6px dotted black` }}>
            <p>Product: {title}</p>
            <p>Description: {description}</p>
            <p>Price: {price}</p>
            
           <p> <button onClick={onAdd}> Add to shopping cart</button></p>
        </div>
  )
}

const CartItem: React.FC<{
    item: LineItem;
    onRemove: () => void;
    onAddd: () => void;
    ondeduct: () => void;
}> = function ({
    item: lineitem,
    onRemove,
    onAddd,
    ondeduct
}) {
    const { item, quantity, price } = lineitem

  return (
      <div style={{ backgroundColor:'#fecf7b',border: ` 4px dashed black` }}>
          <p>Product: {item}  </p>
          <p>Price: ${price}</p>
          <p><button onClick={onAddd}>+</button>Quantity: {quantity}<button onClick={ondeduct}>-</button></p>

          <button onClick={onRemove}>Remove item</button>
    </div>
  )
}

export default Demo;
