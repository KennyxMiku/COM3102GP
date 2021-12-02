import React,{ useState } from 'react'
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
const ContactUs: React.FC = function () {
    
    return (

        <>
        <div style={{ backgroundColor: '#abdbe3'}}>
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                <div className="bp3-navbar-group bp3-align-left">
                    <div>
                        <img src={'/hsu-logo.png'} width='40' height='40' />
                    </div>
                </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <div className="bp3-navbar-heading"><a href="./Home"><h3 className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./ContactUs" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <AnchorButton href="./login" className="bp3-button bp3-large bp3-icon-log-in" >Login</AnchorButton>
                    </div>
                  
                </span>
            </nav>
        </div>
        <div className="content"><br/><br/><br/>

        </div>
         </>
  )
}



export default ContactUs;
