declare type Params = {
    min: number;
    max: number;
};
export declare type Limit = {
    min: number;
    max: number;
    length: number;
    loop: (n: number) => number;
    constrain: (n: number) => number;
    reachedAny: (n: number) => boolean;
    reachedMax: (n: number) => boolean;
    reachedMin: (n: number) => boolean;
    removeOffset: (n: number) => number;
};
export declare function Limit(params: Params): Limit;
export {};
