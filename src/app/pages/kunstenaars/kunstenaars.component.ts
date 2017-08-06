import { Kunstenaar } from './../../domain/kunstenaar';
import { KunstenaarService } from './../../services/kunstenaar-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kunstenaars',
  templateUrl: './kunstenaars.component.html',
  styleUrls: ['./kunstenaars.component.css']
})
export class KunstenaarsComponent implements OnInit {

  private kunstenaars: Kunstenaar[];

  constructor(private kunstenaarService: KunstenaarService) {
  }

  ngOnInit() {
    this.kunstenaarService.getAllKunstenaars().subscribe(
      data => {
        this.kunstenaars = data.rubenianumpersonen;
        console.log(this.kunstenaars);
      }
    )
  }

}
