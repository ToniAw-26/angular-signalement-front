import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SignalementService } from 'src/app/service/signalement.service';

@Component({
  selector: 'app-detailid',
  templateUrl: './detailid.component.html',
  styleUrls: ['./detailid.component.css']
})
export class DetailidComponent implements OnInit {

  public loading = false;
  idParameter = this.route.snapshot.paramMap.get('id');
  detail: any;
  message: any;
  constructor(private route: ActivatedRoute,
              private signalementService: SignalementService) { }

  ngOnInit(): void {
    this.getDetail();
  }

  getDetail(){
    this.loading = true;
    const success  = (response: any) => {
      if (response.status === 200){
        this.loading = false;
        this.detail = response.data;
      }else{
        this.loading = false;
        this.message = response.message;
      }
    };
    const error  = (response: any) => {
      if (response.status === 400){
        this.loading = false;
        this.message = response.message;
    }
    };

    this.signalementService.getDetailSignalementById(this.idParameter).subscribe(success, error);
  }
}
