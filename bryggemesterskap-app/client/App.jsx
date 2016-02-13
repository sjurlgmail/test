App = React.createClass({
  getInitialState: function(){
    return {element:'beers'};
  },
  childContextTypes: {
    element: React.PropTypes.string
  },
  getChildContext: function(){
    return {element: this.state.element}
  },

  mixins: [ReactMeteorData],

  getMeteorData(){
    return{
      beers: Beers.find({}).fetch()
    }
  },

 updateVisiblePane(element){
   console.log('updateVisiblePane ' + element);
   return <VisiblePane beers={this.getMeteorData().beers}/>
 },

 changeElement(element){
   this.setState({element: element})
 },


render(){
  return (
    <div id="everything">
      <div className="menu">
        <Menu changeVisiblePane={this.changeElement}/>
      </div>
      <div className="mainClass">
        <div className="panel-group" id="accordion">
          {this.updateVisiblePane('beer')}
        </div>
      </div>
    </div>
  )
}
});
