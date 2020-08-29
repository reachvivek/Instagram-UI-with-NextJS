import { Animation } from './animation';
import { Counter } from './counter';
import { EventEmitter } from './eventEmitter';
import { ScrollTarget } from './scrollTarget';
import { Vector1D } from './vector1d';
declare type Params = {
    animation: Animation;
    target: Vector1D;
    index: Counter;
    indexPrevious: Counter;
    scrollTarget: ScrollTarget;
    events: EventEmitter;
};
export declare type ScrollTo = {
    distance: (n: number, snap: boolean) => void;
    index: (n: number, direction: number) => void;
};
export declare function ScrollTo(params: Params): ScrollTo;
export {};
