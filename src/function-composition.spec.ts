import {expect} from 'chai';
import {first} from "./function-composition";

describe("FunctionComposition", () => {

    it("allows composing of functions", () => {
        const addFive = (num: number) => num + 5;
        const isTen = (num: number) => num === 10;
        const toString = (val: number | boolean | string) => String(val);

        const actual = first(addFive)
            .then(isTen)
            .then(toString)
            .apply(2);

        expect(actual).to.equal("false");
    });

});