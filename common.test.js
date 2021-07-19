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
		it('Accepts a mix of upper case, lower case and digits', ()=>{
			expect(hasArgsRegex.test("testTEST1234")).toBe(true)
		})
		it('Rejects non-alphanumerics', ()=>{
			expect(hasArgsRegex.test("testTEST1234!")).toBe(false)
		})
		it('Rejects empty', ()=>{
			expect(hasArgsRegex.test("")).toBe(false)
		})
	})

})