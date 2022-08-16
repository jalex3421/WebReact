import './App.css';
import githubIcon from './images/githubIcon.png';
import { Routes, Route } from "react-router-dom";
//import of components 
import About  from './components/About.js';
import Home  from './components/Home.js';
import Contact from './components/Contact.js';
import Chatbot from './components/Chatbot.js';
import Translate from './components/Translate.js';
import Response from './components/Response.js';



function App() {
  return (
    <div className="App">
      <header>
        <div className='WordsIsAllYouNeedLogo'>
          <h1>WordsIsAllYouNeed</h1>
          <nav>
            <ul>
              <li><a href='/about'>About</a></li>
              <li><a href='/contact'>Contact</a></li>
              <li><a href='/'>Home</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className='WordsIsAllYouNeedBody'>
        <Routes>
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="translate" element={<Translate />} />
            <Route path="response" element={<Response />} />
            <Route path="/" element={<Home />} />
        </Routes>        
      </div>

      <div className='WordsIsAllYouNeedFooter'>
        <div className='logo'>
          <a href="https://github.com/jalex3421/WordsIsAllYouNeed">
            <img 
              src={githubIcon}
              alt='github icon'
              className='githubIcon' />
          </a>
        </div>
        <div className='FooterTextCopyRight'>WordsIsAllYouNeed ©   2022</div>
      </div>

    </div>
  );
}




export default App;
