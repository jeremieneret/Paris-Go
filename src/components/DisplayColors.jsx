import React, { Fragment, useState, useEffect } from "react";


export default function DisplayColors({ i }) {
    const [color, setColor] = useState();
    const colors = [
        'pink', 'orange', 'yellow', 'aquamarine', 'blue', 'violet'
    ]


    useEffect(() => {
        const currentColor = colors[i%6];
        setColor(currentColor)
    }, [])

    return (
        <Fragment>
            <div key={i} className={color}></div>
        </Fragment>
    )
}