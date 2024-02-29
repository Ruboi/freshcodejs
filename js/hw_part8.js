// Завдання на Map
// Напишіть функцію, яка приймає два рядки
// і повертає true, якщо з літер першого рядка можна скласти другий і навпаки
// false - якщо не можна


function compare(str1, str2) {
  const charCountMap = new Map();

  const addToMap = (str, isAdd) => {
      str.toLowerCase().split('').map(char => {
          const count = charCountMap.get(char) || 0;
          charCountMap.set(char, isAdd ? count + 1 : count - 1);
      });
  };

  addToMap(str1, true);
  addToMap(str2, false);

  for (const count of charCountMap.values()) {
      if (count !== 0) {
          return false;
      }
  }

  return true;
}
  
  console.log(compare('test', 'text'));    // false
  console.log(compare('Mom', 'omm'));      // true
  console.log(compare('asd', 'Sad'));      // true
  console.log(compare('asd', 'ssaadd'));   // false
  console.log(compare('ssaadd', 'asd'));   // false