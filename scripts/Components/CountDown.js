import React, {Component} from 'react';

class CountDown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: props.seconds
        }
    }
    componentDidMount() {
        this.updateCounter();
    }
    componentWillUnmount () {
        this.loadInterval && clearInterval(this.loadInterval);
        this.loadInterval = false;
    }
    updateCounter() {
        if (this.loadInterval) {
            clearInterval(this.loadInterval);
        }
        this.loadInterval = setInterval(function() {
            this.setState({seconds: this.state.seconds - 1});
            if(this.state.seconds < 0){
                this.props.action();
                clearInterval(this.loadInterval);
            }
        }.bind(this), 1000)
    }
    componentWillReceiveProps(nextProps) {
        this.setState({seconds: nextProps.seconds});
        this.updateCounter();
    }
	render() {
		return <h4 className="countdown"
                   style={{ display: this.props.display}}>{ this.state.seconds }</h4>
	}
}

CountDown.propTypes = {
	seconds : React.PropTypes.number.isRequired
}

export default CountDown;