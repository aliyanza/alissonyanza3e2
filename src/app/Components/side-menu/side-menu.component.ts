import { Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
 userName:string="";
 theme:string="";
 widthMenu:number=30;
 visibleMenu:boolean=true;

 alternateVisibility():void{
  this.visibleMenu=!this.visibleMenu;
 }
 setTheme(color:string):void{
  this.theme=color;
 }
 setSize():void{
  this.widthMenu+=10;
  if(this.widthMenu>100){
    this.widthMenu=50;
  }
 }
}
