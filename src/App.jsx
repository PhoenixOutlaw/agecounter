
import { useState } from 'react';
import { useForm } from "react-hook-form";
import CountUp from 'react-countup';
import './App.css';

function App() {
  const [age, setage] = useState(false);
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data =>{
    setage(0);
    const reg = /-/;
    var date= new Date();
    var birthdate= data.age.split(reg);
    var currentdate=[date.getFullYear(), parseInt(date.getMonth()+1),date.getDate()];
  // console.log(currentdate);
  // console.log(data);
    var age=currentdate[0]-parseInt(birthdate[0]);
    if (age>0) {
      if(parseInt(birthdate[1])>currentdate[1]){age--;}

      else if(parseInt(birthdate[1])===currentdate[1]){
        if(parseInt(birthdate[2])>currentdate[2]){age--;}
        else if(parseInt(birthdate[2])>currentdate[2])
        setage("you are not borned yet!!");
      }
      
      setage(age);  
    }
    else if(age===0){
      if(parseInt(birthdate[1])>currentdate[1]){
        setage("you are not borned yet!!");
      }

      else if(parseInt(birthdate[1])===currentdate[1]){
        if(parseInt(birthdate[2])>currentdate[2])
          setage("you are not borned yet!!");
      }
      else
      setage(0)
    }

    else
    setage("you are not borned yet!!");
    
  }
  console.log((age));
  return (
    <div className="App f-c">
      <h1>Whats your age ?<br /><span style={{fontSize:"0.5em"}}>Enter your Birth-date</span></h1>
      <form onSubmit={handleSubmit(onSubmit)} className="form f-c">
      <input type="date" lable="birthdate" {...register("age", { required: true })}/>
      {errors.age && <span id="error">This field is required</span>}
      <button type="submit" >submit</button>
      </form>
      {(typeof age ==='string')?<p className="count">{age}</p>:<CountUp className="count" end={age} duration={0.1}/>}
    </div>
  );
}

export default App;
