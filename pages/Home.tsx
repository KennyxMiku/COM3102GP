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
import Marquee from "react-easy-marquee";

FocusStyleManager.onlyShowFocusOnTabs();
const Demo: React.FC = function () {
    
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
            <div style={{ backgroundColor: '#E8F9B6' }} className="content"><br /><br /><br />
                <div>
                    <Marquee duration={10000} background="#E8F9B6" height="100px">
                        <H1><img src={'/hsu-logo.png'} width='50' height='50' /> 歡迎光臨 Welcome 欢迎光临 Welcome 歡迎光臨  </H1>


                    </Marquee>
                </div>
                <div>
                    <H1 style={{ textAlign: 'center' }}> Student Union Online Shop</H1>
                    
                    <br/>
                    
                

                    <div style={{ fontSize: 25, paddingLeft: '10%'}}>
                About:
            </div>
                    <div style={{ fontSize: 23, paddingLeft:'10%'}}>
                現屆：香港恒生大學第十一屆學生會幹事會 － 逆恒
            </div>
                    <h2 style={{ fontSize: 23,color: '#21824d', paddingLeft: '10%'}}>HSU Campus Map</h2>
            </div>
                <div className="HsuMap">
                    <img style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto' }} src={'/HsuMap.jpg'} alt='Map' width='800' height='450' />
                </div>
                <br/>
                <div style={{ fontSize: 25, paddingLeft: '10%'}}>Student Co-op Shop is in S H Ho Academic Building(Building A) G/F</div>
        </div>
         </>
  )
}



export default Demo;
