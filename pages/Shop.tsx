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
    Card,
    H1,H2,H3,
    Intent,
    Overlay,
    Drawer,
    DrawerSize,
    HTMLSelect,
    OptionProps,
    Colors,
    Icon
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';


FocusStyleManager.onlyShowFocusOnTabs();
const shopItems = getAllItems();
 

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
        Total();
    };
    const closeDrawer = () => {
        setVisible(false);
    };
     function getAllItems():  LineItem[] {
        return cart;
    }
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
        Total();
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
            Total();
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
        <>
        
            <div style={{ margin: 0, width: '100%' }}>
                <nav className="bp3-navbar " style={{ background: Colors.GREEN5, width: '100%' }}>
                    <div style={{ margin: 0, width: '480px' }}>
                        <div className="bp3-navbar-group bp3-align-left">
                            <div className="bp3-navbar-heading"><a href="./Home"><h3 className="bp3-heading">HSU Shop</h3></a></div>
                            <span className="bp3-navbar-divider"></span>
                        </div>
                        <div className="bp3-navbar-group bp3-align-left">
                            <a href="./Home"><button className="bp3-button bp3-large bp3-icon-home">Home</button></a>
                            <a href="./Shop"> <button className="bp3-button bp3-large bp3-icon-shop">Shop</button></a>
                            <span className="bp3-navbar-divider"></span>
                        </div>
                        <div className="bp3-navbar-group bp3-align-right">
                            <button className="bp3-button bp3-large bp3-icon-shopping-cart" onClick={() => showDrawer()}>Cart</button>
                        
                        </div>
                        <Drawer isOpen={visible} title="Shoping cart" size="560px" onClose={() => closeDrawer()} >
                            <span className={Classes.DRAWER_BODY}>

                            {cart.map((item, index) => <CartItem key={item.item} item={item} onRemove={() => removeItem(index)} onAddd={() => addnum(index)} ondeduct={() => deductnum(index)} />)}
                                </span>
                            <div className={Classes.DRAWER_FOOTER}>
                                <button type="submit" className=".bp3-large bp3-button bp3-icon-dollar" > Pay</button>  &nbsp;
                                <span style={{ fontSize: '20px' }}>Total: ${count}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button className=".bp3-large bp3-button bp3-icon-reset" onClick={() => removeall(cart.length)}> Reset</button>

                            </div>
                        </Drawer>
                       </div>
                    </nav>

            </div>
                <div style={{ backgroundColor: 'white' }}>
                     
                <H2> Product: </H2>
                {shopItems.map(item => <ShopItem key={item.id} item={item} onAdd={() => addItemToCart(item)} />)}
                
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
            display: 'block', width: 350, padding: 20
            }}>

            <Callout className="bp3-intent-primary" title={title}>
                <span style={{ fontSize:"18px" }}>
                <p>Product: {title}</p>
                    <p>Description: {description}</p>
                    <p>Price: <Icon icon="dollar" />{price}</p>
                    <p> <Button icon="insert" onClick={onAdd}> Add to shopping cart</Button></p>
                    </span>
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
      <span>
          <Callout title={item}>
          <p>Product: {item}  </p>
          <p>Price: ${price}</p>
          <p><Button icon="add" onClick={onAddd} /><span>Quantity: {quantity}</span><Button icon="remove" onClick={ondeduct}/></p>

              <Button icon="trash" onClick={onRemove}>Remove item</Button>
         </Callout>
    </span>
  )
}

export default Home;
