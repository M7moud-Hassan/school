import { Component ,OnInit} from '@angular/core';
import { Proxies } from '../../Services/proxies.service';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['../../../schools-module/Components/register/register.component.css','../../../schools-module/Components/login/login.component.css',
  '../../../schools-module/Components/profile/profile.component.css','../../../schools-module/Components/new-student/new-student.component.css','./add-users.component.css']
})
export class AddUsersComponent implements OnInit {
  proxies:Proxies[]=[]
  constructor(private service:MainAdminService) {
  
    
  }
  ngOnInit(): void {
    this.proxies=this.service.adminProxiesService.getAll();
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
  back(){
    this.service.back();
  }
}
