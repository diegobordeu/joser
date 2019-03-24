import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public test;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://swapi.co/api/films').subscribe((data: any) => {
      console.log(data);
      this.test = data.results;
    })
  }

}
