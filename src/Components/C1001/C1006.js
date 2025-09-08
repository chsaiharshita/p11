const initialState = {
  institutes: [],
  total: 0,
  loading: false,
  error: null,
};

export const instituteReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INSTITUTES_SUCCESS":
      return {
        ...state,
        loading: false,
        institutes: action.payload.institutes,
        total: action.payload.total,
        error: null,
      };
    case "FETCH_INSTITUTES_FAIL":
      return { ...state, loading: false, error: action.payload };
    case "FETCH_INSTITUTES_REQUEST":
      return { ...state, loading: true };
    default:
      return state;
  }
};