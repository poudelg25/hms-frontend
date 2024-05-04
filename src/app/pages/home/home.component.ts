import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  execute(name: string): void {
    alert('Make appointment branch is executing '+name);
    console.log('Master branch is executing');
    
  }

  testFileProessing(): void {
    alert('test');
    console.log('file processing in master');
  }

  ngOnInit(): void{
    console.log('Init called');
  }
}
