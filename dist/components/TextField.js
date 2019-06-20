"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("src/style/app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TextField = function TextField(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      type = _ref.type;
  type = type === 'password' ? type : 'text';
  return _react["default"].createElement("input", {
    value: value,
    type: type,
    className: 'textfield',
    onChange: onChange
  });
};

var _default = TextField;
exports["default"] = _default;