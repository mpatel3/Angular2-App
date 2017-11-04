import { Injectable } from '@angular/core'; // we want to inject the srvice as a depedency that's why injectable is required.
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  constructor(private http: Http) {
    console.log('post service inialize');
   }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
            .map(res => res.json());
  }

}
