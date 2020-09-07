import { Movie } from './movie';
import { PaginationResponse } from 'src/app/shared/models/pagination-response';

export interface MovieResponse extends PaginationResponse {
    results: Movie[];
}