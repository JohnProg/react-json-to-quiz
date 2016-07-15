import React, {Component} from 'react';
import Button from './Button'

class Body extends Component {
	render() {
        return (
            <div>
                <img src={ this.props.image }
                     alt=""/>
                <div className="quiz-description center">
                    { this.props.corrects >= 0 ? "Correctos: " + this.props.corrects : '' } <br/>
                    { this.props.inCorrects >= 0 ? "Incorrectos: " + this.props.inCorrects : '' }
                    <p>{ this.props.description }</p>
                    <Button action={ this.props.action } param="1" value="Comenzar!"/>
                </div>
            </div>
        )
	}
}

Body.propTypes = {
	description : React.PropTypes.string.isRequired
}

export default Body;