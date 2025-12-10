import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.html',
  styleUrls: ['./about.css']
})
export class AboutComponent {
  
  values = [
    {
      title: 'Calidad',
      description: 'Seleccionamos cada bicicleta con los más altos estándares de calidad y durabilidad.',
      icon: 'quality'
    },
    {
      title: 'Innovación',
      description: 'Constantemente incorporamos las últimas tecnologías en nuestros productos.',
      icon: 'innovation'
    },
    {
      title: 'Sostenibilidad',
      description: 'Comprometidos con el medio ambiente y la movilidad sostenible.',
      icon: 'sustainability'
    },
    {
      title: 'Servicio',
      description: 'Atención personalizada y soporte técnico especializado para nuestros clientes.',
      icon: 'service'
    }
  ];

  milestones = [
    { year: '2015', title: 'Fundación', description: 'Inicio de operaciones en Dosquebradas' },
    { year: '2017', title: 'Expansión', description: 'Apertura de nuevas sucursales' },
    { year: '2020', title: 'Innovación', description: 'Lanzamiento de línea premium' },
    { year: '2024', title: 'Liderazgo', description: 'Líder en ventas de bicicletas' }
  ];

  stats = [
    { number: '10K+', label: 'Clientes Satisfechos' },
    { number: '15K+', label: 'Bicicletas Vendidas' },
    { number: '50+', label: 'Marcas Asociadas' },
    { number: '98%', label: 'Satisfacción' }
  ];

  team = [
    {
      name: 'Carlos Rodríguez',
      position: 'CEO & Fundador',
      image: 'https://static.vecteezy.com/system/resources/previews/016/895/137/original/person-icon-line-isolated-on-white-background-black-flat-thin-icon-on-modern-outline-style-linear-symbol-and-editable-stroke-simple-and-pixel-perfect-stroke-illustration-vector.jpg',
      bio: 'Ciclista profesional con 15 años de experiencia en la industria.'
    },
    {
      name: 'María González',
      position: 'Directora de Operaciones',
      image: 'https://static.vecteezy.com/system/resources/previews/016/895/137/original/person-icon-line-isolated-on-white-background-black-flat-thin-icon-on-modern-outline-style-linear-symbol-and-editable-stroke-simple-and-pixel-perfect-stroke-illustration-vector.jpg',
      bio: 'Experta en logística y gestión de inventarios.'
    },
    {
      name: 'Juan Pérez',
      position: 'Jefe de Servicio Técnico',
      image: 'https://static.vecteezy.com/system/resources/previews/016/895/137/original/person-icon-line-isolated-on-white-background-black-flat-thin-icon-on-modern-outline-style-linear-symbol-and-editable-stroke-simple-and-pixel-perfect-stroke-illustration-vector.jpg',
      bio: 'Mecánico certificado con especialización en bicicletas de alto rendimiento.'
    },
    {
      name: 'Ana Martínez',
      position: 'Gerente de Ventas',
      image: 'https://static.vecteezy.com/system/resources/previews/016/895/137/original/person-icon-line-isolated-on-white-background-black-flat-thin-icon-on-modern-outline-style-linear-symbol-and-editable-stroke-simple-and-pixel-perfect-stroke-illustration-vector.jpg',
      bio: 'Apasionada por conectar a los clientes con su bicicleta ideal.'
    }
  ];
}