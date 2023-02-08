import {CityType, GovBuildingType} from "../02/02_02";

export const demolishHouseOnTheStreet = (city:CityType, streetTitle:string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== streetTitle)
}

export const getBuildingsWithStaffCountGreaterThan = (buildings: Array<GovBuildingType>, number: number) => {
return buildings.filter(building => building.staffCount > number)
}