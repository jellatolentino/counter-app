// first logic with an asynchronous callback function and a timeout indicated
test("This is the first logic to test", async () => {}, 10000)
// second test logic with a callback function and default timeout of 5 seconds
test("This is the second logic to test", () => {})

test("Get summation", () => {
	// expect has an expression that needs to be evaluated
	// how it reads is: expect the expression of 2+2 to be a value of 4
	expect(2+2).toBe(4)
})