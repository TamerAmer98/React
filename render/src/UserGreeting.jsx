import PropTypes from'prop-types'

function UserGreeting(props){

const welcomeMessage = <h2 className="welcome">Welcome {props.username}</h2>
const loginMessage = <h2 className="login">Plase log in to continue</h2>

return(props.isLoggedIn ? welcomeMessage : loginMessage);

}
UserGreeting.prototype = {

    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,

}

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}

export default UserGreeting