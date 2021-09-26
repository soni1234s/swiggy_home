import './App.css';
import Cards from './Features/cards/cards';
import Header from './Jumbo/header';
import Restaurents from './Restaurents/restaurents';
import Footer from './Footer/footer';

function App() {
  return (
    <div className="App">   
       <Header />
       <Cards />
       <Restaurents />
       <Footer />
    </div>
  );
}

export default App;
