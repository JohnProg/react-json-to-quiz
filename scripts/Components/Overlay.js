import React, {Component} from 'react';

class Overlay extends Component {
	render() {
		return <div className="md-overlay"
                    style={{ background: this.props.color }}></div>
	}
}

export default Overlay;