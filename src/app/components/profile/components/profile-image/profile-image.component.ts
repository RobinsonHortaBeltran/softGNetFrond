import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-profile-image',
  templateUrl: './profile-image.component.html',
  styleUrls: ['./profile-image.component.css'],
})
export class ProfileImageComponent implements OnInit {
  @Input() valorRecibido: boolean | undefined;
  formularioInvalido: boolean = true;
  imagePreview: string | null = null;

  constructor() {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['valorRecibido']) {
      this.formularioInvalido = !changes['valorRecibido'].currentValue;
    }
  }
  config: any = {
    url: '/api/upload',
    maxFiles: 1,
  };

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
