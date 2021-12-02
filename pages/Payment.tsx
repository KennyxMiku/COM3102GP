import { useState } from 'react'
import React from 'react';
import {
    Alignment,
    Button,
   
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
import { Popover2, Classes } from "@blueprintjs/popover2";
import { FocusStyleManager } from "@blueprintjs/core";
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';



FocusStyleManager.onlyShowFocusOnTabs();

const Demo: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    const [add, setAdd] = useState<string>('');
    const [visible, setVisible] = useState(false);
   
    const show = () => {
        setVisible(false);
        
    };
    const close = () => {
        setVisible(true);
    };
    let data = '0';
    const read = typeof window !== 'undefined' ? localStorage.getItem('data') : null;
        if (read) {
            data=read;
            console.log('Loading is done');
        } else {
            console.log('No data is found');
        }
    
    return (
        <>
        <div >
            <nav className="bp3-navbar bp3-fixed-top" style={{ background: Colors.GREEN5 }}>
                <span style={{ margin: '0 auto', width: '480px' }}>
                <div className="bp3-navbar-group bp3-align-left">
                    <div>
                        <img src={'/hsu-logo.png'} width='40' height='40' />
                    </div>
                </div>
                        <div className="bp3-navbar-group bp3-align-left">
                            <div className="bp3-navbar-heading"><a href="./Home"><h3 style={{ color:'#FFFFFF' }} className="bp3-heading">HSU Shop</h3></a></div>
                        <span className="bp3-navbar-divider"></span>
                    </div>
                    <div className="bp3-navbar-group bp3-align-left">
                        <AnchorButton href="./Home" className="bp3-button bp3-large bp3-icon-home">Home</AnchorButton>
                        <AnchorButton href="./Shop" className="bp3-button bp3-large bp3-icon-shop">Shop</AnchorButton>
                        <AnchorButton href="./ContactUs" className="bp3-button bp3-large bp3-icon-phone">Contact us</AnchorButton>
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
                    <span> <input onChange={x => setAdd(x.target.value)} style={{ width: '50%' }} className="bp3-input bp3-large" type="text" placeholder="Enter address here...." dir="auto" />
                    </span>
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px',paddingRight: '2%' }}>Payment Method :</span>
                  
                    <ButtonGroup large={true}>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER2_DISMISS} >
                                    <div style={{ padding:'10%',fontSize: '20px' }}>You have selected credit card to pay!</div>

                                    <span style={{  paddingLeft: '40%' }}><Button icon='cross' intent='danger'>
                                        Close
                                    </Button>
                                    </span>
                                    <br/>
                                </div>
                            }
                            position='top'
                        >
                            <Button icon="credit-card" onClick={() => show()}>Credit Card</Button>
                        </Popover2>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER2_DISMISS} style={{ width: "300px" }} >
                                    <div style={{ padding: '10%', fontSize: '20px' }}>You have selected Octopus Card to pay!</div>

                                    <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger'>
                                        Close
                                    </Button>
                                    </span>
                                    <br />
                                </div>
                            }
                            position='top'
                        >
                            <Button onClick={() => close()} value="octopus">Octopus Card</Button>
                        </Popover2>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER2_DISMISS} >
                                    <div style={{ padding: '10%', fontSize: '20px' }}>You have selected Payme to pay!</div>

                                    <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger'>
                                        Close
                                    </Button>
                                    </span>
                                    <br />
                                </div>
                            }
                            position='top'
                        >
                            <Button onClick={() => close()} value="octopus">Payme</Button>
                        </Popover2>

                    </ButtonGroup>
                    
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px' }}>Credit card Number :</span>
                    <input disabled={visible} style={{ width: '30%' }} className="bp3-input bp3-large" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" dir="auto" />
                    <input disabled={visible} style={{ width: '5%' }} className="bp3-input bp3-large" type="text" placeholder="xxx" dir="auto" />
                    <br /><br />
                    <Popover2
                        
                        content={
                            <div className={Classes.POPOVER2_DISMISS} style={{ width:"450px" }}>
                                <div style={{ padding: '5%', fontSize: '20px' }}>
                                    Thank you for your purchase!<br /><br />
                                    Your order will deliver to : {add}
                                </div>

                                <span style={{ paddingLeft: '40%' }}>
                                    <AnchorButton type="submit" className=".bp3-large bp3-button bp3-icon-tick" intent='success' href="./Home" >OK!</AnchorButton>
                                </span>
                                <br />
                                <br />
                            </div>
                        }
                        position='top-right'
                    >
                        <Button className=".bp3-large bp3-button bp3-icon-dollar">Confirm</Button>
                    </Popover2>
                    <AnchorButton type="reset" className=".bp3-large bp3-button" href="./Home" > Cancel</AnchorButton>
                </div>

            </div>

            </>
  )
}



export default Demo;
