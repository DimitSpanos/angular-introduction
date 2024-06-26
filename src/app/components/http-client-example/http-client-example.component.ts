import { Component, OnInit, inject } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit{
  
  jokesService = inject(JokesService); //dependency injection

  dadJoke = '';
  chuckNorrisJoke = '';

  ngOnInit(): void {
      // this.jokesService.getDadJoke().subscribe((data: DadJoke) => {  //alternative instead of the interface .subscribe((data: {joke: string}) => {
      //   console.log(data.joke);
      //   this.dadJoke = data.joke;
      // })
      this.refreshDadJoke()

      // this.jokesService.getChuckNorrisJoke().subscribe((data: ChuckNorrisJoke) => { //alternative instead of the interface .subscribe((data: {value: string}) => {
      //   console.log(data.value);
      //   this.chuckNorrisJoke = data.value;
      // })   
      this.refreshChuckNorrisJoke()
  }

  refreshDadJoke() {
    this.jokesService.getDadJoke().subscribe((data) => { 
      console.log(data.joke);
      this.dadJoke = data.joke;
    })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke().subscribe((data) => { 
      console.log(data.value);
      this.chuckNorrisJoke = data.value;
    })
  }
}
