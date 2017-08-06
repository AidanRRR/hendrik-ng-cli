import { KunstenaarService } from './../../services/kunstenaar-service';
import { Kunstenaar } from './../../domain/kunstenaar';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kunstenaars-detail',
  templateUrl: './kunstenaars-detail.component.html',
  styleUrls: ['./kunstenaars-detail.component.css']
})
export class KunstenaarsDetailComponent implements OnInit {

  private kunstenaar: Kunstenaar;

  constructor(private kunstenaarService: KunstenaarService) {
  }

  ngOnInit() {
    this.kunstenaarService.getAllKunstenaars().subscribe(
      data => {
        this.kunstenaar = data;
        console.log(this.kunstenaar);
      }
    )
  }

}
