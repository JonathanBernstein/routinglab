import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../profile.service';
@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
userProfile: any;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userProfile = this.profileService.getProfile();
  }

  getEdit() {
    this.userProfile = this.profileService.editProfile();
  }

}
