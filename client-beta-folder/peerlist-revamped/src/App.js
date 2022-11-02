import './App.css';
import Navbar from './components/Navbar';
import Generator from './components/Generator';
import { useState } from 'react';

function App() {
  const [stars, setStars] = useState(0);
  const [forks, setForks] = useState(0);

  var xhr = new XMLHttpRequest();
  xhr.withCredentials = false;
  
  xhr.addEventListener("readystatechange", function() {
    if(this.readyState === 4) {
      setStars(JSON.parse(this.responseText).watchers_count);
      setForks(JSON.parse(this.responseText).forks_count);
    }
  });
  
  xhr.open("GET", "https://api.github.com/repos/vinitshahdeo/peerlist-readme-badge");
  
  xhr.send();
  return (
    <div className='peerlist'>
      <Navbar star={stars} fork={forks} />
      <Generator />
    </div>
  );
}

export default App;
