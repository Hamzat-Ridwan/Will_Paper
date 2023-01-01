import arrow from './a-curved.PNG'
import man from './man.PNG'
import './App.css';

function App() {
  return (
    <div className='app' >
      <h2>Jump in!</h2>
      <p className='subtext'>Here’s a few pointers on how to navigate this file.</p>
      <div className='item'>
        <div className='link'><a href=''><span>👋</span>Welcome</a></div>
        <p>You are here!</p>
      </div>
      <div className='item'>
        <div div className='link'><a href=''><span>🍉</span>UI Stickers</a></div>
        <p>You can find copies of components and pre-built elements here to use in your designs</p>
      </div>
      <div className='item'>
        <div className='link'><a href=''><span>🔒</span>Components</a></div>
        <p>These are your master components so edit wisely!</p>
      </div>
      <div className='item'>
        <div className='link last'><a href=''><span>🌈</span>Examples</a></div>
        <p>Get inspired with examples from folks on the greater Method team.</p>
      </div>

      <div className='arrow'>
        <img src={arrow} alt='arrow' />
        <p>Click to link to page</p>
      </div>
      <div className='man'>
        <img src={man} alt='man' />
      </div>
    </div>
  );
}

export default App;
