import {describe, expect, test} from '@jest/globals'
  import { result } from "./index";

  describe('Example Problem', () => {
    
    test('true expects true', () => {
      expect(result(true)).toBe(true);
    })
  
  });
