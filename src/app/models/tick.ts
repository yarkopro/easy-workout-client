import {Coords} from "./coords";
import {TickType} from "./tickType";

export interface Tick {
  entity_id: number;
  coordinates: Coords;
  type: TickType;
}
