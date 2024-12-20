import {it,expect,describe} from 'vitest';
import { countVowels, factorial,findCommonObjects,findLongestWord, isSubset } from './functions';

describe ('Faktoriális számok',()=>{
    it('pozitív eset',()=>{
        expect(factorial(5)).toBe(120)
        expect(factorial(3)).toBe(6)
    })
    it('0 eset',()=>{
        expect(factorial(0)).toBe(1)
    })
    
    it('negatív eset',()=>{
        expect(factorial(-3)).toThrowError('Error Factorial is not defined for negative numbers')
    })
        

})

describe('Leghosszabb szókereső',()=>{
    it('normál mondat',()=>{
        expect(findLongestWord("The quick brown fox jumps over the lazy dog")).toBe("quick")
    })
    it('egy szavas',()=>{
        expect(findLongestWord("Hello")).toBe("Hello")
    })
    it('üres mondat',()=>{
        expect(findLongestWord("")).toBe("")
    })
    it('Mondat extra szóközzel ',()=>{
        expect(findLongestWord(" A quick test ")).toBe("quick")
    })
})

describe('CountVowels',()=>{
    it('Normál szöveg',()=>{
        expect(countVowels("Hello World")).toBe(3)
    })
    it('Csak magánhangzó szöveg',()=>{
        expect(countVowels("bcdfg")).toBe(0)
    })
    it('Csak mássalhangzó szöveg',()=>{
        expect(countVowels("AeIou")).toBe(5)
    })
    it('Csak üres szöveg',()=>{
        expect(countVowels("")).toBe(0)
    })
})

describe("IsSubset",()=>{
    const obj1={a:1}
    const obj2={a:1,b:2}
    const obj3={c:3}
    it("Részhalmaz",()=>{
        expect(isSubset(obj1,obj2)).toBe(true)
    })
    it("Nem Részhalmaz",()=>{
        expect(isSubset(obj3,obj2)).toBe(false)
    })
})

describe("findCommonObjects",()=>{
  
    it("Közös objecktum",()=>{
        expect(findCommonObjects([{id:1,name:'Alice'},{id:2,name:'Bob'}],[{id:2,name:'Bob'},{id:3,name:'Charlie'}])).toEqual([{id:2,name:'Bob'}])
    })
    it("Nincs Közös objecktum",()=>{
        expect(findCommonObjects([{id:1,name:'Alice'}],[{id:3,name:'Charlie'}])).toEqual([])
    })
    it("Üres tömbök",()=>{
        expect(findCommonObjects([],[])).toEqual([])
    })
    it("Egyik tömb üres",()=>{
        expect(findCommonObjects([{id:1,name:'Alice'}],[])).toEqual([])
    })
})