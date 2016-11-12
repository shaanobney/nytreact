var React = require('react');
var Router = require('react-router')

var Main = React.createClass({
	render: function() {
        return (
            <div className="main-container">
                <div className="container">
										<div className="wrap">
								  		<a href="#" className="button">HOME</a>
								  		<a href="#/saved" className="button2">User Saved Articles</a>
										</div>
                    <div className="jumbotron">
                        <h2 className="text-center">
                            <strong>New York Times Database Dump</strong>
                        </h2>
                        <h3 className="text-center">Search the Article Database, Then Save or Read!</h3>
                    </div>
                    {this.props.children}
                    <footer>
                    </footer>
                </div>
            </div>
        )
    }
});

module.exports = Main;
