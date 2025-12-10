import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface Bike {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  features: string[];
  inStock: boolean;
  rating: number;
  discount?: number;
}

@Component({
  selector: 'app-catalog',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './catalog.html',
  styleUrls: ['./catalog.css']
})
export class CatalogComponent {
  selectedCategory: string = 'all';
  sortBy: string = 'featured';
  priceRange: string = 'all';
  searchTerm: string = '';

  categories = [
    { id: 'all', name: 'Todas', count: 12 },
    { id: 'mountain', name: 'Montaña', count: 5 },
    { id: 'road', name: 'Carretera', count: 3 },
    { id: 'urban', name: 'Urbana', count: 4 }
  ];

  bikes: Bike[] = [
    {
      id: 1,
      name: 'Mountain Pro X Elite',
      category: 'mountain',
      price: 2499,
      image: 'https://cdn.brujulabike.com/uploads/images/emtb_bicicleta_electrina_montana.jpg',
      features: ['Suspensión completa', 'Cambios Shimano', 'Frenos hidráulicos'],
      inStock: true,
      rating: 4.8,
      discount: 15
    },
    {
      id: 2,
      name: 'Urban Commuter Plus',
      category: 'urban',
      price: 1299,
      image: 'https://images.unsplash.com/photo-1571333250630-f0230c320b6d?w=600&h=600&fit=crop',
      features: ['Portaequipaje', 'Luces LED', 'Guardabarros'],
      inStock: true,
      rating: 4.5
    },
    {
      id: 3,
      name: 'Road Racer Carbon',
      category: 'road',
      price: 3299,
      image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&h=600&fit=crop',
      features: ['Cuadro carbono', 'Grupo completo', 'Ruedas aero'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 4,
      name: 'Trail Blazer 29',
      category: 'mountain',
      price: 1899,
      image: 'https://i5.walmartimages.com.mx/mg/gm/3pp/asr/01b86ff0-4a1e-4a18-b8cf-91eb99194ff6.89147181bcffd850c2a032a826bbed99.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      features: ['Ruedas 29"', 'Suspensión air', '12 velocidades'],
      inStock: true,
      rating: 4.6
    },
    {
      id: 5,
      name: 'City Cruiser Comfort',
      category: 'urban',
      price: 899,
      image: 'https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?w=600&h=600&fit=crop',
      features: ['Sillín confort', 'Canasta frontal', '7 velocidades'],
      inStock: true,
      rating: 4.3
    },
    {
      id: 6,
      name: 'Speed Demon Aero',
      category: 'road',
      price: 4199,
      image: 'https://tse1.mm.bing.net/th/id/OIP.nx9eej0vPVFWmgPWKBNlewHaEt?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      features: ['Diseño aerodinámico', 'Electrónica integrada', 'Peso 6.8kg'],
      inStock: false,
      rating: 5.0,
      discount: 10
    },
    {
      id: 7,
      name: 'Mountain Beast XC',
      category: 'mountain',
      price: 2799,
      image: 'https://th.bing.com/th/id/R.98d5a3bc4cf99ebe3cc849a5fe078505?rik=UVu7t%2byCi%2bhXIQ&pid=ImgRaw&r=0',
      features: ['Geometría XC', 'Suspensión FOX', 'Dropper post'],
      inStock: true,
      rating: 4.7
    },
    {
      id: 8,
      name: 'Urban Classic Vintage',
      category: 'urban',
      price: 1099,
      image: 'https://tse1.mm.bing.net/th/id/OIP.NDB04Havs1LwB0jBkcEYUAHaE8?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3',
      features: ['Estilo retro', 'Cuadro acero', 'Frenos V-brake'],
      inStock: true,
      rating: 4.4
    },
    {
      id: 9,
      name: 'Enduro Master Pro',
      category: 'mountain',
      price: 3499,
      image: 'https://d1nymbkeomeoqg.cloudfront.net/photos/15/78/279330_4916_XL.jpg',
      features: ['Recorrido 160mm', 'Ruedas mixtas', 'Geometría slack'],
      inStock: true,
      rating: 4.9
    },
    {
      id: 10,
      name: 'Gravel Adventure GX',
      category: 'road',
      price: 2599,
      image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=600&h=600&fit=crop',
      features: ['Neumáticos mixtos', 'Geometría estable', 'Portabultos'],
      inStock: true,
      rating: 4.6
    },
    {
      id: 11,
      name: 'E-Bike City Smart',
      category: 'urban',
      price: 2299,
      image: 'https://tse2.mm.bing.net/th/id/OIP.rNeDHpJ4Ueb6EFQrzQld1wHaHD?cb=ucfimg2&ucfimg=1&w=1500&h=1430&rs=1&pid=ImgDetMain&o=7&rm=3',
      features: ['Motor eléctrico', 'Batería 500Wh', 'Autonomía 80km'],
      inStock: true,
      rating: 4.8,
      discount: 20
    },
    {
      id: 12,
      name: 'XC Race Carbon Elite',
      category: 'mountain',
      price: 4499,
      image: 'https://i5.walmartimages.com/asr/2b645c06-7cc3-47ea-9da4-8c68fc8cbbc9.53124b4efbb841ab53c4f15170caa032.jpeg',
      features: ['Cuadro carbono', 'Peso ultraligero', 'Competición'],
      inStock: false,
      rating: 5.0
    }
  ];

  get filteredBikes(): Bike[] {
    let filtered = [...this.bikes];

    // Filter by category
    if (this.selectedCategory !== 'all') {
      filtered = filtered.filter(bike => bike.category === this.selectedCategory);
    }

    // Filter by price range
    if (this.priceRange !== 'all') {
      const ranges = {
        'low': [0, 1500],
        'medium': [1500, 3000],
        'high': [3000, 10000]
      };
      const [min, max] = ranges[this.priceRange as keyof typeof ranges];
      filtered = filtered.filter(bike => bike.price >= min && bike.price < max);
    }

    // Sort
    if (this.sortBy === 'price-low') {
      filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortBy === 'price-high') {
      filtered.sort((a, b) => b.price - a.price);
    } else if (this.sortBy === 'rating') {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    return filtered;
  }

  selectCategory(categoryId: string): void {
    this.selectedCategory = categoryId;
  }

  getFinalPrice(bike: Bike): number {
    if (bike.discount) {
      return bike.price * (1 - bike.discount / 100);
    }
    return bike.price;
  }

  getCategoryName(categoryId: string): string {
    const category = this.categories.find(cat => cat.id === categoryId);
    return category ? category.name : '';
  }
}