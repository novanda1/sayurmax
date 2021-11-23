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
                Authorization: "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI3NzI1MTQ3MC1lY2E5LTRlYWUtOTAwOS03ZThkOTYzNjFmNTciLCJwaG9uZSI6Iis2Mjg1MTU1MTE0NzQ1In0.hSwmDmWP79DyXUwwEU50f1_7OyReWqcL_T3G7CT4VSY",
            },
        };
    },
});
function UrqlProvider(_a) {
    var children = _a.children;
    return react_1.default.createElement(urql_1.Provider, { value: client }, children);
}
exports.default = UrqlProvider;
