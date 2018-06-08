/**
 * Created by Lenovo on 3/23/2017.
 */
export class SearchParams{
  page:number = 0;
  size:number = 10;
  sort:Array<string> = ["id","desc"];
  search:any;
}
