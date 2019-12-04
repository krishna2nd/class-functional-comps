import React  from "react";
import { LIMIT } from "./limit";


let c = 0;
const FNS = () => {
    if (c === LIMIT) return null;
    return (
        <FNS>
            {c++}
        </FNS>);
};
export default FNS;