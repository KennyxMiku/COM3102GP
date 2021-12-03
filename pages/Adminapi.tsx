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
    InputGroup,
    Alert,
    HTMLSelect,
    OptionProps,
    Colors,
    Icon,
    AnchorButton,
    Dialog
} from "@blueprintjs/core";
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";
import { Position } from '@blueprintjs/core';
import { ICON } from '@blueprintjs/core/lib/esm/common/classes';
import { User } from './register';

FocusStyleManager.onlyShowFocusOnTabs();
const shopItems = getAllItems();


const Home: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [visible, setVisible] = useState(false);
    const [id, setId] = useState<string>('');
    const [pw, setPw] = useState<string>('');
    const [alert, setAlert] = useState<boolean>(false);
    let uss: User[];
    let data = '0';
    const usss = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (usss) {
        data = usss;
        uss = JSON.parse(usss)
        console.log(JSON.parse(usss))
        console.log('Loading is done');
    } else {
        console.log('No data is found');
    };
    const [user, setUser] = useState<User[]>(uss);
    
    function checkLogin() {        
        if (id === "comadmin" && pw === "com3102") {
            setVisible(true);
        } else { }
    }
    const close = () => {
        setVisible(false);
    };
    const onClose = () => {
        setAlert(false);
    };
    
    
    return (
        <>
                <div style={{ backgroundColor: 'white' }}>
                <br /> <br /><br />
                <H2 style={{ textAlign: 'center' }}> Admin Login: </H2>
                  
                    <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Username/StudentID :</span>
                        <span> <InputGroup style={{ width: '20%' }} className=" bp3-large" type="text"
                            placeholder="Enter username here...." dir="auto" onChange={x => setId(x.target.value)} />
                        </span>
                    </div>
                    <br />
                    <div style={{ paddingLeft: '10%' }}><span style={{ fontSize: '20px' }}>Password :</span>

                        <span>  <InputGroup  style={{ width: '20%' }} type="password" className=" bp3-large" placeholder="Enter your password..."
                            onChange={x => setPw(x.target.value)} />
                        </span>
                    </div>
                    <br />
                    <span style={{ paddingLeft: '10%' }}> <Button type="submit" className=".bp3-large bp3-button" onClick={() => checkLogin()} > Login</Button> </span>

                <Dialog isOpen={visible} onClose={() => close()}>
                    <span style={{ fontSize:'20px' }} className={Classes.DIALOG_HEADER}>User information</span>
                    {data}
                    <div className={Classes.DRAWER_FOOTER} >
                        <Button type="submit" className=".bp3-large bp3-button" onClick={() => close()} > close</Button>

                    </div>
                 </Dialog>
                <Alert style={{ width: '450px' }} isOpen={alert} intent={Intent.DANGER} icon='warning-sign' onClose={() => onClose()} >
                    <p style={{ fontSize: "20px" }}>
                        Username or Password not correct!<br />
                        Please try again.
                    </p>
                </Alert>
            </div>

            </>
  )
}

const Api: React.FC<{
    item: User;
   
}> = function ({ item }) {
    const { programe, year, name, password } = item

    
    return (

        <span style={{ display: 'inline-flex', width: '33%', padding: 20, position:'relative' }}>

            <Callout className="bp3-intent-primary" >
                <span style={{ fontSize:"18px" }}>
                    <p>Name: {name}</p>
                    <p>Programme: {programe}</p>
                    <p>Year:{year}</p>
                    <p>Password: {password}</p>
                    </span>
            </Callout>        
            </span>
        
  )
}



export default Home;
