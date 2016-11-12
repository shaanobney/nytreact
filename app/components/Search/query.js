var React = require('react');

// QUERY
var Query = React.createClass({
    // INITIAL STATES
    getInitialState: function() {
        return {search: "", start: "", end: ""}
    },
    handleChange: function(event) {
        var newState = {};
        newState[event.target.id] = event.target.value;
        this.setState(newState);
    },
    handleSubmit: function() {
        this.props.updateSearch(this.state.search, this.state.start, this.state.end);
        return false;
    },
    render: function() {
        return (
            <div className="main-container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h1 className="panel-title">
                                    Search Parameters
                                </h1>
                            </div>
                            <div className="panel-body">
                                <form>
                                    <div className="form-group">
                                        <h4 className="">
                                            <strong>Subject</strong>
                                        </h4>
                                        <input type="text" value={this.state.value} className="form-control " id="search" onChange={this.handleChange} required/>
                                        <h4 className="">
                                            <strong>Begin Year</strong>
                                        </h4>
                                        <input type="number" value={this.state.value} className="form-control " id="start" onChange={this.handleChange} required/>
                                        <h4 className="">
                                            <strong>End Year</strong>
                                        </h4>
                                        <input type="number" value={this.state.value} className="form-control " id="end" onChange={this.handleChange} required/>
                                    </div>
                                    <div className="pull-right">
                                        <button type="button" className="btn-danger" onClick={this.handleSubmit}>
                                            <span>SEARCH</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

});

module.exports = Query;
