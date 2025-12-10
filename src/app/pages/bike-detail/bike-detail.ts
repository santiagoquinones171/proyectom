import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bike-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bike-detail.html',
  styleUrls: ['./bike-detail.css']
})
export class BikeDetailComponent {
  
}