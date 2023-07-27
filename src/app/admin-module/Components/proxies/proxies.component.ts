import { Component ,OnInit} from '@angular/core';
import { Proxies } from '../../Services/proxies.service';
import { MainAdminService } from '../../Services/main-admin.service';

@Component({
  selector: 'app-proxies',
  templateUrl: './proxies.component.html',
  styleUrls: ['./proxies.component.css']
})
export class ProxiesComponent implements OnInit {
  proxies:Proxies[]=[]
  select:Number=-1
  constructor(private service:MainAdminService){
    
  }
  ngOnInit(): void {
   this.getProxies()
  }

  getProxies(){

    this.proxies=this.service.adminProxiesService.getAll();
  }
  onSelect(index:Number){
    this.select=index;
  }


}
