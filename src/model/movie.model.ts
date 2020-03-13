export class MovieModel {
  public id: string='';
  public title: string = '';
  public original_language:string=''
  public backdrop_path: string='';
  public poster_path:string='';
  public genreIds: number[];
  public adult:string='';
  public overview:string='';
  public release_date:string='';
  public add_myList:boolean;
  
}
export class GenerModel {
  id: number;
  name: string
}