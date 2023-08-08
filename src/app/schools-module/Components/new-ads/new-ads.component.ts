import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MainService } from '../../Services/main.service';
import { FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-ads',
  templateUrl: './new-ads.component.html',
  styleUrls: ['../new-student/new-student.component.css','./new-ads.component.css']
})
export class NewAdsComponent implements OnInit {
  newAdForm:FormGroup = new FormGroup({});
  imageSrc: string | null = null;

  constructor(private service:MainService){}
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.newAdForm = this.service.formBuilder.group({
      image:['',[Validators.required]],
      userNumber:['',[Validators.required]],
      details:['',[Validators.required]],
    });
  }
  submit(){
    this.service.printFormValues(this.newAdForm);
    this.service.adsService.addNewAd(this.newAdForm.value).subscribe({
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
  back(){
    this.service.back();
  }
}
