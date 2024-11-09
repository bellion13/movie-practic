import 'swiper/swiper-bundle.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import ScrollToTopButton from './component/ScrollToTopButton/ScrollToTopButton';

import Routes from './config/Routes';

function App() {
  return (
    <BrowserRouter>

      <Route render={props => {
        return (
          <div className="App">
            <>
              <Header {...props} />
              <Routes />
              <Footer />
              <ScrollToTopButton /> 
            </>
          </div>
        )
      }} />
    </BrowserRouter>
  );
}

export default App;
