import { PxToPercent } from './pxToPercent';
import { Vector1D } from './vector1d';
declare type Axis = 'x' | 'y';
export declare type DragTracker = {
    pointerDown: (evt: Event) => number;
    pointerMove: (evt: Event) => number;
    pointerUp: () => number;
    readPoint: (evt: any, axis: Axis) => Vector1D;
};
export declare function DragTracker(pxToPercent: PxToPercent): DragTracker;
export {};
