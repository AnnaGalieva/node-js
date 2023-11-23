// 1. Создайте файл changePerson.js рядом с файлом writePerson.js
// 2. Напишите в нем код, который
// ➜ прочитает файл person.json,
// ➜ уменьшит возраст на 10
// ➜ изменит город на “Ekaterinburg”
// ➜ перезапишет исходный файл person.json
// Основы Node.js

// 💡 Подсказки:
// - Для преобразования текста в объект, необходимо использовать
// функцию JSON.parse()
// - Также не забывайте, что путь к файлу необходимо формировать
// с помощью path.join() и __dirname
// - Используйте синхронные методы чтения и записи.
const fs = require('fs');
const path = require('path');
const pathToFile = path.join(__dirname, 'person.json');

const personData = JSON.parse(fs.readFileSync(pathToFile, 'utf8'));
personData.age = personData.age - 10;
personData.city = 'Ekaterinburg';

fs.writeFileSync(pathToFile, JSON.stringify(personData, null, 2));