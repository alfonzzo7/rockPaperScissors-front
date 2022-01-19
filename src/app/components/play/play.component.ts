import { Component, OnInit } from '@angular/core';
import { Round } from 'src/app/model/round.model';
import { RoundRestService } from '../../services/http/impl/round.service.impl';
import Swal from 'sweetalert2';
import { LoadingService } from '../../services/loading/loading.service';

@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.css']
})
export class PlayComponent implements OnInit {

  round: Round;
  rounds: Round[];

  constructor(private roundRestService: RoundRestService, public loadingService: LoadingService) {}

  ngOnInit() {
    this.restar();
  }

  playRound() {
    this.loadingService.showLoading();
    this.roundRestService.playRound()
      .subscribe( data => {
        this.round.id++;
        this.round.player1 = data.player1;
        this.round.player2 = data.player2;
        this.round.result = data.result;
        this.rounds.unshift(JSON.parse(JSON.stringify(this.round)));
        this.loadingService.hideLoading();
      },
      error => {
        console.error(error);
        Swal.fire('', 'Something went wrong!', 'error');
        this.loadingService.hideLoading();
      });
  }

  restar() {
    this.round = new Round(0);
    this.rounds = new Array();
  }

}
