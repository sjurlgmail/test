DisplayBeerDetails = React.createClass({
    propTypes: {
      beer: React.PropTypes.object.isRequired
    },

    vote(){
      Beers.update(this.props.beer._id,{
        $set: {votes: this.props.beer.votes +1}
      });
    },

    render(){

      const panelName = this.props.beer._id;

      return (
        <div className="panel panel-default">
          <div className="panel-heading">
            <h4 className="panel-title" data-toggle="collapse" data-target={'#' + panelName}>
              {this.props.beer.beername}
            </h4>
          </div>
          <div id={panelName} className="panel-collapse collapse">
            <div className="panel-body">
              <ul className="list-group">
                <li className="list-group-item"><div className="input-group"><span className="input-group-addon">Brewer</span><input type="text" className="form-control" disabled value={this.props.beer.brewer}/> </div></li>
                <li className="list-group-item">
                  <div className="input-group">
                    <span className="input-group-addon">
                      Description
                    </span>
<input type="text" className="form-control" disabled value={this.props.beer.description}/> </div>
                  </li>
                <li className="list-group-item"><span className="title">Votes</span><span className="badge">{this.props.beer.votes}</span></li>
              <button className="btn" onClick={this.vote}>Vote for this beer</button>
              </ul>
            </div>
          </div>
        </div>
      )
    }
});
