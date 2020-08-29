import { Axis, AxisOption } from './axis';
import { PxToPercent } from './pxToPercent';
import { Vector1D } from './vector1d';
declare type Params = {
    axis: Axis;
    pxToPercent: PxToPercent;
};
export declare type DragTracker = {
    pointerDown: (evt: Event) => number;
    pointerMove: (evt: Event) => number;
    pointerUp: () => number;
    readPoint: (evt: any, axis: AxisOption) => Vector1D;
};
export declare function DragTracker(params: Params): DragTracker;
export {};
