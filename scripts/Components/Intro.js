import React, {Component} from 'react';
import Header from './Header'
import Body from './Body'

class Intro extends Component {
	render() {
		return (
            <div>
                <Header title={ this.props.title }/>
                <Body description={ this.props.description }
                      image={ this.props.image }
                      action={ this.props.switchView }/>
            </div>
        )
	}
}

Intro.propTypes = {
	title : React.PropTypes.string.isRequired,
	description : React.PropTypes.string.isRequired,
	switchView : React.PropTypes.func.isRequired
}

export default Intro;