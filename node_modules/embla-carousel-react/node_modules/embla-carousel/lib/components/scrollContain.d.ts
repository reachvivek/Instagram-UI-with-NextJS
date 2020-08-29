import { Alignment } from './alignment';
declare type Params = {
    slideIndexes: number[];
    slidesToScroll: number;
    contentSize: number;
    viewSize: number;
    alignment: Alignment;
};
export declare type ScrollContain = {
    indexes: (scrollSnaps: number[]) => number[][];
    snaps: (scrollSnaps: number[]) => number[];
};
export declare function ScrollContain(params: Params): ScrollContain;
export {};
