import {PagedFilterAndSortedRequest} from '../../dto/pagedFilterAndSortedRequest';

export interface PagedSampleResultRequestDto
  extends PagedFilterAndSortedRequest {
  keyword: string;
}
