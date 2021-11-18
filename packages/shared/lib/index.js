"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useTest = exports.halo = void 0;
var react_1 = require("react");
exports.halo = "hai";
var useTest = function () {
    (0, react_1.useEffect)(function () {
        console.log("usetest");
    }, []);
};
exports.useTest = useTest;
