

function Username(props) {
    return <h1>{props.name}</h1>;
}

function UserCity(props) {
    return <p>City: {props.city}</p>;
}

function UserDetails(props) {
    return <div>
            <Username name={props.user.name} />
            <UserCity city={props.user.city} />
        </div>;
}

var user = {
    name: "John Doe",
    city: "Dallas, TX"
};

ReactDOM.render(
    <UserDetails user={user} />,
    document.getElementById("user-details")
);