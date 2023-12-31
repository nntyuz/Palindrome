// TODO: Дан массив, который может содержать любые типы переменных. Необходимо вывести на экран список из элементов массива, которые являются палиндромами.

const data = [
  "Муза, ранясь шилом опыта, ты помолишься на разума",
  // Добавил еще полиндром
  "Муза, ранясь шилом опыта, ты помолишься на разум",
  // Добавил еще полиндром
  "а роза упала на лапу Азора",
  "шалаш",
  false,
  12342321,
  "потоп",
  8282882892,
  [],
  [1, 2, 2, 2, 3],
  true,
  123433334321,
  "манекенам",
  "водоворот",
  "Он рёва наверно",
];

const isPalindrome = (value) => {
  const result = value.filter((a) => {
    // Фильтрация массива на строку и число
    if (typeof a === "string" || typeof a === "number") {
      // Создаю  регулярное выражение которое убирает все символы, кроме латиницы, кириллицы и цифр
      const re = /[^\wа-яА-ЯёЁ]/g;
      // Создаю чистую переменную из элемента массива
      const clearValue = a.toString().toLowerCase().replaceAll(re, "");
      // Создаю перевернутую переменную из чистой переменной
      const reverseValue = clear
        .toString()
        .toLowerCase()
        .split("")
        .reverse()
        .join("");
      // Проверяю равна ли чистая переменная перевернутой
      if (clearValue === reverseValue) return true;
    }
  });
  return result;
};
console.log(isPalindrome(data));
