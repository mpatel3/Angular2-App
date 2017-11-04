import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls : ['./user.component.css'],
  providers: [
    PostService
  ]
})
export class UserComponent implements OnInit {

  name: string;
  email: string;
  address: {
    number: string,
    street: string,
    locality: string
  };
  hobbies: string[];
  showHobbies: any;
  addHobby: any;
  removeHobby: any;
  deleteHobby: any;
  ishobbyShown: boolean;
  posts: {
    id: number,
    title: string,
    body: string
  }[];
  
  constructor(private postService: PostService) {
    this.name = 'Manthan';
    this.email = 'mpatel@test.com';
    this.address = {
      number: 'B/102',
      street: 'Miranagar',
      locality: 'Udhna'
    };
    this.hobbies = ['Reading', 'photography', 'travelling', 'sports'];

    this.showHobbies = () => {
      this.ishobbyShown = !this.ishobbyShown;
    };

    this.addHobby = (hobby) => {
      this.hobbies.push(hobby);
    };

    this.removeHobby = (hobby) => {
      this.hobbies.splice(this.hobbies.indexOf(hobby), 1);
    };

    this.deleteHobby = (i) => {
      this.hobbies.splice(i, 1);
    };

    postService.getPosts().subscribe(res => {
      this.posts = res;
    });
  }

  ngOnInit() {}

}
