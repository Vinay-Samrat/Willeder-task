import './App.css';
import Navbar from './components/Navbar';
import CarouselComponent from './corousel/Corousel';
import EndComponent from './end-component/EndComponent';
import Footer from './footer/footer';
import MiddleComponent from './middle-component/MiddleComponent';
import MyView from './trainglecomponent/traianglecomponent';
import TriangleComponent from './trainglecomponent/traianglecomponent';

function App() {
  return (
    <div className="App">
     <Navbar/>
     <CarouselComponent/>
     <MiddleComponent/>
     <EndComponent/>
     <MyView/>
     <Footer/>
    </div>
  );
}

export default App;
