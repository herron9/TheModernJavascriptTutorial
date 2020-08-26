describe("pow", function() {

	// before/after and beforeEach/afterEach
	before(() => console.log("Testing started: before all tests"));
  	after(() => console.log("Testing finished: after all tests"));

  	beforeEach(() => console.log("Before a test: enter a test"));
  	afterEach(() => console.log("After a test: exit a test"));

	it("2 raised to power 3 is 8", function() {
		console.log("Test 1");
		assert.equal(pow(2, 3), 8);
	});

	it("3 raised to power 4 is 81", function() {
		console.log("Test 2");
		assert.equal(pow(3, 4), 81);
	});


	it("for negative n the result is NaN", function() {
    	assert.isNaN(pow(2, -1));
  	});

  it("for non-integer n the result is NaN", function() {
    	assert.isNaN(pow(2, 1.5));
  	});
  
});

describe("more value pow", function() {

	function makeTest(x) {
	let expected = x * x * x;
	it(`${x} in the power 3 is ${expected}`, function() {
	  assert.equal(pow(x, 3), expected);
	});
	}
	// Instead of writing it blocks manually, we can generate them in for
	for (let x = 1; x <= 5; x++) {
	makeTest(x);
	}

});