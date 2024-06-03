import './App.css';
import Hello from './Hello';
import UseState from './UseState';
import ParentComponent from './props/ParentComponent';

function App() {

  const Handleclick = (a) =>{
    alert(a)
  }

  const clickhere = () => {
    alert("hello")
  }
  return (
    <div className="App">
        <Hello name="hello" />
        <button onClick={() => Handleclick("good morning")}>click here</button>
        <button onClick={clickhere} >click</button><br></br>
        <div className=''>
        <UseState />
        <ParentComponent />
        </div>
    </div>
  );
}

export default App;
