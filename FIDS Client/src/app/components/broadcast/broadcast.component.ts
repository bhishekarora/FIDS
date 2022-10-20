import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-broadcast',
  templateUrl: './broadcast.component.html',
  styleUrls: ['./broadcast.component.css']
})
export class BroadcastComponent implements OnInit {
  status: any;
  submitted= false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  broadcast(msg:any){
// Simple POST request with a JSON body and response type <any>
this.http.post<any>('http://localhost:3000/send-notification?message='+msg,{}).subscribe(data => {
  this.status = 'Sent';
  this.submitted = true;
  setTimeout(() => {
    window.location.reload();
  }, 2000);
})
  }
}
