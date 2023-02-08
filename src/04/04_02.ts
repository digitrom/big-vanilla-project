import {CityType, GovBuildingType} from "../02/02_02";

export const demolishHouseOnTheStreet = (city:CityType, streetTitle:string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== streetTitle)
}

export const getBuildingsWithStaffCountGreaterThan = (govBuildings: Array<GovBuildingType>, number: number) => {
return govBuildings.filter(building => building.staffCount > number)
}