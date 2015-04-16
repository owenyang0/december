"use strict";

var R = require('ramda');
var React = require('react');

var Product = require('../product');

var chunk = R.curry(function group(n, list) {
  return R.isEmpty(list) ? [] : R.prepend(R.take(n, list), group(n, R.drop(n, list)));
});

var utils = {
  productsUnit: R.compose(
    genProductsUnit,
    chunk(3),
    R.take(6)
  )
};

module.exports = utils;


function isVideo(product) {
  return product._type === '视频作品';
}


function genProductsUnit(val) {
  return R.mapIndexed(genProducts, val);
}

function genProducts(val, idx) {
  var currentVal = val.shift();

  var bg = getBackground(currentVal);

  var rowOne = (
    <div className="products__unit--row-one">
      <Product key={idx} isVideo={isVideo(currentVal)} bg={bg} title={currentVal.title} info={currentVal._info} />
    </div>
  );

  return genHtml(rowOne, genRowTwo(val));

  function genRowTwo(val) {
    if (R.isEmpty(val)) {
      return;
    }


    var rows = R.mapIndexed(function(val, idx) {
      bg = getBackground(val);

      return (
        <Product key={idx} isVideo={isVideo(val)} bg={bg} title={val.title} info={val._info} />
      );
    }, val);

    return (
      <div className="products__unit--row-two">
        {rows}
      </div>
    );
  }

  function genHtml(rowOne, rowTwo) {
    return (
      <li className="products__unit">
        {rowOne}
        {rowTwo}
      </li>
    );
  }
}

function getBackground(product) {
  function getVideo() {
    return R.prop(1, /src=&quot;(.*?)&quot;/.exec(product.video));
  }

  function getPhoto() {
    return R.prop(1, /src=\"(.*?)\"/.exec(product.photo));
  }

  return R.ifElse(isVideo, getVideo, getPhoto)(product);
}