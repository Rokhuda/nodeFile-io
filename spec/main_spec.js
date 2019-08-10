describe("Save method", () => {
    
    beforeEach(function () {
        var Visitor;
        Visitor = require('../main');
        visitor = new Visitor('Rokhuda', 30, "21/3/19", "1hr30", 'attentive', 'Ryuk');
    });

    it("should check if save method is defined", () => {
        expect(visitor.save()).toBeDefined();
    });

    it("it should save the visitor information into a json file", () => {
        let result = 'File has been created.';
        expect(visitor.save()).toBe(result);
    });

});

describe("Load method", () => {
    beforeEach(function () {
        var Visitor;
        Visitor = require('../main');
        visitor = new Visitor('Rokhuda', 30, "21/3/19", "1hr30", 'attentive', 'Ryuk');
    });

    it("should check if the load method is defined.", () => {
        expect(visitor.load(1)).toBeDefined();
    });

    it("should take in a number and load a visitor object file", () => {
        
        let result = JSON.stringify(visitor)
        expect(visitor.load(1)).toEqual(result);
    });
});

describe("visitor count", () => {
    it("should assign every instance of a visitor a number", () => {
        global.count = 0
        let result = counter++ 
        expect(result).toBeGreaterThan(0)
    });
});  