import { inject, observer } from "mobx-react";
import React, { Component } from "react";
import AuthStore from "../../stores/authStore";

@inject("authStore")
@observer
export default class Login extends Component<{ authStore?: AuthStore }> {
    render() {
        return <div></div>;
    }
}
