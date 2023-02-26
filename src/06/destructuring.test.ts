import {ManType} from "./Destructuring";


let props: ManType

beforeEach(() => {
    props = {
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

    const l1 = props.lessons[0];
    const l2 = props.lessons[1];

    // const [ls1, ls2] = props.lessons;
    const [, ls2] = props.lessons;

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    // expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')
})