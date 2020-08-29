export declare type AxisOption = 'x' | 'y';
export declare type Axis = {
    cross: AxisOption;
    scroll: AxisOption;
    measure: (node: HTMLElement) => number;
};
export declare function Axis(axis: AxisOption): Axis;
