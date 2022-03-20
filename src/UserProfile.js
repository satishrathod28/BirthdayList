import axios from 'axios'
import BirthdayList from './BirthdayList'
import { useRef, useState, useEffect } from 'react';
import Profile from './Profile'

const UserProfile = () =>{
const [data, setData] = useState(BirthdayList);
const [count,setCount] =useState();
const [isTrue, setIsTrue] = useState(false);
const [isAll, setIsAll] = useState(true);
console.log(count)
const ElementRef = useRef(null)
let newDate = new Date().toLocaleDateString();
let newMonth = new Date().getUTCMonth();
let monthName = ["jan","feb","mar","apr","may","jun","jul","aug","sept","oct","nov","dec"]
let monthIndex = monthName[newMonth];
let Elementcount = null;

useEffect(() => {
    Elementcount = ElementRef.current.childNodes.length
    setCount(Elementcount)
},[isTrue, isAll])

const birthDay = () =>{
    setIsTrue(false)
    setIsAll(false);
} 
const birthMonth = () =>{
    setIsTrue(true)
    setIsAll(false);
}
const all = () =>{
    setIsAll(true);
}
return(
        <>
         
    <div className="container py-5">
    <button className="btn btn-success mx-2" onClick={all}> ALL </button>
    <button className="btn btn-success mx-2" onClick={birthMonth}> This Month Birthday</button>
    <button className="btn btn-success mx-2" onClick={birthDay}>Todays Birthday</button>
    <a href="#" class="notification btn btn-success">
    <i class="fa fa-folder"></i> 
  <span class="badge">{count}</span>
</a>
 

    <h2 className="my-2">  {count} BIRTHDAY IN MARCH </h2>
       
<div ref={ElementRef}>
{data.map(({id, name, date, month})=>{
                if(isAll){
                    return <Profile id={id} name={name} date={date} month={month}/>
                }
              else if(isTrue){
                    if(month === monthIndex){
                        return <Profile id={id} name={name} date={date} month={month}/>
                    }
                }
                else if(isTrue === false){
                    if(date === newDate){
                       return <Profile id={id} name={name} date={date} month={month}/>
                    }
                   }
           })
           }
</div>
                <button className="btn btn-success mx-auto my-2"> { count > 0 ? `See All Data` : `No Data Available` }</button>
           </div>
   
        </>
                       

    )
    }
    export default UserProfile