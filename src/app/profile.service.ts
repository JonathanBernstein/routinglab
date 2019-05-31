import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 userProfile: any = 
   { 
     Name: "Kermit",
     contactInfo: "555-555-5555",
     Bio: "Hi My name is Kermit. I love wearing supreme!"
  };
  

  constructor(private router: Router) { }
  getProfile(): any {
    return this.userProfile;
  }

  setProfile (updatedProfile: any): void {
    this.userProfile = { ...updatedProfile };
    this.router.navigate(["/profile"]);
  }
  
  editProfile(): void {
    this.router.navigate(["/edit"]);
  }
}
