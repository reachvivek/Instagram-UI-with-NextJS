import { Alignment } from './alignment';
export declare type ScrollContainOption = '' | 'trimSnaps' | 'keepSnaps';
declare type Params = {
    contentSize: number;
    viewSize: number;
    alignment: Alignment;
};
export declare type ScrollContain = {
    measure: (scrollSnaps: number[], trim: boolean) => number[];
};
export declare function ScrollContain(params: Params): ScrollContain;
export {};
