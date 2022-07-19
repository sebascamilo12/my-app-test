import * as App from "./App";
import * as math from "./math";

export const add      = jest.fn();
export const subtract = jest.fn();
export const multiply = jest.fn();
export const divide   = jest.fn();

jest.mock("./math.js");
test("calls math.add", ()=>{
    App.doAdd(1,2);
    expect(math.add).toHaveBeenCalledWith(1,2);
});

test("calls math.subtract", ()=>{
    App.doSubstract(1,2);
    expect(math.subtract).toHaveBeenCalledWith(1,2);
});

test("calls math.multiply", ()=>{
    App.multiply(1,2);
    expect(math.multiply).toHaveBeenCalledWith(1,2);
});

test("calls math.divide", ()=>{
    App.doDivide(4,2);
    expect(math.divide).toHaveBeenCalledWith(4,2);
});