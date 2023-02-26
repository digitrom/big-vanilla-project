import React, {useState} from "react";

export type ManType = {
    name: string
    age: number
    lessons: Array<{ title: string }>
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}



//ВАРИАНТЫ ДЕСТРУКТУРИЗАЦИИ

// const ManComponent: React.FC<PropsType> = (props) => {
//     // const {title} = props
//     // const {name} = props.man
//
//     // const {title, man: {name}} = props  // то же самое что и код выше
//     const {title, man} = props  // то же самое что и код выше
//
//     return (
//         <div>
//             <h1>{title}</h1>
//             <hr/>
//             <div>
//                 {props.car.model}
//             </div>
//             <div>
//                 {man.name}
//             </div>
//         </div>
//     )
// }


const ManComponent: React.FC<PropsType> = (props) => {

    function useRomanState (m: string) {
        return [m, function(){}]
    }

    const [message, setMessage] = useRomanState("Hey")
const {title, man, ...restProps} = props

    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {props.car.model}
            </div>
            <div>
                {man.name}
            </div>
        </div>
    )
}

// const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {
//
//
//     return (
//         <div>
//             <h1>{title}</h1>
//             <hr/>
//             <div>
//                 {props.car.model}
//             </div>
//             <div>
//                 {man.name}
//             </div>
//         </div>
//     )
// }

// const ManComponent: React.FC<PropsType> = ( {title, man} ) => {
//
//     return (
//         <div>
//             <h1>{title}</h1>
//             <hr/>
//             <div>
//                 {man.name}
//             </div>
//         </div>
//     )
// }

