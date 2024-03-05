import Movies from "./components/Movies";
import { Component } from "react";
class App extends Component{
    render(){
      return(
        <div className='app'>
          <h1>Hello World</h1>
          <Movies />
          <h1>Enjoy Movies</h1>
          <Movies />
          <h1>New Movies</h1>
          <Movies />
        </div>
      )
    }
}
export default App