class Username extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>;
    }
}

class UserCity extends React.Component {
    render() {
        return <p>City: {this.props.city}</p>;
    }
}

class UserDetails extends React.Component {
    render() {
        return <div>
            <Username name={this.props.user.name} />
            <UserCity city={this.props.user.city} />
        </div>;
    }
}





var user = {
    name: "John Doe",
    city: "Dallas, TX"
};

ReactDOM.render(
    <UserDetails user={user} />,
    document.getElementById("user-details")
);