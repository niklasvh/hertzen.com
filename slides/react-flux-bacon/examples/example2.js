var TodoItem = React.createClass({
    getInitialState: () => ({hover: false}),
    onMouseOver: function() {this.setState({hover: true});},
    onMouseOut: function() {this.setState({hover: false});},
    render: function() {
        return <div
            onMouseOver={this.onMouseOver}
            onMouseOut={this.onMouseOut}
            onClick={this.props.onDelete.bind(null, this.props.id)}>
            <span className={this.state.hover ? "strikethrough " : ""}>{this.props.children}</span>
        </div>;
    }
});

var AddItem = React.createClass({
    getInitialState: () => ({value: ''}),
    _onChange: function(event) {this.setState({value: event.target.value})},
    _onKeyDown: function(event) {
        if (event.keyCode === 13) {
            this.props.onSave(this.state.value);
            this.setState({value: ''});
        }
    },
    render: function() {
        return <input type="text" onChange={this._onChange} onKeyDown={this._onKeyDown} value={this.state.value} />
    }
});

var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var TodoList = React.createClass({
    getInitialState: () => ({list: Immutable.List(["First item", "Second item", "Third item"])}),
    delete: function(index) {
        this.setState({list: this.state.list.delete(index)});
    },
    add: function(text) {
        this.setState({list: this.state.list.push(text)});
    },
    render: function() {
        var list = this.state.list.toJS().map((item, index) => {
            return <TodoItem key={item} id={index} onDelete={this.delete}>{item}</TodoItem>;
        });
        return (
            <div>
                <AddItem onSave={this.add} />
                <ReactCSSTransitionGroup transitionName="demo">
                    {list}
                </ReactCSSTransitionGroup>
            </div>
        );
    }
});


React.render(
    <TodoList items={data} />,
    document.getElementById('example2')
);
