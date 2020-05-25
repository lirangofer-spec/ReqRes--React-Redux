const initialState = {
  //siteName: 'Youtube React Redux'
}

const sitesReducer = (state = initialState,action) => {
  
  switch(action.type) {
    case "CHANGE_SITE_NAME":
      state = { ...state, siteName: action.payload}
      break;
    default:
      break;
  }
    
  return state;
}

export default sitesReducer;
