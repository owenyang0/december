"use strict";

var $ = require('jquery');

var request = {
  retrieveProducts: function () {
    return $.get('api/views/products_view?display_id=products');
  }
};

module.exports = request;