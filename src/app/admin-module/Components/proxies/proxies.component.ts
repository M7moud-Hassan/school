import { Component ,OnInit} from '@angular/core';
import { Proxies } from '../../Services/proxies.service';
import { MainAdminService } from '../../Services/main-admin.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-proxies',
  templateUrl: './proxies.component.html',
  styleUrls: ['./proxies.component.css']
})
export class ProxiesComponent implements OnInit {
  proxies:Proxies[]=[]
  select:Number=-1
  constructor(private service:MainAdminService,private router: Router){
    
  }
  ngOnInit(): void {
   this.getProxies()
  }

  getProxies(){

    this.proxies=this.service.adminProxiesService.getAll();
  }
  onSelect(index:Number){
    this.select=index;
    setTimeout(()=>{
      this.router.navigate(['/admin/proxy-page']);
    },1000)
  }


}
