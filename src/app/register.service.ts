import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private httpclient:HttpClient) { }

  public registerUserFromRemote(user :any):Observable<any>{
    return this.httpclient.post<any>("http://localhost:8060/register",user,httpOptions);
  }
  getuser(emailtemp:any): Observable<any> {
     //console.log(emailtemp1);
    var endurl='http://localhost:8060/login/'+emailtemp;
    return this.httpclient.get(endurl);
  }
}
