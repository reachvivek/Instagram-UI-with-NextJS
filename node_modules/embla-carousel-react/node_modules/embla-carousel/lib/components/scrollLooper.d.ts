import { Limit } from './limit';
import { PxToPercent } from './pxToPercent';
import { Vector1D } from './vector1d';
declare type Params = {
    contentSize: number;
    limit: Limit;
    location: Vector1D;
    pxToPercent: PxToPercent;
};
export declare type ScrollLooper = {
    loop: (vectors: Vector1D[], direction: number) => void;
};
export declare function ScrollLooper(params: Params): ScrollLooper;
export {};
