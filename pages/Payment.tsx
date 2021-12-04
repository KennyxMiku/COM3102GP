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
    Alert,
    Dialog,
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
    Position,
    Classes
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";
import { Popover2 } from "@blueprintjs/popover2";
import { FocusStyleManager } from "@blueprintjs/core";
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';



FocusStyleManager.onlyShowFocusOnTabs();

const Demo: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    const [add, setAdd] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [cre, setCre] = useState<string>('');
    const [cred, setCred] = useState<string>('');
    const [pay, setPay] = useState<string>('credit');
    const [visible, setVisible] = useState(false);
    const [alert, setAlert] = useState<boolean>(false);
    const [alert1, setAlert1] = useState<boolean>(false);
    const [alert2, setAlert2] = useState<boolean>(false);
    const [alert3, setAlert3] = useState<boolean>(false);

    const rea = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
    let us = '';
    if (rea) {
        us = rea;
        console.log('Loading is done');
    } else {
        console.log('No data is found');
    }

    const onOpen = () => {
        if (us === '') {
            setAlert3(true);

        } else {
            if (add === '' || email === '') {
                setAlert1(true);
            } else {
                if (pay === 'credit') {
                    if (cre === '' || cred === '') {
                        setAlert2(true);
                    } else { setAlert(true) }


                } else {
                    setAlert(true);
                }

            }

        }
        

    };
    const onOpen1 = () => {
        setAlert1(true);
    };
    const onOpen2 = () => {
        setAlert2(true);
    };
    const onClose = () => {
        setAlert(false);
    };
    const onClose1 = () => {
        setAlert1(false);
    };
    const onClose2 = () => {
        setAlert2(false);
    };
    const onClose3 = () => {
        setAlert3(false);
    };
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
    function onPayme() {        
        setPay('payme');
    }
    function onOctopus() {
        setPay('octopus');
    }
    function onCredit() {
        setPay('credit');

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
                            <div className="bp3-navbar-heading"><a href="./Home"><h3  className="bp3-heading">HSU Shop</h3></a></div>
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

                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}><Icon icon="envelope" size={30} />&nbsp;Email-address :</span>
                    <span> <InputGroup onChange={x => setEmail(x.target.value)} style={{ width: '30%' }} className=" bp3-large" type="text" placeholder="Enter email address here...." dir="auto" />
                    </span>
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}><Icon icon="home" size={30} />&nbsp;Address :</span>
                    <span> <InputGroup onChange={x => setAdd(x.target.value)} style={{ width: '50%' }} className=" bp3-large" type="text" placeholder="Enter address here...." dir="auto" />
                    </span>
                </div><br/>
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px',paddingRight: '2%' }}>Payment Method :</span>
                  
                    <ButtonGroup large={true}>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER_DISMISS} style={{ width: "400px" }}>
                                    <div style={{ padding:'10%',fontSize: '20px' }}>You have selected credit card to pay!</div>

                                    <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger' onClick={() => show()}>
                                        Close
                                    </Button>
                                    </span>
                                    <br/>
                                </div>
                            }
                            position='top'
                        >
                            <Button icon="credit-card" onClick={() => onCredit()} value="credit">Credit Card</Button>
                        </Popover2>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER_DISMISS} style={{ width: "400px" }} >
                                    <div style={{ padding: '10%', fontSize: '20px' }}>You have selected Octopus Card to pay!</div>

                                    <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger' onClick={() => close()}>
                                        Close
                                    </Button>
                                    </span>
                                    <br />
                                </div>
                            }
                            position='top'
                        >
                            <Button onClick={() => setPay('octopus')} value="octopus">Octopus Card</Button>
                        </Popover2>
                        <Popover2
                            content={
                                <div className={Classes.POPOVER_DISMISS} style={{ width: "400px" }}>
                                    <div style={{ padding: '10%', fontSize: '20px' }}>You have selected Payme to pay!</div>

                                    <span style={{ paddingLeft: '40%' }}><Button icon='cross' intent='danger' onClick={() => close()}>
                                        Close
                                    </Button>
                                    </span>
                                    <br />
                                </div>
                            }
                            position='top'
                        >
                            <Button onClick={() => onOctopus()} value="payme">Payme</Button>
                        </Popover2>

                    </ButtonGroup>
                    
                </div>
                <br />
                <div style={{ paddingLeft: '10%' }}>
                    <span style={{ fontSize: '20px' }}>Credit card Number :&nbsp;
                        <input disabled={visible} style={{ width: '20%' }} onChange={x => setCre(x.target.value)} className="bp3-input bp3-large" type="text" placeholder="xxxx-xxxx-xxxx-xxxx" dir="auto" />&nbsp;
                        (&nbsp;<input maxLength={3} disabled={visible} style={{ width: '3%' }} onChange={x => setCred(x.target.value)} className="bp3-large bp3-input" type="text" placeholder="xxx" dir="auto" />&nbsp;)
                    </span>
                    <br /><br />
                    <Button className="bp3-large bp3-button bp3-icon-dollar" onClick={() => onOpen()}>Confirm</Button>
                    <Dialog isOpen={alert} onClose={() => onClose()} style={{ width: '700px', height: '500px' }} canOutsideClickClose={false} canEscapeKeyClose={false}>
                        <span style={{ fontSize: '20px' }} className={Classes.DIALOG_HEADER}>User information</span>
                        <span className={Classes.DIALOG_BODY}>
                            <p style={{ paddingTop: '2%', fontSize: '35px', textAlign: 'center' }}>Thank you for your purchase!</p>
                            <br /><br />
                            <p style={{ paddingTop: '2%', fontSize: '25px', textAlign: 'center' }}> You will receive order record from this email address:
                                <br /><br /><br />
                                {email}
                            </p>
                        
                            <p style={{ paddingTop: '2%', fontSize: '25px', textAlign: 'center' }}>Your order will deliver to :
                                <br /><br /><br />
                                {add}
                            </p>
                           <br />
                           </span>
                        <div className={Classes.DRAWER_FOOTER} style={{ marginLeft: 'auto', marginRight:'auto' }}>
                            <AnchorButton type="reset" intent={Intent.SUCCESS} className="bp3-large bp3-button" href="./Home" > OK!</AnchorButton>
                        </div>
                    </Dialog>

                    <Alert style={{ width: 'auto', height: 'auto' }} isOpen={alert1} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose1()} >
                        <p style={{ padding: '5%', fontSize: '20px' }}>
                            Email address or Address is Empty!!
                        </p>
                    </Alert>
                    <Alert style={{ width: 'auto', height: 'auto' }} isOpen={alert2} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose2()} >
                        <p style={{ padding: '5%', fontSize: '20px' }}>
                            Credit card number or safety number is empty!
                        </p>
                    </Alert>
                    <Alert style={{ width: 'auto', height: 'auto' }} isOpen={alert3} confirmButtonText="OK!" intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose3()} >
                        <p style={{ fontSize: '20px' }}>
                            Please login first!
                        </p>
                    </Alert>
                    <AnchorButton type="reset" className=".bp3-large bp3-button" href="./Home" > Cancel</AnchorButton>
                </div>

            </div>

            </>
  )
}



export default Demo;
