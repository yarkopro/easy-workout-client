export enum FacilityType {
    GYM,
    PLAYGROUND,
    TRACK,
    BAR,
    FIELD
}

export const facilityTypesDefinition = [
    {
        type: FacilityType.GYM,
        name: "Gym",
        icon: "barbell-outline"
    },
    {
        type: FacilityType.PLAYGROUND,
        name: "Playground",
        icon: "body-outline"
    },
    {
        type: FacilityType.TRACK,
        name: "Running track",
        icon: "walk-outline"
    },
    {
        type: FacilityType.BAR,
        name: "Workout bar",
        icon: "barbell-outline"
    },
    {
        type: FacilityType.FIELD,
        name: "Footbal field",
        icon: "football-outline"
    }
]
