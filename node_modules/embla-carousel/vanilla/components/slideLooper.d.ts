import { Axis } from './axis';
import { Vector1D } from './vector1d';
declare type Params = {
    axis: Axis;
    scrollSnaps: number[];
    viewSize: number;
    location: Vector1D;
    slideSizes: number[];
    contentSize: number;
};
declare type LoopPoint = {
    point: number;
    location: number;
    index: number;
    getTarget: (location: number) => number;
};
export declare type SlideLooper = {
    canLoop: () => boolean;
    clear: (slides: HTMLElement[]) => void;
    loop: (slides: HTMLElement[]) => void;
    loopPoints: LoopPoint[];
};
export declare function SlideLooper(params: Params): SlideLooper;
export {};
