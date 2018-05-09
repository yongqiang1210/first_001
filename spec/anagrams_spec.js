const anagram=require('../lib/anagram')

describe("anagram",()=>{
    
    it("should return [] when input is empty string",()=>{
        expect(anagram()).toEqual([])
    })

    it("should return [a] when input is a",()=>{
        expect(anagram("a")).toEqual(["a"])
    })

    it("should return [ab,ba] when input is ab",()=>{
        expect(anagram("ab")).toEqual(["ab","ba"])
    })

    it("should return [abc,bac] when input is abc",()=>{
        expect(anagram("abc")).toEqual([
            "abc",
            "acb",
            "bac",
            "bca",
            "cab",
            "cba"
        ])
    })
})