import { useState } from 'react'
import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { FocusStyleManager } from "@blueprintjs/core";

FocusStyleManager.onlyShowFocusOnTabs();


const Demo: React.FC = function () {
   
    const [count, setCount] = useState<number>(0);
    const [a, setA] = useState<number>(0);
    
    return (
        <div style={{ backgroundColor: '#abdbe3'}}>
         
        </div>
  )
}



export default Demo;
