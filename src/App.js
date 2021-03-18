
import './App.css';
import {useState,useEffect} from "react";
import browserService from "./services/browser"
function App() {

  const [valueInput, setValueInput] = useState("");
  const [video,setVideo] = useState([]);
  const [searchTerm,setSearchTerm] = useState("");
  
  const changeHandler = (event) =>{
    setValueInput(event.target.value);
  };
  
  
  const submitHandler = (event) => {
    event.prevenDefault();
    setSearchTerm(valueInput);
  };


  useEffect(() => {
    browserService.getVideo(searchTerm).then(result =>setVideo (result.results));
    return({});
},[searchTerm]);

  return (
    <div className="App">
      <h1>Aca van los videos de la banda</h1>
      <form onSubmit={submitHandler}>
      <input type="search" onChange={changeHandler}  value={valueInput}></input>
      </form>
      <a
          className="App-link"
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
        Aca va el nombre de la banda
        </a>
        
      
        <p>por aca deberiamos poner imagenes</p>
    </div>
  );
}

export default App;
