import React, {Component} from "react";
import AuthorizationService from "./AuthorizationService";

export const AuthorizationContext = React.createContext({
    isAuthorized: () => ({}),
    getUserPermissions: () => ({}),
    refreshUserPermissions: () => ({})
});

export const AuthorizationConsumer = AuthorizationContext.Consumer;

export class AuthorizationProvider extends Component {
    AuthorizationService;
    constructor(props) {
        super(props);
        this.AuthorizationService = new AuthorizationService("cache");
    }
    render() {
        return <AuthorizationContext.Provider value={this.AuthorizationService}>{this.props.children}</AuthorizationContext.Provider>;
    }
}