"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("./components/Button"));

var _TextField = _interopRequireDefault(require("./components/TextField"));

require("./style/app.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));
    _this.state = {
      hide: false,
      login: '',
      password: '',
      logged: false
    };
    _this.toggleText = _this.toggleText.bind(_assertThisInitialized(_this));
    _this.onChangeLogin = _this.onChangeLogin.bind(_assertThisInitialized(_this));
    _this.onChangePassword = _this.onChangePassword.bind(_assertThisInitialized(_this));
    _this.makeLogin = _this.makeLogin.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(App, [{
    key: "onChangeLogin",
    value: function onChangeLogin(e) {
      this.setState({
        login: e.target.value
      });
    }
  }, {
    key: "onChangePassword",
    value: function onChangePassword(e) {
      this.setState({
        password: e.target.value
      });
    }
  }, {
    key: "toggleText",
    value: function toggleText() {
      this.setState({
        hide: !this.state.hide
      });
    }
  }, {
    key: "makeLogin",
    value: function makeLogin() {
      if (this.state.password === 'root') {
        this.setState({
          logged: true
        });
        alert('Logged!');
      } else {
        alert('Wrong password or login');
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          login = _this$state.login,
          password = _this$state.password,
          logged = _this$state.logged;
      return _react["default"].createElement("div", {
        className: 'content'
      }, _react["default"].createElement("div", {
        className: 'login-block',
        hidden: logged
      }, _react["default"].createElement("h2", null, "Login"), _react["default"].createElement(_TextField["default"], {
        value: login,
        onChange: this.onChangeLogin,
        type: 'text'
      }), _react["default"].createElement("br", null), _react["default"].createElement(_TextField["default"], {
        value: password,
        onChange: this.onChangePassword,
        type: 'password'
      }), _react["default"].createElement("br", null), _react["default"].createElement(_Button["default"], {
        title: 'Enter',
        handleClick: this.makeLogin
      })), _react["default"].createElement("div", {
        className: 'content',
        hidden: !logged
      }, _react["default"].createElement("h1", null, "Welcome ", login, "!")));
    }
  }]);

  return App;
}(_react.Component);

var _default = App;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanMiXSwibmFtZXMiOlsiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImhpZGUiLCJsb2dpbiIsInBhc3N3b3JkIiwibG9nZ2VkIiwidG9nZ2xlVGV4dCIsImJpbmQiLCJvbkNoYW5nZUxvZ2luIiwib25DaGFuZ2VQYXNzd29yZCIsIm1ha2VMb2dpbiIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwiYWxlcnQiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLEc7Ozs7O0FBRUYsZUFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBOztBQUNmLDZFQUFNQSxLQUFOO0FBQ0EsVUFBS0MsS0FBTCxHQUFhO0FBQ1RDLE1BQUFBLElBQUksRUFBRSxLQURHO0FBRVRDLE1BQUFBLEtBQUssRUFBRSxFQUZFO0FBR1RDLE1BQUFBLFFBQVEsRUFBRSxFQUhEO0FBSVRDLE1BQUFBLE1BQU0sRUFBRTtBQUpDLEtBQWI7QUFNQSxVQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JDLElBQWhCLCtCQUFsQjtBQUNBLFVBQUtDLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkQsSUFBbkIsK0JBQXJCO0FBQ0EsVUFBS0UsZ0JBQUwsR0FBd0IsTUFBS0EsZ0JBQUwsQ0FBc0JGLElBQXRCLCtCQUF4QjtBQUNBLFVBQUtHLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlSCxJQUFmLCtCQUFqQjtBQVhlO0FBWWxCOzs7O2tDQUVhSSxDLEVBQUc7QUFDYixXQUFLQyxRQUFMLENBQWM7QUFDVlQsUUFBQUEsS0FBSyxFQUFFUSxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFETixPQUFkO0FBR0g7OztxQ0FFZ0JILEMsRUFBRztBQUNoQixXQUFLQyxRQUFMLENBQWM7QUFDVlIsUUFBQUEsUUFBUSxFQUFFTyxDQUFDLENBQUNFLE1BQUYsQ0FBU0M7QUFEVCxPQUFkO0FBR0g7OztpQ0FFWTtBQUNULFdBQUtGLFFBQUwsQ0FBYztBQUNWVixRQUFBQSxJQUFJLEVBQUUsQ0FBQyxLQUFLRCxLQUFMLENBQVdDO0FBRFIsT0FBZDtBQUdIOzs7Z0NBRVc7QUFDUixVQUFJLEtBQUtELEtBQUwsQ0FBV0csUUFBWCxLQUF3QixNQUE1QixFQUFvQztBQUNoQyxhQUFLUSxRQUFMLENBQWM7QUFDVlAsVUFBQUEsTUFBTSxFQUFFO0FBREUsU0FBZDtBQUdBVSxRQUFBQSxLQUFLLENBQUMsU0FBRCxDQUFMO0FBQ0gsT0FMRCxNQUtLO0FBQ0RBLFFBQUFBLEtBQUssQ0FBQyx5QkFBRCxDQUFMO0FBQ0g7QUFDSjs7OzZCQUVRO0FBQUEsd0JBQzZCLEtBQUtkLEtBRGxDO0FBQUEsVUFDRUUsS0FERixlQUNFQSxLQURGO0FBQUEsVUFDU0MsUUFEVCxlQUNTQSxRQURUO0FBQUEsVUFDbUJDLE1BRG5CLGVBQ21CQSxNQURuQjtBQUVMLGFBQ0k7QUFBSyxRQUFBLFNBQVMsRUFBRTtBQUFoQixTQUNJO0FBQUssUUFBQSxTQUFTLEVBQUUsYUFBaEI7QUFBK0IsUUFBQSxNQUFNLEVBQUVBO0FBQXZDLFNBQ0ksb0RBREosRUFFSSxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsS0FBSyxFQUFFRixLQUFsQjtBQUF5QixRQUFBLFFBQVEsRUFBRSxLQUFLSyxhQUF4QztBQUF1RCxRQUFBLElBQUksRUFBRTtBQUE3RCxRQUZKLEVBR0ksMkNBSEosRUFJSSxnQ0FBQyxxQkFBRDtBQUFXLFFBQUEsS0FBSyxFQUFFSixRQUFsQjtBQUE0QixRQUFBLFFBQVEsRUFBRSxLQUFLSyxnQkFBM0M7QUFBNkQsUUFBQSxJQUFJLEVBQUU7QUFBbkUsUUFKSixFQUtJLDJDQUxKLEVBTUksZ0NBQUMsa0JBQUQ7QUFBUSxRQUFBLEtBQUssRUFBRSxPQUFmO0FBQXdCLFFBQUEsV0FBVyxFQUFFLEtBQUtDO0FBQTFDLFFBTkosQ0FESixFQVNJO0FBQUssUUFBQSxTQUFTLEVBQUUsU0FBaEI7QUFBMkIsUUFBQSxNQUFNLEVBQUUsQ0FBQ0w7QUFBcEMsU0FDSSx3REFBYUYsS0FBYixNQURKLENBVEosQ0FESjtBQWVIOzs7O0VBOURhYSxnQjs7ZUFpRUhqQixHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnV0dG9uJztcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnLi9jb21wb25lbnRzL1RleHRGaWVsZCc7XG5pbXBvcnQgJy4vc3R5bGUvYXBwLmNzcydcblxuY2xhc3MgQXBwIGV4dGVuZHMgQ29tcG9uZW50IHtcblxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgICAgICAgIGhpZGU6IGZhbHNlLFxuICAgICAgICAgICAgbG9naW46ICcnLFxuICAgICAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgICAgICAgbG9nZ2VkOiBmYWxzZVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudG9nZ2xlVGV4dCA9IHRoaXMudG9nZ2xlVGV4dC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25DaGFuZ2VMb2dpbiA9IHRoaXMub25DaGFuZ2VMb2dpbi5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMub25DaGFuZ2VQYXNzd29yZCA9IHRoaXMub25DaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpXG4gICAgICAgIHRoaXMubWFrZUxvZ2luID0gdGhpcy5tYWtlTG9naW4uYmluZCh0aGlzKVxuICAgIH1cblxuICAgIG9uQ2hhbmdlTG9naW4oZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGxvZ2luOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG9uQ2hhbmdlUGFzc3dvcmQoZSkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHRvZ2dsZVRleHQoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgaGlkZTogIXRoaXMuc3RhdGUuaGlkZVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIG1ha2VMb2dpbigpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgPT09ICdyb290Jykge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGxvZ2dlZDogdHJ1ZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGFsZXJ0KCdMb2dnZWQhJylcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBhbGVydCgnV3JvbmcgcGFzc3dvcmQgb3IgbG9naW4nKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7bG9naW4sIHBhc3N3b3JkLCBsb2dnZWR9ID0gdGhpcy5zdGF0ZVxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydjb250ZW50J30gPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXsnbG9naW4tYmxvY2snfSBoaWRkZW49e2xvZ2dlZH0+XG4gICAgICAgICAgICAgICAgICAgIDxoMj5Mb2dpbjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgdmFsdWU9e2xvZ2lufSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUxvZ2lufSB0eXBlPXsndGV4dCd9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIHZhbHVlPXtwYXNzd29yZH0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VQYXNzd29yZH0gdHlwZT17J3Bhc3N3b3JkJ30gLz5cbiAgICAgICAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b24gdGl0bGU9eydFbnRlcid9IGhhbmRsZUNsaWNrPXt0aGlzLm1ha2VMb2dpbn0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17J2NvbnRlbnQnfSBoaWRkZW49eyFsb2dnZWR9PlxuICAgICAgICAgICAgICAgICAgICA8aDE+V2VsY29tZSB7bG9naW59ITwvaDE+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiXX0=