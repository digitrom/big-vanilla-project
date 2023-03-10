type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}

export const student: StudentType = {
    id: 1,
    name: "Roma",
    age: 37,
    isActive: true,
    address: {
        streetTitle: "Belinskogo 54",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "JS",
        },
        {
            id: 3,
            title: "CSS",
        }
    ]
}
console.log(student.technologies[2].title)