import Loading from '../assets/loading.gif';
import NotFound from '../assets/notFound.gif';
import Search from '../assets/search.gif';

export const BASE_URL = 'http://www.omdbapi.com';
export const API_KEY = '925eba28';

export const GIFS = {
  loading: {
    id: 1,
    title: 'Loading',
    gif: Loading,
  },
  notFound: {
    id: 2,
    title: 'Nothing was found buddy',
    gif: NotFound,
  },
  search: {
    id: 3,
    title: 'How about looking for a movie?',
    gif: Search,
  },
  notFoundList: {
    id: 4,
    title: 'Your List is empty, how about adding a movie?',
    gif: NotFound,
  },
};
