"use strict";

var React = require('react');
var R = require('ramda');
var $ = require('jquery');

var req = require('./libs/request');
var utils = require('./libs/utils');
var Product = require('./product');


var Products = React.createClass({
  getInitialState: function() {
    return {
      products: {}
    };
  },

  componentDidMount: function() {
    var self = this;

    req.retrieveProducts().then(function(data) {
      self.setState({
        products: data
      });
    })
  },

  render: function () {

    var products = utils.productsUnit(this.props.data);

    return (
      <ul className="products">
        {products}
      </ul>
    )
  }
});


module.exports = Products;

