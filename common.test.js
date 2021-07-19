const {
	archivedArgsRegex,
	defaultListId,
	domainRegex,
	emailRegex,
	err,
	hasArgsRegex,
	intStringRegex,
	listRegex,
	listIdRegex,
	mongoIdRegex,
	onlyRegex,
	sortOrdersRegex,
	tagRegex,
	urlRegex,
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