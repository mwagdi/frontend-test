import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpService } from './http.service';
type Item = {
  id: number;
  parent_id: null | number;
  title: string;
};
describe('HttpService', () => {
  let httpMock: HttpTestingController;
  let httpService: HttpService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService],
    });
    httpMock = getTestBed().get(HttpTestingController);
    httpService = getTestBed().get(HttpService);
  });

  it('should create', () => {
    expect(httpService).toBeTruthy();
  });
  it('should get all items from http', () => {
    let items: Item[] = [{ id: 2, parent_id: 1, title: 'Item title' }];
    httpService.getAll().subscribe(res => {
      expect(res.length).toBe(1);
      expect(res).toEqual(items);
    });
    let req = httpMock.expectOne(httpService.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(items);
  });
});
