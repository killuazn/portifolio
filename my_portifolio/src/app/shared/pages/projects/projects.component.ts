import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Adicione esta importação

@Component({
  selector: 'app-projects',
  standalone: true, 
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  isModalOpen = false;  // Estado do modal
  currentImageUrl: string | null = null;  // URL da imagem para mostrar no modal

  // Função para abrir o modal e carregar a imagem correta
  openModal(modalId: string, imageUrl: string): void {
    this.isModalOpen = true;
    this.currentImageUrl = imageUrl; // Defina a URL da imagem clicada
  }

  // Função para fechar o modal
  closeModal(): void {
    this.isModalOpen = false;
    this.currentImageUrl = null; // Limpar a URL da imagem
  }
}
