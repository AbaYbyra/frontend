const initialState = {
  profile: "notLogged"
}

export const profileReducer = (state= initialState, action) => {

  switch(action.type){
    case "SET_PROFILE":
      return{
        profile: action.profile
      };
    default:
      return state;  
  }
}