import { render, screen } from '@testing-library/react';
import * as App from './App';
import * as math from './math';

math.add = jest.fn();
math.subtract = jest.fn();

test("calls math.add", ()=>{
  App.doAdd(1,2);
  expect(math.add).toHaveBeenCalledWith(1,2);
});

test("calls math.subtract", ()=>{
 App.doSubstract(1,2);
 expect(math.subtract).toHaveBeenCalledWith(1,2); 
});
