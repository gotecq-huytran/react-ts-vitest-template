"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var logo_svg_1 = tslib_1.__importDefault(require("./logo.svg"));
require("./App.css");
function App() {
    var _a = (0, react_1.useState)(0), count = _a[0], setCount = _a[1];
    return ((0, jsx_runtime_1.jsx)("div", tslib_1.__assign({ className: "App" }, { children: (0, jsx_runtime_1.jsxs)("header", tslib_1.__assign({ className: "App-header" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: logo_svg_1.default, className: "App-logo", alt: "logo" }), (0, jsx_runtime_1.jsx)("p", { children: "Hello Vite + React!" }), (0, jsx_runtime_1.jsx)("p", { children: (0, jsx_runtime_1.jsxs)("button", tslib_1.__assign({ type: "button", onClick: function () { return setCount(function (count) { return count + 1; }); } }, { children: ["count is: ", count] })) }), (0, jsx_runtime_1.jsxs)("p", { children: ["Edit ", (0, jsx_runtime_1.jsx)("code", { children: "App.tsx" }), " and save to test HMR updates."] }), (0, jsx_runtime_1.jsxs)("p", { children: [(0, jsx_runtime_1.jsx)("a", tslib_1.__assign({ className: "App-link", href: "https://reactjs.org", target: "_blank", rel: "noopener noreferrer" }, { children: "Learn React" })), ' | ', (0, jsx_runtime_1.jsx)("a", tslib_1.__assign({ className: "App-link", href: "https://vitejs.dev/guide/features.html", target: "_blank", rel: "noopener noreferrer" }, { children: "Vite Docs" }))] })] })) })));
}
exports.default = App;
//# sourceMappingURL=App.js.map