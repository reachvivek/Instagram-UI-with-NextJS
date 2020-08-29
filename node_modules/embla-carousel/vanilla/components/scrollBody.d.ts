import { Direction } from './direction';
import { Vector1D } from './vector1d';
declare type Params = {
    location: Vector1D;
    speed: number;
    mass: number;
};
export declare type ScrollBody = {
    location: Vector1D;
    direction: Direction;
    update: () => void;
    seek: (v: Vector1D) => ScrollBody;
    settle: (v: Vector1D) => boolean;
    useSpeed: (n: number) => ScrollBody;
    useDefaultSpeed: () => ScrollBody;
    useMass: (n: number) => ScrollBody;
    useDefaultMass: () => ScrollBody;
};
export declare function ScrollBody(params: Params): ScrollBody;
export {};
