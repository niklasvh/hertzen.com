var React = require('react');
var Bacon = require('baconjs');

/*var push = Bacon.Bus.prototype.push;

var ExampleComponent = React.createClass({
    statics: {
        openThread: new Bacon.Bus(),
        deleteItem: new Bacon.Bus()
    },
    render: function() {
        return (
            <div>
                <h2>Example</h2>
                <button onClick={push.bind(ExampleComponent.openThread, this.props.id)}>Open thread</button>
                <button onClick={push.bind(ExampleComponent.deleteItem, this.props.id)}>Delete item</button>
            </div>
        );
    }
}); */

module.exports = ExampleComponent;



// ./actions/Thread.js
module.exports = function() {
    return {
        openThread: new Bacon.Bus(),
        deleteItem: new Bacon.Bus()
    };
};

// ./components/ExampleComponent.js
var push = Bacon.Bus.prototype.push;
var ThreadActions = require('./actions/Thread');

var ExampleComponent = React.createClass({
    render: function() {
        return (
            <div>
                <h2>Example</h2>
                <button onClick={push.bind(ThreadActions.openThread, this.props.id)}>Open thread</button>
                <button onClick={push.bind(ThreadActions.deleteItem, this.props.id)}>Delete item</button>
            </div>
        );
    }
});
