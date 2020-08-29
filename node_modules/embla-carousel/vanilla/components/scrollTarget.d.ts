import { Counter } from './counter';
import { Limit } from './limit';
import { Vector1D } from './vector1d';
declare type Params = {
    index: Counter;
    loop: boolean;
    scrollSnaps: number[];
    contentSize: number;
    limit: Limit;
    target: Vector1D;
};
export declare type Target = {
    distance: number;
    index: number;
};
export declare type ScrollTarget = {
    byIndex: (target: number, direction: number) => Target;
    byDistance: (force: number, snap: boolean) => Target;
    shortcut: (target: number, direction: number) => number;
};
export declare function ScrollTarget(params: Params): ScrollTarget;
export {};
