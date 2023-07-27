import { Component } from '@angular/core';

@Component({
  selector: 'app-add-school-proxy',
  templateUrl: './add-school-proxy.component.html',
  styleUrls: ['../../../schools-module/Components/register/register.component.css','../../../schools-module/Components/login/login.component.css',
  '../../../schools-module/Components/profile/profile.component.css','../../../schools-module/Components/new-student/new-student.component.css','./add-school-proxy.component.css']
})
export class AddSchoolProxyComponent {

  constructor() {
  
    
  }
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  zoom = 5 ;
  imageSrc: string | null = null;
  onDragOver(event: DragEvent) {
    event.preventDefault();
  }
  onDrop(event: DragEvent) {
    event.preventDefault();
    const files = event.dataTransfer?.files;
    if (files) {
      this.handleImageDrop(files);
    }
  }
  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    this.handleImageDrop(input.files);
  }
  private handleImageDrop(files: FileList | null) {
    if (!files || files.length === 0) return;

    const file = files[0];
    const reader = new FileReader();

    reader.onload = (e: ProgressEvent<FileReader>) => {
      this.imageSrc = e.target?.result as string;
    };

    reader.readAsDataURL(file);
  }
}
