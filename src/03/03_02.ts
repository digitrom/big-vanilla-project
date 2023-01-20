import {StudentType} from "../02/02";

    export const addSkill = (st: StudentType, skill: string) => {
st.technologies.push({id: new Date().getTime(), title: skill})
}

export const makeActive = (s: StudentType) => {
s.isActive = true
}

export function doesStudentLiveIn (st: StudentType, cityName: string) {
    return st.address.city.title === cityName;
}