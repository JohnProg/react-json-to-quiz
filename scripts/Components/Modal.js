import React, {Component} from 'react';

class Modal extends Component {
	render() {
        var classIcon = "";
        switch (this.props.wasGood) {
            case 1: classIcon = "fa-times-circle"; break;
            case 2: classIcon = "fa-check-circle"; break;
            case 3: classIcon = "fa fa-clock-o"; break;
        }
        return (
            <div className="md-modal md-effect-18" id="modal">
                <div className="md-content center"
                     style={{ background: this.props.color }}>
                    <h1 className="no-margin-bottom">{ this.props.title }</h1>
                    <i className={ classIcon + " fa fa-10x" }></i>
                </div>
            </div>
        )
	}
}

Modal.propTypes = {
	title : React.PropTypes.string.isRequired,
	wasGood : React.PropTypes.number.isRequired
}

export default Modal;