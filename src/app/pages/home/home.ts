import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  features = [
    {
      icon: '🚴',
      title: 'Alta Calidad',
      description: 'Bicicletas fabricadas con los mejores materiales'
    },
    {
      icon: '⚡',
      title: 'Rendimiento',
      description: 'Diseñadas para máximo desempeño en cada terreno'
    },
    {
      icon: '🛠️',
      title: 'Garantía',
      description: 'Soporte técnico y garantía extendida'
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Comprometidos con el medio ambiente'
    }
  ];

  popularBikes = [
    {
      id: 1,
      name: 'Mountain Pro X',
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=500&h=500&fit=crop',
      price: 1299,
      category: 'Montaña'
    },
    {
      id: 2,
      name: 'City Cruiser',
      image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=500&h=500&fit=crop',
      price: 899,
      category: 'Urbana'
    },
    {
      id: 3,
      name: 'Speed Racer',
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=500&h=500&fit=crop',
      price: 1599,
      category: 'Carretera'
    }
  ];
}