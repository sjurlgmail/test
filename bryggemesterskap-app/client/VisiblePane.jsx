VisiblePane = React.createClass({

  contextTypes: {
    element: React.PropTypes.string
  },

  propTypes: {
    beers: React.PropTypes.array
  },
  renderBeers(){
    return this.props.beers.map((beer) =>{
      console.log(beer);
      return <DisplayBeerDetails key={beer._id} beer={beer} />
    });
  },
  renderAbout(){
    return <About />
  },

  redraw(){
    if(this.context.element === 'beers'){
      return this.renderBeers();
    }else if(this.context.element === 'about'){
      return this.renderAbout();
    }
  },

 render(){
   return (
     <div>{this.redraw()}</div>
     );
 }
});
