import { Limit } from './limit';
declare type Params = {
    contentSize: number;
    loop: boolean;
};
export declare type ScrollLimit = {
    measure: (scrollSnaps: number[]) => Limit;
};
export declare function ScrollLimit(params: Params): ScrollLimit;
export {};
