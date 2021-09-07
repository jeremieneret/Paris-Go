import React, { Fragment } from "react";


export default function DisplayColors() {
    // const [color, setColor] = useState();
    const colors = [
        { background: 'pink' },
        { background: 'yellow' },
        { background: 'aquamarine' }
    ]
    // useEffect(() => {
    //     for (let i = 0; i < colors.length; i++) {
    //         const element = colors[i];
    //         setColor(element)
    //     }
    // }, [])

    console.log(colors);
    return (

        <Fragment>
            {colors.map((color, i) => {
                return (
                    <div key={i} style={color} className='color'></div>
                )
            })}



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