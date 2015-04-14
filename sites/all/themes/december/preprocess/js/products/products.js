"use strict";

var React = require('react');
var R = require('ramda');
var $ = require('jquery');

function getBackground(product) {
  function isVideo() {
    return product._type === '视频作品';
  }

  function getVideo() {
    return R.prop(1, /src=&quot;(.*?)&quot;/.exec(product.video));
  }

  function getPhoto() {
    return R.prop(1, /src=\"(.*?)\"/.exec(product.photo));
  }

  return R.ifElse(isVideo, getVideo, getPhoto)(product);
}



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
        <h1 className="title">{this.props.title}</h1>
        <div className="info">{this.props.info}</div>
      </div>
    )
  }
});

function retriveProducts() {
  return $.get('api/views/products_view?display_id=products');
}

var Products = React.createClass({
  getInitialState: function() {
    return {
      products: {}
    };
  },

  componentDidMount: function() {
    var self = this;

    retriveProducts().then(function(data) {
      self.setState({
        products: data
      });
    })
  },

  render: function () {
    var products = R.mapIndexed(function (data, idx) {
      var bg = getBackground(data);
      var isVideo = data._type === '视频作品';

      return (
        <li className="products__unit">
          <Product key={idx} isVideo={isVideo} bg={bg} title={data.title} info={data.info} />
        </li>
      )
    }, this.state.products);


    return (
      <ul className="products">
        {products}
      </ul>
    )
  }
});


module.exports = Products;

