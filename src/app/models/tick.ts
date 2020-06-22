import {Coords} from "./coords";
import {TickType} from "./tickType";

export interface Tick {
  entityId: number;
  coords: Coords;
  type: TickType;
}
