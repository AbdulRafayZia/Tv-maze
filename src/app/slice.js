



const url="https://api.tvmaze.com/shows";

const initialState = {
  isLoading:false,
  data: [],
  error: false,
  cast:[],
};

export const fetchData = createAsyncThunk('api/fetchData',  () => {
  return fetch(url).then(resp=>resp.json()).catch((err)=>console.log(err))
});

const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers:  {
   [fetchData.pending]:(state)=>{
    state.isLoading=true;

   },
   [fetchData.fulfilled]:(state,action)=>{
    console.log(action);
    state.isLoading=false;
    var newArray = []
    action.payload.forEach((element, index) => {
      element._id = index
      newArray = [...newArray, element]
    });
    console.log(newArray);
    state.data=action.payload
  
   },
   [fetchData.rejected]:(state,action)=>{
   
    state.isLoading=false;
   state.error=true
   },
      },
});

export default apiSlice.reducer;
