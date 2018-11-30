import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

/* it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
}); */

const add = (a, b) => a + b;

test("addTest", () => {
  expect(add(1, 2)).toBe(3);
});
