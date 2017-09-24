export class FunctionComposition<T, R> {

    constructor(private func: (value: T) => R) { }

    public andThen<U>(next: (value: R) => U): FunctionComposition<T, U> {
        return new FunctionComposition((value: T) => next(this.func(value)));
    }

    public apply(value: T): R {
        return this.func(value);
    }
}

export function first<T, R>(func: (value: T) => R): FunctionComposition<T, R> {
    return new FunctionComposition<T,R>(func);
}