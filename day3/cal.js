const cal = [
  0,
  (a) => {
    cal[5].push(cal[0]);
    cal[0] += a;
  },
  (a) => {
    cal[5].push(cal[0]);
    cal[0] -= a;
  },
  (a) => {
    cal[5].push(cal[0]);
  },
  (a) => {
    cal[5].push(cal[0]);
  },
];
// cal[1](1);
// cal[1](1);
// cal[1](1);
// cal[1](1);
// cal[1](1);

console.log(cal[0]);
