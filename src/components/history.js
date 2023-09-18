import { useSelector } from "react-redux";
import { delTrans ,clearHistory} from "../app/slice";
import { useDispatch } from "react-redux";
import { AiOutlineClose } from "react-icons/ai";

export default function History() {
  const State = useSelector((state) => state.Transaction);
  console.log(State);
  const dispatch = useDispatch();
  console.log(State.redmark);

  return (
    <>
     <div className="flex gap-40">
      <h3 className=" font-semibold text-2xl mt-10 mb-4 ">History</h3>
      <button className="mb-4 w-[100%] mt-6   bg-red-400 hover:bg-red-500 text-white font-bold py-2 px-4 rounded" 
      onClick={()=>dispatch(clearHistory())}>clear History</button>
      </div>
      <hr />
      <div className="    mt-4 content-center">
        <ul className="w-[100%]">
          {State.transactions.map((transaction) => {
            return (
              <li
                key={transaction.id}
                className="flex w-auto mb-2 group relative"
              >
                {/* Hidden delete button */}
                <button
                  onClick={() => dispatch(delTrans(transaction.id))}
                  className="bg-red-500 transition-opacity opacity-0 group-hover:opacity-100"
                >
                  <AiOutlineClose />
                </button>
                <div
                  key={transaction.id}

                  className={
                     "flex justify-between    w-[100%] p-2  rounded-sm  border-solid border-r-8 border-green-400 bg-gray-100 shadow group-hover:bg-gray-200 transition duration-300"
                  }
                >
                  <p className="">{transaction.text}</p>
                  <p className="">${transaction.amount}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
