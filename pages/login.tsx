import React, { useState } from 'react';
import LoginForm from './comp/LoginForm';
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
    AnchorButton
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';


FocusStyleManager.onlyShowFocusOnTabs();
const Demo: React.FC = function () {
        const adminUser ={
            email:"admin@admin.com",
            password:"admin"
        }
        const [user, setUser] = useState({name:"", email:""});
        const [error, setError] = useState();
        
        const Login = details => {
            console.log(details);
            if(details.email == adminUser.email && details.password == adminUser.password){
                console.log("logged in");
                setUser({
                    name: details.name,
                    email: details.email
                });
            }else{
                    console.log("detail do not match!")
                }
            }
          

        const Logout = () => {
            console.log("Logout"); 
        }

    return (
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
            ggttgt<div className="login">
           {(user.email !="") ? (
               <div className="Welcome">
                   <h2>Welcome, </h2><h2><span>{user.name}</span></h2>
                    <button>Logout</button>
               </div>
           ) : (
               <LoginForm Login={Login} error={error}/>
           )}
            </div>
        </div>
  )
}

export default Demo;
