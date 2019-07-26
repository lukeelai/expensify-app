const add = (a, b) => a + b;
const generateGreeting = name => `Hello ${name}`;

test("should add 2 numbers", () => {
  const result = add(3, 4);

  if (result !== 7) {
    expect(result).toBe(7);
  }
});

test("should be hello name", () => {
  const result = generateGreeting("a");
  if (result !== "Hello Luke") {
    expect(result).toBe("Hello Luke");
  }
});
