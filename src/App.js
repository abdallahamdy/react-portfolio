import React, { useState } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [aboutSelected, setAboutSelected] = useState(true);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [contactSelected, setContactSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  return (
    <div>
      <Header></Header>
      <Navigation
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Navigation>
      <main>
        {aboutSelected && 
            <About></About>
        }
        {contactSelected &&
          <Contact></Contact>
        }
        {portfolioSelected &&
          <Portfolio></Portfolio>
        }
        {resumeSelected &&
          <Resume></Resume>
        }
      </main>
      <Footer></Footer>
    </div>
    
  );
}

export default App;
