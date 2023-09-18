import styles from "./index.module.css";

import { GrLinkPrevious } from "react-icons/gr";
import { BsFillStarFill } from "react-icons/bs";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

import { useEffect, useState } from "react";

export default function About() 
{
  const {state }= useLocation()


  let {id}=useParams()

  console.log("id" +id);
  const data=useSelector(state=>state.ApiSlice.data)

  const Cast=useSelector(state=>state.ApiSlice.cast)
    const [movieData, setMovieData]=useState(data.slice(id-1,id))

  const[cast, setCast]=useState([])
  
   
    const navigate= useNavigate()
    const OnHome=()=>{
       navigate("/?page="+state)
    }

   const fetchID=(id)
  
  console.log("fetchid" +fetchID);
    

    const CastUrl="https://api.tvmaze.com/shows/"+ fetchID +"/cast"
   

  
    const fetchCast= async()=>{
      const resonse =await fetch(CastUrl);
      const data=await resonse.json()
      var newArray=[]
      data.forEach((element ,index) => {
        element._id=index
        newArray=[...newArray,element]
      });
      // console.log(newArray);
      setCast(data)
    }
    // console.log(cast);
    

useEffect(()=>{
   fetchCast()
},[])



  return (
    <>
      <main>
       
       {movieData.map((item,index)=>
       {
       
       
        return (
          <>
           <header className={styles.header}>
          <div className={styles.headerInfo}>
            <button className={styles.prevbtn} onClick={()=>OnHome()}>
              <GrLinkPrevious />
            </button>
            <p className={styles.title}>TV Bland</p>
          </div>
          <div key={index} className={styles.headerContainer}>
          <img src={item.image.medium} alt="" />
          <div className={styles.headerdesc}>
            <div className={styles.star}>
              <p>
                {" "}
                <BsFillStarFill />
              </p>
              <p>
                {" "}
                <BsFillStarFill />
              </p>
              <p>
                {" "}
                <BsFillStarFill />
              </p>
              <p>
                {" "}
                <BsFillStarFill />
              </p>
              <p>
                {" "}
                <BsFillStarFill />
              </p>
              < p className={styles.ratio}>{item.rating.average}/10</p>
            </div>
            <p className={styles.descTitle}>{item.name}</p>
            <p className={styles.desc} dangerouslySetInnerHTML={{ __html: item.summary }}>

            </p>
          </div>
        </div>
        </header>
        <div className={styles.infoContainer}>

            <div className={styles.ShowInfo}>
                <h2>Show Info</h2>
             <div className={styles.info} >
                <h5>Streamed on</h5>
                <p>Comedy Central</p>
             </div>
             <div className={styles.info} >
                <h5>Schedule</h5>
                <p>{item.schedule.days} {item.schedule.time}</p>
             </div>
             <div className={styles.info} >
                <h5>Status</h5>
                <p>{item.status}</p>
             </div>
             <div className={styles.info} >
                <h5>Genres</h5>
                {/* {item.genres.map((items,index)=>{
                   return <p>{items}</p>
                })} */}
                <p>{item.genres.join("-")}</p>
             </div>
             
          
          

          
            </div>
            <div  className={styles.CastInfo}>
            <h2>starring</h2>
            {cast.map((item,index)=>{

              return(
              <>
               
              <div  key={index}  className={styles.cast} >
                  <img src={item.person.image.medium} alt="" />
                 <h5>{item.person.name}</h5>
                 <p>{item.character.name}</p>
              </div>
            </>
              )
            })}
            </div>
        </div>
        </>
        )
       })}
          
        
        {/* <div className={styles.infoContainer}>

            <div className={styles.ShowInfo}>
                <h2>Show Info</h2>
             <div className={styles.info} >
                <h5>Streamed on</h5>
                <p>Comedy Central</p>
             </div>
             <div className={styles.info} >
                <h5>Streamed on</h5>
                <p>Comedy Central</p>
             </div>
             <div className={styles.info} >
                <h5>Streamed on</h5>
                <p>Comedy Central</p>
             </div>
             <div className={styles.info} >
                <h5>Streamed on</h5>
                <p>Comedy Central</p>
             </div>
          
          

          
       
            </div>
            <div className={styles.CastInfo}>
                <h2>starring</h2>
             <div   className={styles.cast} >
                 <img src={person} alt="" />
                <h5>Hamza khan</h5>
                <p>Developer</p>
             </div>
             <div   className={styles.cast} >
                 <img src={person} alt="" />
                <h5>Hamza khan</h5>
                <p>Developer</p>
             </div>
             <div   className={styles.cast} >
                 <img src={person} alt="" />
                <h5>Hamza khan</h5>
                <p>Developer</p>
             </div>
             <div   className={styles.cast} >
                 <img src={person} alt="" />
                <h5>Hamza khan</h5>
                <p>Developer</p>
             </div>
             
       
            </div>
        </div> */}
      </main>
    </>
  );
}
