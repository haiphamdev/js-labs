// Viết hàm isEqual(obj1, obj2) nhận vào 2 objects và trả về:
// true nếu số lượng keys của 2 objects bằng nhau, và giá trị của từng key cũng bằng nhau (dùng === để so sánh)
// ngược lại là false

function isEqual(obj1, obj2) {
  for (const key in obj1) {
    return obj1[key] === obj2[key];
  }

  return Object.keys(obj1).length !== Object.keys(obj2).length;
}

console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));
