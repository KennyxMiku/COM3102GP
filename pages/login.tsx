import { useState } from 'react'
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();


interface LineItem {
    id: string;
    item: string,
    quantity: number,
    price:number
}

const Demo: React.FC = function () {
    const [cart, setCart] = useState<LineItem[]>([]);
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    
    return (
        <div>
           
        </div>
  )
}



export default Demo;
