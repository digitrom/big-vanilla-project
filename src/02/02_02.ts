export type StreetType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<GovBuildingType>
    citizensNumber: number

}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type GovBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
