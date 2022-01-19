import { Component, OnInit } from '@angular/core';
import { RoundRestService } from '../../services/http/impl/round.service.impl';
import { Total } from '../../model/total.model';
import Swal from 'sweetalert2';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-history',
  templateUrl: './totals.component.html',
  styleUrls: ['./totals.component.css']
})
export class TotalsComponent implements OnInit {

  total: Total;

  constructor(private roundRestService: RoundRestService, public loadingService: LoadingService) { }

  ngOnInit() {
    this.total = new Total();
    this.reload();
  }

  reload() {
    this.loadingService.showLoading();
    this.roundRestService.getTotal()
      .subscribe( data => {
        this.total = data;
        this.loadingService.hideLoading();
      },
      error => {
        console.error(error);
        Swal.fire('', 'Something went wrong!', 'error');
        this.loadingService.hideLoading();
      });
  }

  delete() {
    Swal.fire({
      icon: 'warning',
      title: 'Do you want to delete the totals?',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
      showCancelButton: true
    }).then((result) => {
      if (result.value) {
        this.loadingService.showLoading();
        this.roundRestService.deleteTotal()
          .subscribe( data => {
            this.total = new Total();
            this.loadingService.hideLoading();
          },
          error => {
            console.error(error);
            Swal.fire('', 'Something went wrong!', 'error');
            this.loadingService.hideLoading();
          });
      }
    });
  }

}
