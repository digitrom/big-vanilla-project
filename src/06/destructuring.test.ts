
type ManType = {
    name: string
    age: number
    lessons: Array<{title: string}>
    address: {
        street: {
            title: string
        }
    }
}

let props: ManType

beforeEach(() => {
    let props = {
        name: 'Roman',
        age: 37,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Belinskogo'
            }
        }
    }
})

test('', () => {
    let props = {
        name: 'Roman',
        age: 37,
        lessons: [{title: '1'}, {title: '2'}],
        address: {
            street: {
                title: 'Belinskogo'
            }
        }
    }


    // const age = props.age
    // const lessons = props.lessons
    const {age, lessons} = props;  // Destructuring assignment (деструктурное присваивание) Код выше идентичен

    // const a = props.age
    // const l = props.lessons
    const {age: a, lessons: l} = props // Код выше идентичен. ДАем псеводнимы

    // const title = props.address.street.title
    const {title} = props.address.street // то же самое, что и код выше



    expect(age).toBe(37)
    expect(lessons.length).toBe(2)
    expect(title).toBe('Belinskogo')

})


test('', () => {

})