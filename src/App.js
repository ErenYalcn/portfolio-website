import Content from "components/Content";
import Header from "components/Header";
import Footer from "components/Footer"
import { Icon } from 'Icons'
import { BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App bg-cwhite overflow-hidden relative">
    <Router>
      <Switch>
        <Header />
      </Switch>
        <Content />
        <Footer />
        <div className="relative">
        <Icon name="dot" size={180}/>
        <Icon name="circletwo" size={300}/>
        </div>
    </Router>
  </div>
  );
}

export default App;
