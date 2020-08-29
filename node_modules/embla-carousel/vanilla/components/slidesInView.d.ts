declare type Params = {
    contentSize: number;
    slideSizes: number[];
    viewSize: number;
    loop: boolean;
    inViewThreshold: number;
};
export declare type SlidesInView = {
    check: (location: number) => number[];
};
export declare function SlidesInView(params: Params): SlidesInView;
export {};
