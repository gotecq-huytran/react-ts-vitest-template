"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = tslib_1.__importDefault(require("react"));
var client_1 = tslib_1.__importDefault(require("react-dom/client"));
var App_1 = tslib_1.__importDefault(require("./App"));
require("./index.css");
client_1.default.createRoot(document.getElementById('root')).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }));
//# sourceMappingURL=main.js.map