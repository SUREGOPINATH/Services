import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MydataserviceService} from '../mydataservice.service';
import {CommonModule} from '@angular/common';
@Component({
  selector: 'app-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.css']
})
export class PublisherComponent implements OnInit {

  publishers:any=[];  

  constructor(private s1:MydataserviceService) {
    console.log("inside publisher");
   }

  ngOnInit() {
    // this.s1.getpublishers().subscribe((data)=>{
    //   this.publishers=data};
    //   console.log(data);
    //   this.publishers = data;
    // })  
    // return this.s1.getpublishers().subscribe((data:{})=>{
    //   this.publishers=data;console.log(this.publishers)});
      // this.ks1.getpublishers();
  }
  loadPublishers($event)
  {

    return this.s1.getpublishers().subscribe((data:{})=>{
     this.publishers=data;
     console.log(this.publishers);});

  }
  
  FIRSTNAME:string='';
 public maritalStatus:boolean=false;

 public MarriageStatus(value:boolean):void{
    this.maritalStatus=value;
  }

  countryList:country[] = [
    new country("1", "India"),
    new country('2', 'USA'),
    new country('3', 'England')
  ];
  
  onSubmit(contactForm:any)
  {
    console.log(contactForm.value);
var p=new PersonModel();   
    p.firstName=contactForm.value.firstname;
    p.lastName=contactForm.value.lastname;
    p.Email=contactForm.value.email;
    p.ismarried=contactForm.value.isMarried;
    p.gender=contactForm.value.gender;
    p.Country=contactForm.value.country;
    p.showData();
  }
}
 
export class country {
  id:string;
  name:string;
 
  constructor(id:string, name:string) {
    this.id=id;
    this.name=name;
  }
}

 export class PersonModel
{
constructor()
{


}

firstname:string='';
public get firstName()
{
  return this.firstname;
}
public set firstName(value)
{
  this.firstname=value;
}

lastname:string='';
public get lastName()
{
  return this.lastname;
}
public set lastName(value)
{
  this.lastname=value;
}


email:string='';
public get Email()
{
  return this.email;;
}
public set Email(value)
{
  this.email=value;
}

gender:string='';
public get Gender()
{
  return this.gender;
}
public set Gender(value)
{
  this.gender=value;
}


ismarried:boolean=false;




country:string='';
public get Country()
{
  return this.country;
}
public set Country(value)
{
  this.country=value;
}


showData():void{
  console.log("Details are");
console.log(this.firstName);
console.log(this.lastName);
console.log(this.email);
console.log(this.country);
console.log(this.gender);
console.log(this.ismarried);



}

}
