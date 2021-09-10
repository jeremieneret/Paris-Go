import React, { Fragment, useState, useEffect } from "react";


export default function DisplayColors({ i }) {
    const [color, setColor] = useState();
    
    
    useEffect(() => {
        const colors = [
            'pink', 'orange', 'yellow', 'aquamarine', 'blue', 'violet'
        ]
        const currentColor = colors[i%6];
        setColor(currentColor)
    }, [i])

    return (
        <Fragment>
            <div key={i} className={color}></div>
        </Fragment>
    )
}