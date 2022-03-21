import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpclient:HttpClient) { }

  getuser(userinput:any): Observable<any> {
    //console.log(emailtemp1);
   var endurl='https://api.nal.usda.gov/fdc/v1/foods/search?query='+userinput+'&pageSize=1&api_key=gG5v9MKsePGFqQ40RvQJsIb2Oh315ImRuxXKI56L';
   return this.httpclient.get(endurl);
 }
 public fav(user :any):Observable<any>{
  return this.httpclient.post<any>("http://localhost:8070/fav",{name:user},httpOptions);
}
getfav(): Observable<any> {
  //console.log(emailtemp1);
  return this.httpclient.get('http://localhost:8070/favoritefood',httpOptions);
}
delete(id: any): Observable<any> {
  var endurl='http://localhost:8070/favoritefood/'+id+'/';
  return this.httpclient.delete(endurl,httpOptions);
}
}
