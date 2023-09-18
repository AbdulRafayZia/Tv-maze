
import styles from "./content.module.css"
import {BsFillStarFill} from "react-icons/bs"
import {  useNavigate,  useSearchParams} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchCast } from '../../app/slice';
import {  useEffect, useState } from "react";
import Footer from "../footer/footer";
// import queryString from 'query-string'; 


export default function Content() {
    var [page, setPage]=useSearchParams()
    const navigate=useNavigate()
   
    const [currentPage, setCurrentPage]=useState(parseInt(page.get("page")));
    const [movies, setMovies] = useState([])
    const [numbers, setNumber] = useState([])
    const data=useSelector(state=>state.ApiSlice.data)
    const moviePerPage=20;
    const npage=Math.ceil(data.length /moviePerPage)

    useEffect(()=>{
     if(page.get("page")===null || page.get("page")===""){
        navigate('/?page=1')
    }
    else{
        const currentPage = page.get("page")
        const lastindex=currentPage*moviePerPage;
        const firstindex=lastindex-moviePerPage;
        const npage=Math.ceil(data.length /moviePerPage)
        setNumber([...Array(npage +1).keys()].slice(1))
        setMovies(data.slice(firstindex,lastindex))
    }
    },[page])
   
//   pagenation logic
   
    const prevPage=()=>{
   if(currentPage!==1){
    setCurrentPage(currentPage-1)
    setPage({page:currentPage-1})
   }
    }
    const changePage=(id)=>{
       setCurrentPage(id)
      setPage({page:id})
       
    }
    const nextPage=()=>{
     if(currentPage!==npage){
        setCurrentPage(currentPage+1)
        setPage({page:currentPage+1})
     }
    }
   
   
    const onAbout=(id)=>{
        const ID=++id
        navigate("/"+ID, {state: parseInt(page.get("page"))})

    }

    const maxLength=100;
    

    return(
        <>
        <div className={styles.container}>
    <h1 className={styles.head}>Last Added Shows</h1>
    <div className={styles.images}>
        {movies.map((item,index)=>{
            console.log(item);
            return(
                <div key={index} className={styles.imgContainer}>
   <img src={item.image.medium} alt="" onClick={()=>onAbout(item._id)}   className={styles.img}/>
   {item.rating.average>8.0? <div className={styles.info}>
        <p> <BsFillStarFill/></p>
        <p> <BsFillStarFill/></p>
        <p> <BsFillStarFill/></p>
        <p> <BsFillStarFill/></p>
       
    </div>:  <div className={styles.info}>
        <p> <BsFillStarFill/></p>
        <p> <BsFillStarFill/></p>
        <p> <BsFillStarFill/></p>
       
       
    </div>}
   
    <div className={styles.desc}>
        <h3 >{item.name}</h3>
        {item.summary.length>maxLength?<p dangerouslySetInnerHTML={{ __html: item.summary.substring(0, maxLength)+"..." }}></p>:<p dangerouslySetInnerHTML={{ __html: item.summary }}></p>}

    </div>
    </div>
            )
        })}
       
    
   
    





    </div>
    </div>

    <Footer currentPage={currentPage} numbers={numbers} prevPage={prevPage} nextPage={nextPage} changePage={changePage}/>
        </>

   
   )
    
}