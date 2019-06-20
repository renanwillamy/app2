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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0J1dHRvbi5qcyJdLCJuYW1lcyI6WyJCdXR0b24iLCJoYW5kbGVDbGljayIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxJQUFNQSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUEwQjtBQUFBLE1BQXhCQyxXQUF3QixRQUF4QkEsV0FBd0I7QUFBQSxNQUFYQyxLQUFXLFFBQVhBLEtBQVc7QUFDckNBLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxHQUFHQSxLQUFILEdBQVUsUUFBdkI7QUFDQSxTQUNJO0FBQVEsSUFBQSxTQUFTLEVBQUUsUUFBbkI7QUFBNkIsSUFBQSxPQUFPLEVBQUVEO0FBQXRDLEtBQW9EQyxLQUFwRCxDQURKO0FBR0gsQ0FMRDs7ZUFPZUYsTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCAnLi4vc3R5bGUvYXBwLmNzcydcblxuY29uc3QgQnV0dG9uID0gKHtoYW5kbGVDbGljaywgdGl0bGV9KSA9PiB7XG4gICAgdGl0bGUgPSB0aXRsZSA/IHRpdGxlOiAnQnV0dG9uJ1xuICAgIHJldHVybiAoXG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPXsnYnV0dG9uJ30gb25DbGljaz17aGFuZGxlQ2xpY2t9Pnt0aXRsZX08L2J1dHRvbj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEJ1dHRvbiJdfQ==