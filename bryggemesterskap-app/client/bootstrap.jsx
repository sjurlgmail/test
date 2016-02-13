Meteor.startup(function(){
  ReactDOM.render(<menu />, document.getElementById("menu"));
  ReactDOM.render(<App />, document.getElementById("render-target"));

});
