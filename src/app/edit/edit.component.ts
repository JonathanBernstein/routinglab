import { Component, OnInit, } from '@angular/core';
import {ProfileService} from '../profile.service';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
userProfile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getProfile();
  }

  saveProfile(form) {
    this.userProfile = this.profileService.setProfile(
      {Name: form.value.name, 
      contactInfo: form.value.contactInfo, 
      Bio: form.value.bio});
  }








}
