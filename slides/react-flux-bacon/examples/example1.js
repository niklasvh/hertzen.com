var TodoItem = React.createClass({
    render: function() {
        return <div className={this.props.complete === true ? "complete" : "incomplete"}>
            {this.props.children}
        </div>;
    }
});

var TodoList = React.createClass({
    render: function() {
        var list = this.props.items.map((item, index) => <TodoItem key={index} complete={item.complete}>{item.text}</TodoItem>);
        return <div><strong>Item count: {list.length}</strong> {list}</div>;
    }
});

var data = [
    {text: "First item", complete: false},
    {text: "Second item", complete: true},
    {text: "Third <script>window.alert('xss');</script> item", complete: false}
];

React.render(
    <TodoList items={data} />,
    document.getElementById('example1')
);
