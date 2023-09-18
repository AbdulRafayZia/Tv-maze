import { useSelector} from "react-redux";


export default function IncExp() {
    const State = useSelector(state=>state.Transaction);
    return(
        <>
        <div className="flex p-[30px] gap-x-20 mt-10 bg-gray-100 w-auto justify-center  items-center shadow  ">
            <div className="pr-12 border-solid border-r-4">
              <h4 className="font-semibold text-2xl ">Income</h4>
              <p className="mt-3 font-semibold text-xl text-green-400">{State.inc}$</p>
            </div>
          
            <div>
              <h4 className="font-semibold text-2xl">Expense</h4>
              <p className=" mt-3 font-semibold text-xl text-red-500">{State.exp}$</p>
            </div>
          </div>
          </>
    )
    
}