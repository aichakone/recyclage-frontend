import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../annonce/service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categorie:any;
  constructor(private service: ServiceService) { }

  ngOnInit() {
    this.allCategories();
  }

  allCategories(){
    return this.service.getAllcategorie().subscribe((data:any)=>{
      console.log(data)
      this.categorie = data;
    })
  }
}
