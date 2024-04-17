
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import {light} from './styles/Themes';


import Navigation from './components/Navigation';
import Home from './components/sections/Home';
import Video from './components/sections/Video';
import About from './components/sections/About';
import Roadmap from './components/sections/Roadmap';
import Showcase from './components/sections/Showcase';
import Team from './components/sections/Team';
import Faq from './components/sections/Faq';
import Footer from './components/Footer';
import Tokeninfo from './components/sections/Tokeninfo';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
    <GlobalStyles />
      <ThemeProvider theme={light}>
        <Navigation />
        <Home />
        <Video />
        <About />
        <Roadmap />
        <Tokeninfo />
        <Showcase />
        <Team />
        <Faq />
        <Footer />  
        <ScrollToTop />
      </ThemeProvider>
    </>
  );
}

export default App;
