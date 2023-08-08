import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-add-new-user',
  templateUrl: './agent-add-new-user.component.html',
  styleUrls: ['./agent-add-new-user.component.css']
})
export class AgentAddNewUserComponent implements OnInit {
  imageSrc: string | null = null;
  newUserForm:FormGroup = new FormGroup({});
  topPosition = 0;
  display = 'none'
  goShow: boolean = false
  goReturn: boolean = false
  zoom = 5
  center: google.maps.LatLngLiteral = {
    lat: 21.467420120714536,
    lng: 48.39095806484077
  };
  
  constructor(private service:MainAgentService) {}
  ngOnInit(): void {
    this.createUserForm();
  }

  createUserForm(){
    this.newUserForm = this.service.formBuilder.group({
      userNumber : ['',[Validators.required]],
      name : ['',[Validators.required]],
      nameEn : ['',[Validators.required]],
      email : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      password : ['',[Validators.required]],
      city : ['',[Validators.required]],
      region : ['',[Validators.required]],
      image : ['',[]]
    });
  }
  
  onSubmit(){
    this.service.printFormValues(this.newUserForm);
    if(this.newUserForm.valid){
      this.service.agentUsersService.addNewUser(this.newUserForm.value).subscribe({
        next:(response)=>{
        },
        error:(error)=>{
        }
      });
    }
  }
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
    this.saveImage(event);
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

  saveImage(event: any) {
    const file: File = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.newUserForm.controls['image'].setValue(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  }
  back(){
    this.service.back();
  }
}
