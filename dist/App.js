"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("src/components/Button"));

var _TextField = _interopRequireDefault(require("src/components/TextField"));

require("src/style/app.css");

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