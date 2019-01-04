var app = require("./app")

describe("App", function () {
  it("should return value", function () {
    expect(app(2, 1)).toBe(3);
  })
})