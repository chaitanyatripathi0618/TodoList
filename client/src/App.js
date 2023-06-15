import { useState, useEffect } from 'react';
import './App.css';
import Axios from 'axios';
import im1 from './mountain.jpg';

function App() {
  const [food, setFood] = useState('');
  const [date, setDate] = useState(0);
  const [foodList, setFoodList] = useState([]);
  const [newFood, setNewFood] = useState('');

  useEffect(() => {
    Axios.get('http://localhost:3001/read').then((response) => {
      console.log(response.data);
      setFoodList(response.data);
    });
  }, []);

  const addItem = () => {
    Axios.post('http://localhost:3001/addItem', {
      food,
      date,
    }).then(() => {
      console.log('success');
    });
  };

  
  const deleteval =(id)=>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }

  return (
    <div className="App">
      <div className="im1">
        <img src={im1} alt="mountain" />
      </div>
      <h1 id="todo">Todo</h1>
      <div className='form'>
      <input type="text" placeholder="New Task" id="name"onChange={(e) => {
        setFood(e.target.value);
      }} />
      {/* <input type="number" placeholder="Date Since Ate" onChange={(e) => {
        setDate(e.target.value);
      }} /> */}
      <button onClick={addItem} id="add">Add Task</button>

      </div>
      
      
      
      {
        foodList.map((val, key) => {
          return (
            <div key={key} className='task'>
             
              <h1 id="taskhead">{val.foodName}</h1>
              {/* <h1>{val.dateSinceAte}</h1> */}
              
              <button onClick={() => deleteval(val._id)} id="delete">Delete</button>
             
              
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
