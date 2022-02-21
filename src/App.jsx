import React from 'react';
import Greeting from './components/Greeting';
class App extends React.Component {
    render = () => {
        return <Greeting greet="SiD" />;
    }
};

export default App;