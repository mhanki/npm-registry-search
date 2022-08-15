import { ActionType } from '../action-types'
import { Action } from '../actions'

interface RepositoresState {
  loading: boolean;
  data: string[];
  error: string | null;
}

const reducer = (state: RepositoresState, action: Action): RepositoresState => {
  switch (action.type) {
    case ActionType.SEARCH_REPOSITORIES:
      return { loading: true, data: [], error: null };
    case ActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, data: action.payload, error: null };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

export default reducer;