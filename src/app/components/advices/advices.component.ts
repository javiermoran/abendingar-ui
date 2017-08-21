import { Component, OnInit } from '@angular/core';
import { AdvicesService } from '../../services/advices.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-advices',
  templateUrl: './advices.component.html',
})
export class AdvicesComponent implements OnInit {
  advices = [];

  constructor(private advicesService:AdvicesService) {}

  ngOnInit() {
    this.advicesService.getAll().subscribe(
      data => this.advices = JSON.parse(data['_body'])
    )
  }
}
