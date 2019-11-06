import { unsplash } from '../api/unsplash';
import { Dispatch } from 'redux';
import { ActionTypes } from './types';

export interface ServerResponse {
  results: [];
  total: number;
  total_pages: number;
}

export interface FetchImagesAction {
  type: ActionTypes.fetchImages;
  payload: ServerResponse;
}

export const fetchImages = (term: string) => {
  return async (dispatch: Dispatch) => {
    const response = await unsplash.get<ServerResponse>('/search/photos', {
      params: { query: term }
    });

    dispatch<FetchImagesAction>({
      type: ActionTypes.fetchImages,
      payload: response.data
    });
  };
};
