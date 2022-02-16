import { Component } from '@angular/core';
import { FormBuilder, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServiceService } from '../annonce/service.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  annonce:any
  isSubmitted: boolean = false

  constructor(
    private service : ServiceService,
    private router: Router,
    public formBuilder:FormBuilder,)                
  {}

ngOnInit(): void {
  this.annonce = this.formBuilder.group({
    description:['', [Validators.required, Validators.minLength(2)]],
    geolocalisation:['', [Validators.required, Validators.minLength(2)]],
    categorie: ['', Validators.required]
  })
}
get errorControl() {
  return this.annonce.controls; 
}
submitForm(form:NgForm) {
  console.log(this.annonce)
  this.isSubmitted = true;
  if(this.annonce.value){
    this.service.ajoutAnnonce(this.annonce.value).subscribe((res)=>{
      return this.router.navigateByUrl('/tab3')
    })
  }
}
}
