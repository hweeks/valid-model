"use strict";
var ValidModel = require('../index');
var sinon = require('sinon');
var assert = require('assert');
describe("valid-model", function () {
    var BuggedValidModel;
    var validModel;
    var validate;
    beforeEach(function () {
        validate = sinon.spy();
        BuggedValidModel = ValidModel.extend({
            validate: validate
        });
        validModel = new BuggedValidModel();
    })
    it("should default to validate:true for the options passed to Model.prototype.set", function () {
        validModel.set('name', 'thomas');
        assert(validate.called);
    });
});
