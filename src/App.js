import Content from "components/Content";
import Header from "components/Header";
import Footer from "components/Footer"
import { Icon } from 'Icons'


function App() {
  return (
    <div className="App bg-cwhite">
      <Header />
      <Content />
      <Footer />
      <div className="relative">
      <Icon name="circle" size={400}/>
      </div>
      
    </div>
  );
}

export default App;
