const {
	hasArgsRegex,
	humaneTimestampDiff,
	getDupes,
	nukeDupes
} = require('./common')

describe("Regular expression tests", ()=>{

	describe('has argument regex', ()=>{
		it('Accepts a mix of upper case, lower case, digits', ()=>{
			expect(hasArgsRegex.test("testTEST1234")).toBe(true)
		})
		it('And also single quotes!', ()=>{
			expect(hasArgsRegex.test("'testTEST1234'")).toBe(true)
		})
		it('And also single quotes!', ()=>{
			expect(hasArgsRegex.test('"testTEST1234"')).toBe(true)
		})
		it('Rejects other non-alphanumerics', ()=>{
			expect(hasArgsRegex.test("testTEST1234!")).toBe(false)
		})
		it('Rejects empty strings', ()=>{
			expect(hasArgsRegex.test("")).toBe(false)
		})
	})

})


describe("Humane date diff tests", function () {

	it("Should throw when passed nothing", function () {
		expect(() => humaneTimestampDiff("justone")).toThrow()
	})

	it("Should say '<1m' if time diff is under 60s", function () {
		expect(humaneTimestampDiff(0, 59 * 1000)).toEqual("<1m")
	})

	it("Should say '1m' if difference is 61s", function () {
		expect(humaneTimestampDiff(60 * 1000, 121 * 1000)).toEqual("1m")
	})

	it("Should say '1m' if difference is 119s", function () {
		expect(humaneTimestampDiff(0, 119 * 1000)).toEqual("1m")
	})

	it("Should say '2m' if difference is 120s", function () {
		expect(humaneTimestampDiff(0, 120 * 1000)).toEqual("2m")
	})

	it("Should say '59m' if diff is 1ms shy of 1hr", function () {
		expect(humaneTimestampDiff(0, 59 * 60 * 1000 + 59 * 1000 + 999)).toEqual("59m")
	})

	it("Should say '1h' if called with 1hr diff", function () {
		expect(humaneTimestampDiff(0, 60 * 60 * 1000)).toEqual("1h")
	})

	it("Should say '23h' if diff is 1ms shy of 24hrs", function () {
		expect(humaneTimestampDiff(0, 24 * 60 * 60 * 1000 - 1)).toEqual("23h")
	})

	it("Should say '3d' if called with exactly 3 days diff", function () {
		expect(humaneTimestampDiff(0, 3 * 24 * 60 * 60 * 1000)).toEqual("3d")
	})

	it("Should say '1w' if called with 1w diff", function () {
		expect(humaneTimestampDiff(0, 7 * 24 * 60 * 60 * 1000)).toEqual("1w")
	})

	it("Should say '51w' if called with 1y - 1ms diff", function () {
		expect(humaneTimestampDiff(0, 52 * 7 * 24 * 60 * 60 * 1000 - 1)).toEqual("51w")
	})

	it("Should say '1y' if called with 1y", function () {
		expect(humaneTimestampDiff(0, 52 * 7 * 24 * 60 * 60 * 1000)).toEqual("1y")
	})

	it("Should say '1234y' if called with 1234y difference", function () {
		expect(humaneTimestampDiff(0, 1234 * 52 * 7 * 24 * 60 * 60 * 1000)).toEqual("1234y")
	})
})


describe("Dupe detection and removal", ()=>{

	// getDupes should return an array the of duplicates in any array of primitives
	describe('getDupes tests', ()=>{
		it('Returns an array of the dupes present in a mixed array', ()=>{
			const listWithDupes = [false, "bing", 2, "", 3, "bong", undefined, 2, undefined, ""]
			expect(getDupes(listWithDupes).length).toBe(3)
			expect(getDupes(listWithDupes)[0]).toBe(2)
			expect(getDupes(listWithDupes)[1]).toBe("")
			expect(getDupes(listWithDupes)[2]).toBe(undefined)
		})
	})
	
	// nukeDupe should dedupe any array of primitives
	describe('nukeDupes tests', ()=>{
		it("Returns a mixed array of minus it's dupes.", ()=>{
			const listWithDupes = [false, "bing", 2, "", 3, "bong", undefined, 2, undefined, ""]
			expect( nukeDupes(listWithDupes).length ).toBe(7)
		})
	})

})