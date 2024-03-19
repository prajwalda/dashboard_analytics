
const initialState = {
    insightSummary: {},
    categoryDistribution: {},
    responseTimes: {},
    userSatisfaction: {},
    usageStatistics: {}
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_DATA':
        return {
          ...state,
          ...action.payload
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;