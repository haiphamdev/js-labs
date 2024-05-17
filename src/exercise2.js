// Viết hàm sayHello(languageCode) nhận vào languageCode và trả về câu xin chào của ngôn ngữ tương ứng.
// languageCode = 'en' --> Hello
// languageCode = 'vi' --> Xin chào
// languageCode = 'fr' --> Bonjour
// languageCode = 'cn' --> Nǐn hǎo
// languageCode = 'ja' --> Konnichiwa
// languageCode = 'ko' --> Anyoung haseyo
// Trường hợp không truyền languageCode hoặc languageCode không hợp lệ thì trả về mặc định "Hello"

function sayHello1(languageCode) {
  let message;
  switch (languageCode) {
    case 'en': {
      message = 'Hello';
      break;
    }
    case 'vi': {
      message = 'Xin chào';
      break;
    }
    case 'fr': {
      message = 'Bonjour';
      break;
    }
    case 'cn': {
      message = 'Nǐn hǎo';
      break;
    }
    case 'ja': {
      message = 'Konnichiwa';
      break;
    }
    case 'ko': {
      message = 'Anyoung haseyoa';
      break;
    }

    default: {
      message = 'Hello';
    }
  }

  return message;
}

console.log(sayHello1('vi'));
console.log(sayHello1('vii'));
console.log(sayHello1('fr'));

function sayHello(languageCode) {
  // your code here ...
  const languageMap = {
    en: 'Hello',
    vi: 'Xin chào',
    fr: 'Bonjour',
    cn: 'Nǐn hǎo',
    ja: 'Konnichiwa',
    ko: 'Anyoung haseyo',
  };

  return languageMap[languageCode] || 'Hello';
}

console.log(sayHello('vi'));
console.log(sayHello('vii'));
console.log(sayHello('fr'));
