import {Coords} from "./coords";
import {TickType} from "./tickType";

export interface Tick {
  entityId: number;
  coordinates: Coords;
  type: TickType;
}
