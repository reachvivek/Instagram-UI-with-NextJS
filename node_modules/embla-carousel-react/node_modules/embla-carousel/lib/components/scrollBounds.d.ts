import { Animation } from './animation';
import { Limit } from './limit';
import { ScrollBody } from './scrollBody';
import { Vector1D } from './vector1d';
declare type Params = {
    limit: Limit;
    location: Vector1D;
    scrollBody: ScrollBody;
    animation: Animation;
};
export declare type ScrollBounds = {
    constrain: (v: Vector1D) => void;
};
export declare function ScrollBounds(params: Params): ScrollBounds;
export {};
