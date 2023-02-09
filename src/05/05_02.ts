import {GovBuildingType, HousesType} from "../02/02_02";

export const getStreetsTitlesOfGovernmentBuildings = (govBuildings: Array<GovBuildingType>) => {
    // берем исходный массив и мапимся по нем. мы хотим получить новый массив с тем же количеством элементов
    // в нем, но из каждого building мы достанем только названия улицы и упакуем в новый массив
    return govBuildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HousesType>) => {
    return houses.map(house => house.address.street.title)
}