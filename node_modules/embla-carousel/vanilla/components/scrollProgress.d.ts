import { Limit } from './limit';
declare type Params = {
    limit: Limit;
};
export declare type ScrollProgress = {
    get: (n: number) => number;
};
export declare function ScrollProgress(params: Params): ScrollProgress;
export {};
