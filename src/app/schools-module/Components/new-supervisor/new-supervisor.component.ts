import { Component, OnInit } from '@angular/core';
import { NewSupervisorModel } from '../../Core/Models/new-supervisor-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SupervisorService, companiesModel } from '../../Services/supervisor.service';
import { MainService } from '../../Services/main.service';
import { groupSimpleModel } from '../../Services/groups.service';

@Component({
  selector: 'app-new-supervisor',
  templateUrl: './new-supervisor.component.html',
  styleUrls: ['../new-student/new-student.component.css','./new-supervisor.component.css']
})
export class NewSupervisorComponent implements OnInit {
  busColorValue = '#563d7c';
  imageSrc: string | null = null;
  newSupervisorForm:FormGroup = new FormGroup({});
  groups:groupSimpleModel[] = [];
  companies:companiesModel[] = [];

  
  constructor(private service:MainService){}

  ngOnInit(): void {
    this.createForm();
    this.getGroups();
    this.getCompanies();
  }
  createForm(){
     this.newSupervisorForm = this.service.formBuilder.group({
      userNumber:['',[Validators.required]],
      name:['',[Validators.required]],
      nameEn:['',[Validators.required]],
      email:['',[Validators.required]],
      address:['',[Validators.required]],
      password:['',[Validators.required]],
      group:['',[Validators.required]],
      phone:['',[Validators.required]],
      busNumber:['',[Validators.required]],
      manufacturingCompany:['',[Validators.required]],
      busColor:['',[Validators.required]],
      image:['',[]],
    });
  }

  getGroups(){
    this.groups = this.service.groupService.getGroups();
   }

   getCompanies(){
    this.companies = this.service.groupService.getGroups();
   }
   
  onSubmit() {
    this.service.printFormValues(this.newSupervisorForm);
    if(this.newSupervisorForm.valid){
      this.service.supervisorService.addNewSupervisor(this.newSupervisorForm.value).subscribe({
        next:(response)=>{

        },
        error:(error)=>{

        }
      })
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