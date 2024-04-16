const obj = {
  a: {
    n1: 1,
    n2: 3,
  },
  b: {
    n1: 2,
    n2: 4,
  },
  c: {
    n1: 3,
    n2: 5,
  },
};

const createObj = {
  n1: {},
  n2: {},
};

for (const key in obj) {
  if (obj.hasOwnProperty(key)) {
    createObj.n1[key] = obj[key].n1;
    createObj.n2[key] = obj[key].n2;
  }
}

console.log(createObj); // {n1:{a:1,b:2,c:3},n2:{a:3,b:4,c:5}}
