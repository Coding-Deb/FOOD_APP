import React, { useEffect, useState } from "react";

import Context from "./context";

const StateData = (props) => {
    const [counter, setcounter] = useState(0)

    const Increase = () => {
       setcounter(counter + 1)
    }
    const Decrease = () => {
        if (counter === 0) {
            return 0;
        }
        setcounter(counter - 1)
    }

    return (
        <Context.Provider value={{ counter, setcounter, Increase, Decrease }}>
            {props.children}
        </Context.Provider>
    )

}

export default StateData