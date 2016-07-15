import React, {Component} from 'react';
import Header from './Header'
import Body from './Body'

class Finish extends Component {
	render() {
    const average = Math.round(100 * this.props.corrects / (this.props.corrects + this.props.inCorrects));
		return (
            <div>
                <Header title={ this.props.title }/>
                <Body description={"Tu puntaje es " + average + "%"}
                      corrects={ this.props.corrects}
                      inCorrects={ this.props.inCorrects}
                      image={ this.props.image }
                      action={ this.props.switchView }/>
            </div>
        )
	}
}

export default Finish;