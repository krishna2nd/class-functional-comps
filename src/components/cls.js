import React  from "react";
import { LIMIT } from "./limit";

let c = 0;
export default class CLS extends React.Component {
    constructor() {
        super();
        this.state = {
            text: c++
        }
    }
    render() {
        if (c === LIMIT) return null;
        return (
        <CLS>
            {this.state.text}
        </CLS>);
    }
}