import { Limit } from './limit';
import { Vector1D } from './vector1d';
declare type Params = {
    limit: Limit;
    loop: boolean;
    target: Vector1D;
};
export declare type ScrollProgress = {
    get: (n: number) => number;
    set: (n: number) => number;
    add: (n: number) => number;
};
export declare function ScrollProgress(params: Params): ScrollProgress;
export {};
