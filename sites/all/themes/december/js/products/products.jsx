

var ExampleApplication = React.createClass({
    render: function() {
        var message =
            'React rendered!';

        return <h1>{message}</h1>;
    }
});

React.render(
<ExampleApplication/>,
    $('.react-section').get(0)
);