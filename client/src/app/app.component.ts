import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Login';
    data:any;
    constructor(private http: HttpClient){
		this.http.get('http://localhost/laravel8/public/api/sample-restful-apis').subscribe(data => {
			this.data = data;
			console.log(this.data);
		}, error => console.error(error));
	}
}
