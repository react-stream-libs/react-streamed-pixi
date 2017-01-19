"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __assign = undefined && undefined.__assign || Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
    }
    return t;
};
var React = require("react");
var react_pixi_1 = require("react-pixi");

var StreamedStage = function (_React$Component) {
    _inherits(StreamedStage, _React$Component);

    function StreamedStage(props) {
        _classCallCheck(this, StreamedStage);

        var _this = _possibleConstructorReturn(this, (StreamedStage.__proto__ || Object.getPrototypeOf(StreamedStage)).call(this, props));

        _this.state = {
            props: {
                width: 1, height: 1,
                transparent: true
            }
        };
        return _this;
    }

    _createClass(StreamedStage, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this2 = this;

            this.propsSubscription = this.props.propsStream.subscribe(function (props) {
                return _this2.setState({ props: props });
            });
        }
    }, {
        key: "componentWillUnmount",
        value: function componentWillUnmount() {
            this.propsSubscription.unsubscribe();
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(react_pixi_1.Stage, __assign({}, this.state.props), this.props.children);
        }
    }]);

    return StreamedStage;
}(React.Component);

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = StreamedStage;