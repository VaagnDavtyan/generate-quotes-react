import { Component } from "react";
import Quotes from "./components/Quotes";
import "./styles.css";

class App extends Component {
   constructor() {
      super();
      this.state = {
         qoutesText: [],
         show: {
            text:
               "Genius is one percent inspiration and ninety-nine percent perspiration.",
            author: "Thomas Edison"
         },
         index: 1
      };
   }
   async componentDidMount() {
      const api_data = await fetch("https://type.fit/api/quotes");
      const data = await api_data.json();

      this.setState({ qoutesText: data });
   }
   clicked(index) {
      const newtext = this.state.qoutesText.reduce((accum, current, index) => {
         if (index === this.state.index) {
            accum = {
               text: current["text"],
               author: current["author"]
            };
         }
         return accum;
      }, {});

      this.setState({ show: newtext, index: (index += 1) });
   }
   render() {
      return (
         <div className="App">
            <Quotes
               data={this.state.show}
               onClick={() => this.clicked(this.state.index)}
            />
         </div>
      );
   }
}
export default App;