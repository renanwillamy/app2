"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style/app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Button = function Button(_ref) {
  var handleClick = _ref.handleClick,
      title = _ref.title;
  title = title ? title : 'Button';
  return _react["default"].createElement("button", {
    className: 'button',
    onClick: handleClick
  }, title);
};

var _default = Button;
exports["default"] = _default;