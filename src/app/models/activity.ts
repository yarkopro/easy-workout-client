import {Facility} from './facility';
import {Coords} from './coords';

export class Activity {
    id: number;
    name: string;
    description: string;
    timestamp: number;
}

export class StandaloneActivity extends Activity {
    coords: Coords;
}

export class FacilityActivity extends Activity {
    facility: Facility;
}
