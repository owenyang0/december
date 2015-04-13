"use strict";

var data = [{"title":"\u76f8\u7231\u5341\u5e74","\u4fe1\u606f":"<p>2014.5.20 \u5bcc\u529b\u541b\u60a6\u9152\u5e97</p>\n<p>KEVIN &amp; TICOLE</p>\n","photo":null,"main_text":"<p>\u4e5f\u8bb8\u8fd9\u5341\u5e74\u91cc\uff0c\u4efb\u4f55\u4e00\u5929\uff0c\u4efb\u4f55\u4e00\u4e2a\u4eba\uff0c</p>\n<p>\u4efb\u4f55\u4e00\u4ef6\u4e8b\u7684\u7ec6\u5fae\u6539\u53d8\uff0c\u90fd\u4f1a\u8ba9\u8fd9\u4e2a\u6545\u4e8b\u6362\u4e00\u4e2a\u7ed3\u5c40\u3002</p>\n<p>\u6211\u4eec\u4ece\u6765\u4e0d\u7528\u5411\u4eba\u63cf\u8ff0\uff0c\u53ef\u4f60\u5c31\u662f\u8fd9\u4e48\u4e0d\u77e5\u4e0d\u89c9\uff0c</p>\n<p>\u81ea\u7136\u800c\u7136\u5730\u5b58\u5728\u4e8e\u6211\u7684\u751f\u6d3b\u91cc\uff0c</p>\n<p>\u82e5\u4e0d\u662f\u7ecf\u5e38\u63d0\u8d77\u4f3c\u4e4e\u65e9\u5df2\u5fd8\u8bb0\u2014\u2014\u6211\u4eec\u76f8\u7231\u5341\u5e74</p>\n","link":"","video":"&lt;embed src=&quot;http://player.youku.com/player.php/sid/XODEwODUyNjMy/v.swf&quot; allowFullScreen=&quot;true&quot; quality=&quot;high&quot; width=&quot;480&quot; height=&quot;400&quot; align=&quot;middle&quot; allowScriptAccess=&quot;always&quot; type=&quot;application/x-shockwave-flash&quot;&gt;&lt;/embed&gt;","_type":"\u89c6\u9891\u4f5c\u54c1"},{"title":"\u65e5\u5149\u68ee\u6797","\u4fe1\u606f":"<p>2014.9.20 \u6717\u8c6a\u9152\u5e97</p>\n","photo":"<p><img alt=\"\" src=\"http://602080.user-website8.com/sites/default/files/files/sunshine_1.png\" style=\"height:429px; width:1003px\" /></p>\n, <p><img alt=\"\" src=\"http://602080.user-website8.com/sites/default/files/files/sunshine_2.png\" style=\"height:986px; width:1596px\" /></p>\n, <p><img alt=\"\" src=\"http://602080.user-website8.com/sites/default/files/files/sunshine_3.png\" style=\"height:761px; width:1171px\" /></p>\n","main_text":"<p>\u201c\u4ece\u5c0f\u6211\u5c31\u6709\u4e00\u4e2a\u68a6\u60f3\uff0c</p>\n<p>\u548c\u4eb2\u7231\u7684\u4f60\u5728\u6811\u4e0a\u5efa\u4e00\u5ea7\u5c5e\u4e8e\u6211\u4eec\u7684\u623f\u5b50</p>\n<p>\u9633\u5149\u900f\u8fc7\u53f6\u7f1d\uff0c\u6620\u7167\u5728\u73bb\u7483\u4e0a\uff0c\u6726\u80e7\u7741\u5f00\u53cc\u773c\uff0c\u5c31\u89c1\u65e5\u5149\u68ee\u6797\u3002\u201d</p>\n","link":"","video":null,"_type":"\u7167\u7247\u4f5c\u54c1"}]



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
      bg =  <embed src={this.props.bg} allowFullScreen="true" quality="high" width="480" height="400" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>
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

var Products = React.createClass({
  render: function () {
    var products = R.mapIndexed(function (data, idx) {
      var bg = getBackground(data);
      var isVideo = data._type === '视频作品';

      return (
        <li className="products__unit">
          <Product key={idx} isVideo={isVideo} bg={bg} title={data.title} info={data.info} />
        </li>
      )
    }, this.props.data);


    return (
      <ul className="products">
        {products}
      </ul>
    )
  }
});

React.render(
  <Products data={data}/>,
  $('.standard__content').get(0)
);