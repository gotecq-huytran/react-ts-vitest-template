import React from "react";
import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "../App";

// sum.js
export function sum(a, b) {
  return a + b
}

test("renders welcome message", () => {
  render(<App />);
  expect(screen.getByText("Learn React")).toBeTruthy();
});


// sum.test.js

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})