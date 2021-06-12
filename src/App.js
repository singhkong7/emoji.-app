import React from "react";
import Card from "./card";
import emojis from "./emojis";
import './App.css';

class App extends React.Component{
  constructor(props)
  {
      super(props)
      this.state={
          collections:emojis
      };
  }
  render()
  {
     const {collections}=this.state;
     return(<div className="show">
                  <h1 className="heading">Emojipedia</h1>
                  <div className="section">
                  {
                      collections.map(({id, ...otherCollectionsProps})=> (
                          <Card key={id} {...otherCollectionsProps} />
                      ))
                  }
                  </div>
         </div>
     );
  }
}
export default App;
