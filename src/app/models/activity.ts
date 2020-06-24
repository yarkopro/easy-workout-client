import {Facility} from './facility';
import {Coords} from './coords';
import {User} from './user';

export class Activity {
    id: number;
    name: string;
    description: string;
    time: number;
    author: User;
    userAssignments: User[];
}

export class StandaloneActivity extends Activity {
    coords: Coords;
}

export class FacilityActivity extends Activity {
    facility: Facility;
}
