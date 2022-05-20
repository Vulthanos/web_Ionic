import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { UserAutenticationService } from 'src/app/services/user-autentication.service';
import { ProfileService } from 'src/app/services/profile.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})

export class ProfilePage implements OnInit {

  updateDataForm: FormGroup;
  profile = null;
  isEditing = false;

  constructor(
    private fb: FormBuilder,
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

  get name() {
    return this.updateDataForm.get('name');
  }

  get surname() {
    return this.updateDataForm.get('surname');
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

  async updateData() {
    const loading = await this.loadingCtrl.create();
    await loading.present();
    const user = await this.authService.updateNameSurname(this.updateDataForm.value);
    await loading.dismiss();
    if(user) {
      await this.showAlert('CORRECTO', 'Se han actualizado sus datos');
    } else {
      await this.showAlert('No se pudieron actualizar sus datos', 'Vuelva a intentarlo');
    }
    this.isEditing = false;
  }

  async showAlert(header, message) {
    const alert = await this.alertCtrl.create({
      header,
      message,
      buttons: ['OK'],
    });
    await alert.present();
  }

  ngOnInit() {
    this.updateDataForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  edit() {
    if (!this.isEditing) {
      this.isEditing = true;
    }
  }
}
