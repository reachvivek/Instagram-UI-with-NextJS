declare type EventHandler = EventListener | EventListenerObject | null;
declare type EventOptions = boolean | EventListenerOptions | undefined;
export declare type EventStore = {
    add: (node: EventTarget, type: string, handler: EventHandler, options?: EventOptions) => EventStore;
    removeAll: () => EventStore;
};
export declare function EventStore(): EventStore;
export {};
