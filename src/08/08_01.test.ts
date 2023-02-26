type UsersType = {
    [key: string]: {id: number, name: string}
}
export let users: UsersType

beforeEach(()=> {
     users = {
        101: {id: 101, name: 'Roma'},
        11: {id: 11, name: 'Sasha'},
        63: {id: 63, name: 'Dema'}
    }
})
test("should update corresponding user", () => {
    users['101'].name = 'Vasia'

    expect(users['101'].name).toBe('Vasia')
})


test("should delete corresponding user", () => {
    delete users['101']

    expect(users['101']).toBe(undefined)
})