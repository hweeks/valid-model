"use strict";
var Model = require('backbone-model').Model;
var assign = require('lodash.assign');
var ValidModel = module.exports = Model.extend({
    set : function (attributes, options) {
        var name;
        var val;
        if (attributes.constructor === String) {
            name = attributes;
            val = options;
            attributes = {};
            attributes[name] = val;
            options = {};
        }
        return ValidModel.__super__.set.call(this, attributes, Object.assign({validate: true}, options));
    }
});
