import {CityType, GovBuildingType, HousesType} from "../02/02_02";

export function addMoneyToBudget (building: GovBuildingType , budget: number) {
 building.budget += budget
}

export const repairHouse = (house: HousesType) => {
house.repaired = true;
}

export const toFireStaff =(building: GovBuildingType, firedStaff: number) => {
    building.staffCount -= firedStaff;
}

export const toHireStaff =(building: GovBuildingType, hiredStaff: number) => {
    building.staffCount += hiredStaff;
}

// export function createMessage (city: CityType) {
// return "Hello " + city.title + " citizens. I want you be happy. All " + city.citizensNumber +" people"
// }

export function createMessage (city: CityType) {
return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} people`
}