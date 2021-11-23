"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var urql_1 = require("urql");
var client = (0, urql_1.createClient)({
    url: "http://localhost:9090/graphql/",
    fetchOptions: function () {
        return {
            headers: {
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0IiwidXNlcm5hbWUiOiJpbWFzaG9wcGVyIiwiZXhwIjoxNjM3OTEyMDU2fQ.sMnk2Jt92I_GXL7zlSwNf9RyBFU6PS1zSMHZE4tetAg",
            },
        };
    },
});
function UrqlProvider(_a) {
    var children = _a.children;
    return react_1.default.createElement(urql_1.Provider, { value: client }, children);
}
exports.default = UrqlProvider;
