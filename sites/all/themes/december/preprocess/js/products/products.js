"use strict";

var React = require('react');
var R = require('ramda');
var $ = require('jquery');

var req = require('./libs/request');
var utils = require('./libs/utils');


var Product = React.createClass({
  render: function () {
    var bg = this.props.bg;
    if (this.props.isVideo == true) {
      bg =  <embed src={this.props.bg} allowFullScreen="true" quality="high" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
    } else {
      var bgImg = {"background-image": "url('" + bg + "')"};
      bg =  <div className="img" style={bgImg}></div>
    }

    return (
      <div className="product">
        <div className="background">{bg}</div>
        <div className="desc">
          <h1 className="desc__title">{this.props.title}</h1>
          <div className="desc__info">{this.props.info}</div>
        </div>
      </div>
    )
  }
});

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

    var products = utils.productsUnit(this.state.products);

    return (
      <ul className="products">
        {products}
      </ul>
    )
  }
});


module.exports = Products;

