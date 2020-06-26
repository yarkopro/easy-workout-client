export enum FacilityType {
    PLAYGROUND,
    TRACK,
    GYM,
    FIELD,
    OUTLET
}

export const facilityTypesDefinition = [
    {
        type: FacilityType.PLAYGROUND,
        name: "Спортивний майданчик",
        icon: "body-outline"
    },
    {
        type: FacilityType.TRACK,
        name: "Біговий трек",
        icon: "walk-outline"
    },
    {
        type: FacilityType.GYM,
        name: "Спортивний зал",
        icon: "barbell-outline"
    },
    {
        type: FacilityType.FIELD,
        name: "Гральне поле",
        icon: "football-outline"
    },
    {
        type: FacilityType.OUTLET,
        name: "Магазин спорттоварів",
        icon: "barbell-outline"
    }
]
