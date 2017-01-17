"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
const React = require("react");
const react_pixi_1 = require("react-pixi");
class StreamedStage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: {
                width: 1, height: 1,
            }
        };
    }
    componentDidMount() {
        this.propsSubscription = this.props.propsStream
            .subscribe(props => this.setState({ props }));
    }
    componentWillUnmount() {
        this.propsSubscription.unsubscribe();
    }
    render() {
        return (React.createElement(react_pixi_1.Stage, __assign({}, this.state.props), this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamedStage;
