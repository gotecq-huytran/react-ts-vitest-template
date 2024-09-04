"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("@testing-library/jest-dom");
var react_1 = require("@testing-library/react");
var vitest_1 = require("vitest");
(0, vitest_1.afterEach)(function () {
    (0, react_1.cleanup)();
});
(0, vitest_1.beforeAll)(function () {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: vitest_1.vi.fn().mockImplementation(function (query) { return ({
            matches: false,
            media: query,
            onchange: null,
            addListener: vitest_1.vi.fn(),
            removeListener: vitest_1.vi.fn(),
            addEventListener: vitest_1.vi.fn(),
            removeEventListener: vitest_1.vi.fn(),
            dispatchEvent: vitest_1.vi.fn(),
        }); }),
    });
});
//# sourceMappingURL=setup.js.map