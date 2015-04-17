var $ = require('jquery');
var React = require('react');
var R = require('ramda');



var Products = require('./products');
var ReactPaginate = require('react-paginate');

var req = require('./libs/request');
var utils = require('./libs/utils');




var App = React.createClass({

  handlePageClick: function(data) {
    var selected = data.selected;
    var currentData = this.getSelectedData(selected, this.state.data);

    this.setState({
      currentData: currentData
    });

    console.log('data', data);
    console.log('current', currentData);
  },
  getSelectedData: function (pageIdx, data) {
    return R.prop(pageIdx, utils.chunk(this.props.perPage)(data))
  },
  getInitialState: function() {
    return {
      data: [],
      currentData: [],
      offset: 0
    };
  },

  componentDidMount: function() {
    var self = this;

    req.retrieveProducts().then(function(data) {
      var totalCount = data.length;
      var currentData = self.getSelectedData(0, data);

      self.setState({
        data: data,
        currentData: currentData,
        pageNum: Math.ceil(totalCount / 3)
      });
    })
  },

  render: function () {
    return (
      <div className="commentBox">
        <Products data={this.state.currentData} />
        <ReactPaginate previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={<li className="break"><a href="">...</a></li>}
          pageNum={this.state.pageNum}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          clickCallback={this.handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClass={"active"} />
      </div>
    );
  }
});



$(function() {
  React.render(
    <App perPage={3} />,
    document.querySelector('.product__detail')
  );
});