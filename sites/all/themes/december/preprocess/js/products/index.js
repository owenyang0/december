var $ = require('jquery');
var React = require('react');

var Products = require('./products');

$(function() {
  React.render(
    <Products />,
    document.querySelector('.product__detail')
  );
});