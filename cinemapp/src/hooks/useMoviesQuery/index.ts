import {useQuery, QueryFunctionContext} from 'react-query';
import {API_KEY} from '../../constants';
import api from '../../services/api';
import {MoviesApiResponse} from './types';

export async function fetchMoviesByName(ctx: QueryFunctionContext<string[]>) {
  const [id] = ctx.queryKey;

  const {data} = await api.get<MoviesApiResponse>(
    `/?apikey=${API_KEY}&s=${id}`,
  );

  return data;
}
export const useMoviesQueryByName = (id: string) =>
  useQuery([id], fetchMoviesByName, {
    staleTime: 60000 * 60 * 12,
  });
