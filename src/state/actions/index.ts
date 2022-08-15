import { ActionType } from '../action-types'

interface SearchRepositoresAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoresSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoresErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type Action = SearchRepositoresAction
  | SearchRepositoresSuccessAction
  | SearchRepositoresErrorAction