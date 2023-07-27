import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MainAgentService } from '../../Services/main-agent.service';

@Component({
  selector: 'app-agent-add-new-ads',
  templateUrl: './agent-add-new-ads.component.html',
  styleUrls: ['./agent-add-new-ads.component.css']
})
export class AgentAddNewAdsComponent implements OnInit {
  newAdForm:FormGroup = new FormGroup({});
  imageSrc: string | null = null;

  constructor(private service:MainAgentService){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.newAdForm = this.service.formBuilder.group({
      image:['',[Validators.required]],
      title:['',[Validators.required]],
      details:['',[Validators.required]],
    });
  }
  submit(){
    this.service.printFormValues(this.newAdForm);
    this.service.agentAdsService.addNewAd(this.newAdForm.value).subscribe({
      next:(res)=>{

      },
      error:(error)=>{
        
      }
    });
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
}
