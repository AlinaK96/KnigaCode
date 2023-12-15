import React, {useState} from 'react';
import Button from '../button/Button';

const Collapse = ({children, toggle__text}) => {
    const [open, setOPen] = useState(true);

    //let toggle__text
    // if (open) {toggle__text = <span> свернуть</span>;} else {toggle__text = <span> посмотреть</span>}

    const toggle = () => {setOPen(!open)};

    return (
        <div>
            <Button onClick={toggle} >
                {toggle__text}
            </Button>
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
