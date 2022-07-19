import './App.css';
import githubIcon from './images/githubIcon.png'

function App() {
  return (
    <div className="App">
      <div className='WordsIsAllYouNeedLogo'>
        <h1>WordsIsAllYouNeed</h1>
      </div>

      <div className='WordsIsAllYouNeedBody'>
        <div class="sections">
          <div>1</div>
          <div>2</div>
          <div>3</div>  
        </div>

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
