import React, {useState} from 'react';
import classes from './collapse.module.css'
const Collapse = ({children, toggle__text}) => {
    const [open, setOPen] = useState(false);

    //let toggle__text
    // if (open) {toggle__text = <span> свернуть</span>;} else {toggle__text = <span> посмотреть</span>}

    const toggle = () => {setOPen(!open)};

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
