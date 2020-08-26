import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./type";
import stream from "../apis/stream";
import history from "../history";

export const signIn = (uId) => {
  return {
    type: SIGN_IN,
    payload: uId,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValue) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await stream.post("/streams", { ...formValue, userId });
  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const createStream = () = async(dispatch,getState)=>{
    const responcxe = await stream.post('/stream',{params:{q:'',form:''}});
    dispatch({{
            tye:CREATE_STREAM,
              payload:response.data
             }})
    
}


export const createStream = () = async(dispatch,getState)=>{
    const responcxe = await stream.post('/stream',{params:{q:'',form:''}});
    dispatch({{
            tye:CREATE_STREAM,
              payload:response.data
             }})
    
    
()=>{
        return createStream
    }    
}



export const fetchStreams = () => async (dispatch) => {
  const response = await stream.get("./streams");
  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await stream.get(`/streams/${id}`);

  dispatch({
      
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await stream.patch(`/streams/${id}`, formValues);
  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push("/");
};

export const deleteStream = (id) => async (dispatch) => {
  await stream.delete(`/streams/${id}`);
  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  history.push("/");
};
