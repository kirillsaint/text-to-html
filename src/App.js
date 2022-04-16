import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: '<h1>Hello, world!</h1>'};

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        document.getElementById('result').innerHTML = event.target.value
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className={'container col-xl-10 col-xxl-8 px-4 py-5 row align-items-center g-lg-5 py-5'}>
                <div className={'col-lg-6 text-center text-lg-start'}>
                    <textarea className={'form-control'} value={this.state.value} onChange={this.handleChange}></textarea>
                </div>
                <div className={'col-lg-6'} id={'result'}>
                    <h1>Hello, world!</h1>
                </div>
            </div>
        )
    }
}

export default App;