import { jsx as _jsx } from "react/jsx-runtime";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "../App";
export function sum(a, b) {
    return a + b;
}
test("renders welcome message", () => {
    render(_jsx(App, {}));
    expect(screen.getByText("Learn React")).toBeTruthy();
});
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});
//# sourceMappingURL=hello.test.js.map