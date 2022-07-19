import * as App from "./App";
import * as math from "./math";

test("calls math.add", ()=>{
    const addMock = jest.spyOn(math, "add");
    expect(App.doAdd(1,2)).toEqual(3);
    expect(addMock).toHaveBeenCalledWith(1,2);
})