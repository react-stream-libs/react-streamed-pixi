"use strict";
const React = require("react");
const react_pixi_1 = require("react-pixi");
class SizeStreamedStage extends React.Component {
    componentDidMount() {
        this.sizeSubscription = this.props.sizeStream
            .subscribe(size => this.setState(size));
    }
    componentWillUnmount() {
        this.sizeSubscription.unsubscribe();
    }
    render() {
        return (React.createElement(react_pixi_1.Stage, { width: this.state.width, height: this.state.height }, this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SizeStreamedStage;
