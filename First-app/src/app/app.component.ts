import { Component, NgZone } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PolaflixWeb';
  user = 'Migmardi';
  userID=1;

  constructor(private router: Router, private zone: NgZone) { }


  ngOnInit(): void {
    this.zone.run(() => this.router.navigateByUrl('/'))
  }


  usuario() {

  }
}
