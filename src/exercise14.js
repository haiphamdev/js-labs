// Viết hàm function cloneObject(obj) để clone một object obj truyền vào
// và trả về là một object mới có đầy đủ các keys của object truyền vào.

function cloneObject1(obj) {
  // your code here

  return Object.assign({}, obj);
}

function cloneObject2(obj) {
  // your code here

  return { ...obj };
}

console.log(cloneObject2({ id: 1, name: 'Hai' }));

function cloneObject(obj) {
  // your code here

  const newObj = {};

  for (const key in obj) {
    newObj[key] = obj[key];
  }

  return newObj;
}

console.log(cloneObject({ name: 'haiiiii', math: 9 }));
