import React, {Component} from 'react';

class Button extends Component {
	render() {
		return (
            <button className="btn btn-2 btn-2b md-trigger md-setperspective"
                    data-modal="modal-18"
                    onClick={this.props.action.bind(this, this.props.param)}>{ this.props.value }</button>
        )
	}
}

Button.propTypes = {
	value : React.PropTypes.string.isRequired
}

export default Button;