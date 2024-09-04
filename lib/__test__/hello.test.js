"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = void 0;
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
var App_1 = tslib_1.__importDefault(require("../App"));
function sum(a, b) {
    return a + b;
}
exports.sum = sum;
(0, vitest_1.test)("renders welcome message", function () {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(App_1.default, {}));
    (0, vitest_1.expect)(react_1.screen.getByText("Learn React")).toBeTruthy();
});
(0, vitest_1.test)('adds 1 + 2 to equal 3', function () {
    (0, vitest_1.expect)(sum(1, 2)).toBe(3);
});
//# sourceMappingURL=hello.test.js.map