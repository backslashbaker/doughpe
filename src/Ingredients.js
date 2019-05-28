import React from 'react';


function Ingredients(props) {

    return (
        <div>
            <h3>{props.name}</h3>
            <div className="section">
                <div className="subsection" >
                    <p className="subheading">
                        Flour type
                    </p>
                    <input type="text" value={props.type} />

                </div>

                <div className="subsection" >
                    <p className="subheading">
                        Quantity (g)
                    </p>
                    <input type="text" value={props.quantity} />
                </div>
                <div className="subsection" >
                    <p className="subheading">
                        Percentage (%)
                    </p>
                    <input type="text" value={props.percentage} />
                </div>
                <button onClick>+</button>
            </div>
        </div>
    )
}


export function Total(props) {
    return (
        <p className="subheading">Total: {props.total} (g)</p>
    )
}


export default Ingredients;