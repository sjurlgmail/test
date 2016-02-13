App = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return{
      beers: Beers.find({}).fetch()
    }
  },

renderBeers(){
  return this.data.beers.map((beer) =>{
    return <DisplayBeerDetails key={beer._id} beer={beer} />
  });
},

render(){
  return (
    <div className="mainClass">
      <div className="panel-group" id="accordion">
        {this.renderBeers()}
      </div>
    </div>
  )
}
});
