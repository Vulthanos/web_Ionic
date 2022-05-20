import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserAutenticationService } from 'src/app/services/user-autentication.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  profile = null;

  constructor(
    private profileService: ProfileService,
    private authService: UserAutenticationService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.profileService.getUserProfile().subscribe((data) => {
      this.profile = data;
    });
  }

  async logout() {
    await this.authService.logout();
    await this.router.navigateByUrl('/', {replaceUrl: true});
  }

  async changeImage() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Photos,
    });
    console.log(image);
    if(image) {
      const loading = await this.loadingCtrl.create();
      await loading.present();
      const result = await this.profileService.uploadImage(image);
      await loading.dismiss();
      if(!result) {
        const alert = await this.alertCtrl.create({
          header: 'No se pudo subir la imagen',
          message: 'Ocurrio un problema al subir la imagen de perfil',
          buttons: ['OK'],
        });
        await alert.present();
      }
    }
  }

  ngOnInit() {
  }

}
