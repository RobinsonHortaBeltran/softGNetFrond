import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
})
export class ProfileImageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  config: any = {
    url: '/api/upload',
    maxFiles: 1,
  };

  imagePreview: string | null = null;

  onDrop(event: any) {
    if (event.addedFiles.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imagePreview = e.target.result;
      };
      reader.readAsDataURL(event.addedFiles[0]);
    }
  }

  onConfirm() {
    // Agrega lógica para confirmar aquí
    console.log('Imagen confirmada:', this.imagePreview);
  }

  onClear() {
    this.imagePreview = null;
  }
}
