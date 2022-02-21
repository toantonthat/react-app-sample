import React from 'react';
import '../css/greeting.style.css';
class Greeting extends React.Component {
    constructor(props) {
        super(props);

    }
    render = () => {
        return <h1>Hello { this.props.greet }</h1>;
    }
}
export default Greeting;