declare type Callback = (evt: EmblaEvent) => void;
export declare type EmblaEvent = 'init' | 'pointerDown' | 'pointerUp' | 'scroll' | 'select' | 'settle' | 'destroy' | 'reInit' | 'resize';
export declare type EventEmitter = {
    emit: (evt: EmblaEvent) => EventEmitter;
    on: (evt: EmblaEvent, cb: Callback) => EventEmitter;
    off: (evt: EmblaEvent, cb: Callback) => EventEmitter;
};
export declare function EventEmitter(): EventEmitter;
export {};
