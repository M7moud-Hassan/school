import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-add-new-subscribers',
  templateUrl: './agent-add-new-subscribers.component.html',
  styleUrls: ['./agent-add-new-subscribers.component.css']
})
export class AgentAddNewSubscribersComponent implements OnInit {
  imageSrc: string | null = null;
  newSubscriberForm:FormGroup = new FormGroup({});
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
    this.newSubscriberForm = this.service.formBuilder.group({
      userNumber : ['',[Validators.required]],
      name : ['',[Validators.required]],
      nameEn : ['',[Validators.required]],
      email : ['',[Validators.required]],
      phone : ['',[Validators.required]],
      address : ['',[Validators.required]],
      password : ['',[Validators.required]],
      city : ['',[Validators.required]],
      region : ['',[Validators.required]],
      saveTripPath : [false,[Validators.required]],
      finishingTripUsingQR : [false,[Validators.required]],
      image : ['',[]],
    });
  }
  
  onSubmit(){
    this.service.printFormValues(this.newSubscriberForm);
    if(this.newSubscriberForm.valid){
      this.service.agentUsersService.addNewUser(this.newSubscriberForm.value).subscribe({
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
      this.newSubscriberForm.controls['image'].setValue(URL.createObjectURL(file));
    };
    reader.readAsDataURL(file);
  }
  back(){
    this.service.back();
  }

}
