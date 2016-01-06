"use strict";
var ValidModel = require('../index');
describe("valid-model", function () {
    var BuggedValidModel;
    var validModel;
    beforeEach(function () {
        BuggedValidModel = ValidModel.extend({
            validate: jasmine.createSpy("validation")
        });
        validModel = new BuggedValidModel();
    })
    it("should default to validate:true for the options passed to Model.prototype.set", function () {
        validModel.set('name', 'thomas');
        expect(validModel.validate).toHaveBeenCalled();
    });
});
