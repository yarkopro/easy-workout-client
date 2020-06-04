import {FacilityType} from './facility-type';
import {Coords} from './coords';
import {FacilityActivity} from './activity';

export class Facility {
    id: number;
    type: FacilityType;
    name: string;
    description: string;
    coords: Coords;
    activities: FacilityActivity[];
}
