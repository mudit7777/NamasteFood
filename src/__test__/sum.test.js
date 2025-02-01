import Sum from "../components/Sum";
test("sum function should calculate the sum of two numbers ", () => {
  const res = Sum(3, 4);
  expect(res).toBe(7);
});
