import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<header className="main-header">
                <h1>{ this.props.title }</h1>
            </header>
		)
	}
}

Header.propTypes = {
	title : React.PropTypes.string.isRequired
}

export default Header;