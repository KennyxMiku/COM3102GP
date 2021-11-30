import { useState } from 'react'
import React from 'react';
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
    H1, H2, H3,
    Intent,
    Overlay,
    Drawer,
    DrawerSize,
    HTMLSelect,
    OptionProps,
    Colors,
    Icon,
    AnchorButton,
    InputGroup,
    RadioGroup,
    Radio,
    ButtonGroup,
    Position
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';



FocusStyleManager.onlyShowFocusOnTabs();

interface radioState {
    ra: string;
}
const Demo: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    const [visible, setVisible] = useState<String>('none');
    const [data, setData] = useState<string>('');
    const show = () => {
        setVisible('block');
        
    };
    const close = () => {
        setVisible('none');
    };

    function load() {
        const read = localStorage.getItem('data');
        if (read) {
            setData(read);
            console.log('Loading is done');
        } else {
            console.log('No data is found');
        }
    }
    return (
        <>
        <div >
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                        <div className="bp3-navbar-group bp3-align-left">
                            <div className="bp3-navbar-heading"><a href="./Home"><h3 style={{ color:'#FFFFFF' }} className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <button className="bp3-button bp3-large bp3-icon-log-in" >Login</button>
                    </div>
                  
                </span>
            </nav>
            </div>  
            <div>
                <p style={{ fontSize: '30px', padding: '5%' }}>Payment</p>
                <p style={{ fontSize: '20px', paddingLeft: '10%' }}>Price: $ {data}</p><br />
                
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px'}}>Address :</span>
                    <span> <input style={{ width: '50%' }} className="bp3-input bp3-large" type="text" placeholder="Enter address here...." dir="auto" />
                    </span>
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px',paddingRight: '2%' }}>Payment Method :</span>
                  
                    <ButtonGroup large={true}>
                        <Button icon="credit-card" onClick={() => show() }>Credit Card</Button>
                        <Button>Octopus Card</Button>
                        <Button>Payme</Button>
                    </ButtonGroup>
                    
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px'}}>Credit card Number :</span>
                    <input style={{ width: '30%' }} className="bp3-input bp3-large" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" dir="auto" />                  
                    <input style={{ width: '5%' }} className="bp3-input bp3-large" type="text" placeholder="xxx" dir="auto" />

                </div>

            </div>

            </>
  )
}



export default Demo;
