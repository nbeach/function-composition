export declare class FunctionComposition<T, R> {
    private func;
    constructor(func: (value: T) => R);
    andThen<U>(next: (value: R) => U): FunctionComposition<T, U>;
    apply(value: T): R;
}
export declare function first<T, R>(func: (value: T) => R): FunctionComposition<T, R>;
