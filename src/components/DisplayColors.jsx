import React, { Fragment, useState, useEffect } from "react";


export default function DisplayColors({ i }) {
    const [color, setColor] = useState();
    const colors = [
        'pink', 'yellow', 'aquamarine', 'blue', 'violet'
    ]


    useEffect(() => {
        const newColor = colors[i%5];
        setColor(newColor)
        console.log(i);
    }, [])

    // console.log(color);
    return (

        <Fragment>
            {/* {colors.map((color, i) => {
                return ( */}
            <div key={i} className={color}></div>
            {/* )
            })} */}



        </Fragment>



        // <Fragment>
        //     <ul>
        //         {colors.map((color, i) => {
        //             return (
        //                 <li key={i}>
        //                     <div
        //                         className='colored'
        //                         style={color}
        //                     ><p>hey ho</p></div>
        //                 </li>
        //             )
        //         })}
        //     </ul>
        // </Fragment>



    )
}