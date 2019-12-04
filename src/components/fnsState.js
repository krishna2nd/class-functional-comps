import React, {useState}  from "react";
import { LIMIT } from "./limit";

let c = 0;
const FNSS = () => {
    const [count, setCount] = useState(c++);
    if (count === LIMIT) return null;
    return (
        <FNSS>
            {count}
        </FNSS>);
};
export default FNSS;