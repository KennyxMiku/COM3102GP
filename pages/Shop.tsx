import { useState } from 'react'
import React from 'react';
import { getAllItems, Item } from './shopitem';
import {
    Alignment,
    Button,
    Classes,
    Navbar,
    NavbarDivider,
    NavbarGroup,
    NavbarHeading,
    Switch,
    Callout,
    Code,
    H1,H2,H3,
    Intent,
    Overlay,
    Drawer,
    DrawerSize,
    HTMLSelect,
    OptionProps,
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { isOpen } from '@blueprintjs/core/lib/esm/components/context-menu/contextMenu';

FocusStyleManager.onlyShowFocusOnTabs();
const shopItems = getAllItems();
 
export interface IDrawerExampleState {
    autoFocus: boolean;
    canEscapeKeyClose: boolean;
    canOutsideClickClose: boolean;
    enforceFocus: boolean;
    hasBackdrop: boolean;
    isOpen: boolean;
    position?: Position;
    size: string;
    usePortal: boolean;
}
let IDrawerState = {
    autoFocus: true,
    canEscapeKeyClose: true,
    canOutsideClickClose: true,
    enforceFocus: true,
    hasBackdrop: true,
    isOpen: false,
    position: Position.RIGHT,
    size: undefined,
    usePortal: true,
};
interface LineItem {
    id: string;
    item: string,
    quantity: number,
    price:number
}


const Home: React.FC = function () {
    const [cart, setCart] = useState<LineItem[]>([]);
    const [count, setCount] = useState<number>(0);
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    
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
    
    function handleClose() {
        IDrawerState = {
            autoFocus: true,
            canEscapeKeyClose: true,
            canOutsideClickClose: true,
            enforceFocus: true,
            hasBackdrop: true,
            isOpen: false,
            position: Position.RIGHT,
            size: undefined,
            usePortal: true,
        }


    };
    return (
        <>
        
        <div>
                <nav className="bp3-navbar bp3-dark">
                    <div style={{ margin: 0 , width:'480px'  }}>
                        <Navbar>
                            <Navbar.Group align={Alignment.LEFT}>
                                <Navbar.Heading><a href="./Home">HSU Shop</a></Navbar.Heading>
                                <Navbar.Divider />
                               <a href="./Home"> <Button className="bp3-minimal" icon="home" text="Home" /></a>
                                <a href="./Shop"> <Button className="bp3-minimal" icon="shop" text="Shop" /></a>
                                <Navbar.Divider />
                            </Navbar.Group>
                            <Navbar.Group align={Alignment.RIGHT}>                               
                                <Button className="bp3-minimal" icon="shopping-cart" text="Cart" />
                                
                            </Navbar.Group>

                        </Navbar>
                        <Drawer title="Basic Drawer" isOpen onClose={isOpen=false}>
                            <H1>Cart</H1>
                        </Drawer>

                    </div>
                </nav>
           
            </div>
            <div style={{ backgroundColor: 'white' }}>
                <H2> Product: </H2>
                {shopItems.map(item => <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />)}
                <p style={{ backgroundColor: 'white' }}> <h2>Cart items:</h2> </p>
                {cart.map((item, index) => <CartItem key={item.item} item={item} onRemove={() => removeItem(index)} onAddd={() => addnum(index)} ondeduct={() => deductnum(index)} />)}

                <p><button onClick={() => removeall(cart.length)}> Reset</button>  <button onClick={() => Total()}> Cacluate Total</button></p>
                <p style={{ fontSize: '30px' }}>Total: ${count}</p>
            </div>

            </>
  )
}

const ShopItem: React.FC<{
    item: Item;
    onAdd: () => void;
}> = function ({ item, onAdd }) {
    const { title, price, description } = item

    
    return (
        
            <span style={{
                display: 'block', width: 700, padding: 30
            }}>

            <Callout title={title}>
                <p>Product: {title}</p>
                <p>Description: {description}</p>
                <p>Price: {price}</p>
                <p> <Button onClick={onAdd}> Add to shopping cart</Button></p>
            </Callout>        
            </span>
        
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

export default Home;
