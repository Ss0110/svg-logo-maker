const { Square, Triangle, Circle } = require("./shapes");

describe("Square", () => {
  test("should render with the specified color", () => {
    const shape = new Square();
    shape.setColor("#202C59");
    expect(shape.render()).toEqual(
      '<rect width="200" height="200" style="fill:#202C59" />'
    );
  });
});

describe("Triangle", () => {
  test("should render with the specified color", () => {
    const shape = new Triangle();
    shape.setColor("#885A89");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" style="fill:#885A89" />'
    );
  });
});

describe("Circle", () => {
  test("should render with the specified color", () => {
    const shape = new Circle();
    shape.setColor("#ca00ca");
    expect(shape.render()).toEqual(
      '<circle cx="100" cy="100" r="90" style="fill:#ca00ca" />'
    );
  });
});
