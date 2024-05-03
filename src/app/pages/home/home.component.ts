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
    console.log('Make appointment branch is executing '+name);
    console.log('Master branch is executing');
    
  }

  test(): void {
    alert('test');
  }

  ngOnInit(): void{
    console.log('Init called');
  }
}
