"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style/app.css");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL1RleHRGaWVsZC5qcyJdLCJuYW1lcyI6WyJUZXh0RmllbGQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBQ0EsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBK0I7QUFBQSxNQUE1QkMsS0FBNEIsUUFBNUJBLEtBQTRCO0FBQUEsTUFBckJDLFFBQXFCLFFBQXJCQSxRQUFxQjtBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUM3Q0EsRUFBQUEsSUFBSSxHQUFHQSxJQUFJLEtBQUssVUFBVCxHQUFzQkEsSUFBdEIsR0FBNkIsTUFBcEM7QUFDQSxTQUNJO0FBQU8sSUFBQSxLQUFLLEVBQUVGLEtBQWQ7QUFBcUIsSUFBQSxJQUFJLEVBQUVFLElBQTNCO0FBQWlDLElBQUEsU0FBUyxFQUFFLFdBQTVDO0FBQXlELElBQUEsUUFBUSxFQUFFRDtBQUFuRSxJQURKO0FBR0gsQ0FMRDs7ZUFPZUYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi4vc3R5bGUvYXBwLmNzcydcbmNvbnN0IFRleHRGaWVsZCA9ICh7IHZhbHVlLCBvbkNoYW5nZSwgdHlwZSB9KSA9PiB7XG4gICAgdHlwZSA9IHR5cGUgPT09ICdwYXNzd29yZCcgPyB0eXBlIDogJ3RleHQnXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGlucHV0IHZhbHVlPXt2YWx1ZX0gdHlwZT17dHlwZX0gY2xhc3NOYW1lPXsndGV4dGZpZWxkJ30gb25DaGFuZ2U9e29uQ2hhbmdlfSAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGV4dEZpZWxkIl19