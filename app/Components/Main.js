var React = require('react');
var Router = require('react-router')

var Main = React.createClass({
	render: function() {
        return (
            <div className="main-container">
                <div className="container">
                    {/* <nav className="navbar navbar-default" role="navigation">
                        <div className="container-fluid">
                            <div className="navbar-header">
                                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                                    <span className="sr-only">NAV</span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                    <span className="icon-bar"></span>
                                </button>
                                <a className="navbar-brand" href="#">NYT Article Dump</a>
                            </div>

                            <div className="collapse navbar-collapse navbar-ex1-collapse">
                                <ul className="nav navbar-nav navbar-right">
                                    <li>
                                        <a href="#/saved">User Saved Articles</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav> */}
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
