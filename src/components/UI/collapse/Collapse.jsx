import React, {useState} from 'react';
import classes from './collapse.module.css'

const Collapse = ({children}) => {
    
    const [open, setOPen] = useState(true);
    const toggle = () => {setOPen(!open)};

    let toggle__text
    if (open) {toggle__text = <span> свернуть</span>;} else {toggle__text = <span> посмотреть</span>}

    return (
        <div>
            <p onClick={toggle} className={classes.toggle}> {toggle__text}</p>
            <div>
                {open && (
                    <div>
                        {children}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Collapse;
