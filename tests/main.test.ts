import { hello } from "~/main";

it("should say Hello World", () => {
  expect(hello("World")).toBe("Hello World");
});
