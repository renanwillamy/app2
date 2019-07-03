(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
    typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
    (global = global || self, factory(global.Module1 = {}, global.React));
}(this, function (exports, React) { 'use strict';

    var React__default = 'default' in React ? React['default'] : React;

    var _jsxFileName = "/home/renan/Development/my-app/src/Backflush.js";

    class Backflush extends React.Component {
      constructor(props) {
        super(props);

        this.getData = () => {
          fetch('https://jsonplaceholder.typicode.com/posts/1/comments').then(response => response.json()).then(json => {
            this.setState({
              data: json
            });
          });
        };

        this.state = {
          data: []
        };
      }

      componentDidMount() {
        this.getData();
      }

      render() {
        return React__default.createElement("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25
          },
          __self: this
        }, React__default.createElement("h1", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: this
        }, "Backflush"), React__default.createElement("ul", {
          style: {
            listStyleType: 'none'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27
          },
          __self: this
        }, this.state.data.map((item, index) => {
          return React__default.createElement("li", {
            key: index + 'back',
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          }, React__default.createElement("div", {
            style: {
              marginTop: '10px',
              marginBottom: '10px'
            },
            __source: {
              fileName: _jsxFileName,
              lineNumber: 30
            },
            __self: this
          }, item.name));
        })));
      }

    }

    function init() {
      let routeInfo = {
        path: '/backflush',
        component: Backflush
      };
      return routeInfo;
    }

    exports.Backflush = Backflush;
    exports.init = init;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=module1.js.map
