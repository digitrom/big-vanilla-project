// const user = {
//     name: 'Roma',
//     age: 37,
//     address: {
//         country: {
//             title: 'Belarus',
//             city: {
//                 title: 'Minsk',
//                 street: 'Belinskogo'
//             }
//         }
//     }
// }
//
//
// user.address.country.city.street
//
// user["address"]["country"]["city"]["street"] // Ассоциативный массив.Результат тоо же, что и код выше -
// // Достаем св-ва из объекта  user. Почему в ковычках? Потому что на самом деле ключ (св-во) объекта это тоже строка
//
// const user = {
//     'name': 'Roma',
//     'age': 37,
//     'address': {
//         'country': {
//             'title': 'Belarus',
//             'city': {
//                 'title': 'Minsk',
//                 'street': 'Belinskogo'
//             }
//         }
//     }
// }
//
// let city = {};
//
// city.title = 'Minsk';
// city['citezensCount'] = 2000000 // 2 варианта присваивание значения св-вам
//
// // -----------------------------------------------
// let family = ['Sasha', 'Dema', 'Roma'];
//
// family['map'](element => element.toUpperCase())
// family.map(element => element.toUpperCase())  // 2 варианта метода массива .map
//
// //-------------------------------------------------
//
// let usersObj = {
//     0: 'Roma',
//     1: 'Sasha'
// }
//
// usersObj['Привет как поживаешь?'] = 'Хорошо!' // Такую дичь можно добавить только через эот синтаксис. Через сточку нельзя
//
// let usersObj = {
//     0: 'Roma',
//     1: 'Sasha',
//     Привет как поживаешь?: 'Хорошо!'
// }
// //-----------------------------------------------
//
// let usersObj = {
//     0: 'Roma',
//     1: 'Sasha',
//     Привет как поживаешь?: 'Хорошо!'
// }
//
//
// Object.keys(usersObj) // - пробегаемся по свойствам. Object Это класс с помощью которого можно создать. У него есть
// // метод keys, которому мы можем передать объект, ключи которого мы хотим получить
// // ['0', '1', 'Привет. Как поживаешь?']
// Object.values(usersObj) // таким де образом пробегаемся по значениям ключей
// // ['Roma', 'Sasha', 'Хорошо!']
// Object.values(usersObj).map(element => element.toUpperCase()) // можем делать что хочешь