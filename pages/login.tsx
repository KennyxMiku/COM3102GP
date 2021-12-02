import React, { useState } from 'react'
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

interface User {
    programe: string;
    year: string;
    name: string;
    password: string;
}

const Login: React.FC = function () {


    
    return (
        <>
        <div>
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading"><a href="./Home"><h3 className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <AnchorButton href="./login" className="bp3-button bp3-large bp3-icon-log-in" >Login</AnchorButton>
                    </div>

                </span>
            </nav>
            </div>
            <div>
                <p style={{ fontSize: '30px', padding: '5%' }}>Login</p>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Username/StudentID :</span>
                    <span> <input style={{ width: '20%' }} className="bp3-input bp3-large" type="text" placeholder="Enter username here...." dir="auto" />
                    </span>
                </div>
                <br/>
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>
                    
                    <span>  <input type="password" className="bp3-input bp3-large"  placeholder="Enter your password..." />
                    </span>
                </div>
                <span style={{ paddingLeft: '10%' }}> <AnchorButton type="submit" className=".bp3-large bp3-button" href="./Home" > Login</AnchorButton> </span>
                <div>
                    <span style={{ paddingLeft: '10%', fontSize: '20px' }}>If you are guest, Click
                        <span> <AnchorButton type="submit" icon='arrow-right' className=".bp3-large bp3-button" href="./register" > Here</AnchorButton> </span>
                        to register!</span>
                </div>
            </div>


            </>
  )
}



export default Login;
