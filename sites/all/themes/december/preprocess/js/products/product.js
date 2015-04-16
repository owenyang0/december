"use strict";

var React = require('react');


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


module.exports = Product;

