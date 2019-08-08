//

describe("Save method", () => {
    var Visitor;
    beforeEach(function () {
        Visitor = require('../main');
        visitor = new Visitor('Rokhuda', 12, "21/3/19", "1hr30", 'Shinigami love apples', 'Ryuk');
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
        visitor = new Visitor('Rokhuda', 12, "21/3/19", "1hr30", 'Shinigami love apples', 'Ryuk');
    });

    it("should check if the load method is defined.", () => {
        expect(visitor.load(1)).toBeDefined();
    });

});



