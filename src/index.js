import React from 'react';
import ReactDOM from 'react-dom';
import CLS from "./components/cls";
import FNS from "./components/fns";
import FNSS from "./components/fnsState";

const eleCLS = document.getElementById('rootCLS');
const eleFNS = document.getElementById('rootFNS');
const eleFNSS = document.getElementById('rootFNSS')
const startCLS = Date.now();
ReactDOM.render(<CLS />, eleCLS, function () {
    console.log("CLS-", (Date.now() - startCLS)/1000)
 });

 const startFNS = Date.now();
 ReactDOM.render(<FNS />, eleFNS , function () {
    console.log("FNS-", (Date.now() - startFNS)/1000)
 });

 const startFNSS = Date.now();
 ReactDOM.render(<FNSS />, eleFNSS, function () {
    console.log("FNSS-",(Date.now() - startFNSS)/1000)
 });
