import exp from "constants";

function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: { title: string }
}

test('reference type test', () => {
    let user: UserType = {
        name: 'Roma',
        age: 38,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(39)

    const superman = user
    superman.age = 1000

    expect(user.age).toBe(1000)
})
test('array reference test', () => {
    let users = [
        {
            name: 'Roma', age: 38
        },
        {
            name: 'Sasha', age: 29
        },
    ]

    let admins = users

    admins.push({name: 'Vlad', age: 43})

    expect(users[2]).toEqual({name: 'Vlad', age: 43})

})
test('value type test', () => {
    let usersCount = 100
    let adminsCount = usersCount
    usersCount = 102

    expect(adminsCount).toBe(100)
})
test('reference type test 2', () => {
    let user: UserType = {
        name: 'Roma',
        age: 38,
        address: {
            title: 'Minsk'
        }
    }

    let user2: UserType = {
        name: 'Sasha',
        age: 29,
        address: user.address
    }

    user2.address.title = 'Canary'

    expect(user.address).toBe(user2.address)
    expect(user.address.title).toBe('Canary')

})


test('reference type array test ', () => {

    const address = {
        title: 'Minsk'
    }
    let user: UserType = {
        name: 'Roma',
        age: 38,
        address: address
    }

    let user2: UserType = {
        name: 'Sasha',
        age: 29,
        address: address
    }

    let users = [user, user2, {name: 'Dema', age: 3, address: address}]

    const admins = [user, user2]

    admins[0].address.title = 'Zhodino'
    admins[0].name='Vlad'

    expect(users[2].address).toBe(user2.address)
    // expect(users[2].address.title).toBe('Minsk')
    expect(admins[1].address.title).toBe('Zhodino')
    expect(users[0].name).toBe('Vlad')
    expect(user.name).toBe('Vlad')

})

test('sort array test',()=>{
    const letters = ['b', 'd', 'a', 'c']

    letters.sort();

    expect(letters).toEqual(['a','b','c', 'd'])
})

test('sort array test 2',()=>{
    const letters = ['b', 'd', 'a', 'c']

  passportist(letters)

    expect(letters).toEqual(['b', 'd', 'a', 'c'])
})

function passportist(letters: any) {
    letters.sort();
}