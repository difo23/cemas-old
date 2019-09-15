import React, { Component } from 'react';
class Footer extends Component {
	// eslint-disable-next-line no-useless-constructor
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div >
				<footer id="sticky-footer" className="py-5 bg-dark text-white-50 ">
					<div className="container text-center">
						<small>Copyright &copy; digdataeirl.com</small>
					</div>
				</footer>
			</div>
		);
	}
}

export default Footer;
