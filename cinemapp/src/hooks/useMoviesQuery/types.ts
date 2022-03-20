export interface Movies {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface MoviesApiResponse {
  Search: Movies[];
  totalResults: string;
  Response: string;
}
