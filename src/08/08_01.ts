export let usersObj = {
    '0': 'Roma',
    '1': 'Sasha',
    '2': 'Dema'
}


type UsersType = {
[key: string]: {id: number, name: string}
}
//Это Ассоциативный массив
export const users: UsersType = {
    101: {id: 101, name: 'Roma'},
    11: {id: 11, name: 'Sasha'},
    63: {id: 63, name: 'Dema'}
}
//поиск пользователя к св-ву легко обратиться
// users[11]

//добавление нового полльзователя в массив происходит моментально быстро
let user = {id: 100500, name: 'Boria'}
users[user.id] = user;

// удаление пользователя из ассоциативного массива происходит моментально быстро
delete users[user.id]

// обновление пользователя - бытсро
users[user.id].name = 'Vasia'


//Это обычный массив

export const usersArray = [
    {id: 101, name: 'Roma'},
    {id: 11, name: 'Sasha'},
    {id: 63, name: 'Dema'}
]

//поиск пользователя
// - нужно использовтаь  filter или find(перебирает все объекты что нагружает систему)
// usersArray.find(u => u.id === 1)

// добавление нового полльзователя (иммутабельно) - перебирает все объекты что нагружает систему
// let usersCopy = [...usersArray.filter(), user]
// фильтруем чтобы не добавить дубликат

// удаление пользователя из обычного массива через  тоже filter
// let usersArray =  usersArray.filter(u   => u.id !== user.id )


