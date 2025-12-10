import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// ============================================================
// COMPONENTE DE CONTACTO
// Formulario reactivo con validaciones completas
// ============================================================
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.css']
})
export class ContactComponent {
  // ============================================================
  // PROPIEDADES
  // ============================================================
  
  // FormGroup que contiene todos los controles del formulario
  contactForm!: FormGroup;
  
  // Estado de envío (evita múltiples submissions)
  submitting = false;
  
  // Estado de éxito (mostrar mensaje de confirmación)
  submitted = false;

  // ============================================================
  // CONSTRUCTOR
  // ============================================================
  constructor(private fb: FormBuilder) {
    // Inicializamos el formulario con validaciones
    this.contactForm = this.fb.group({
      nombre: [
        '', 
        [
          Validators.required,           // Campo obligatorio
          Validators.minLength(2),        // Mínimo 2 caracteres
          Validators.maxLength(100)       // Máximo 100 caracteres
        ]
      ],
      email: [
        '', 
        [
          Validators.required,           // Campo obligatorio
          Validators.email,              // Formato email válido
          Validators.maxLength(150)      // Máximo 150 caracteres
        ]
      ],
      telefono: [
        '', 
        [
          // OPCIONAL: Solo valida si se llena
          Validators.pattern(/^[0-9]{10}$/)  // Exactamente 10 dígitos numéricos
        ]
      ],
      asunto: [
        '', 
        [
          Validators.required            // Campo obligatorio
        ]
      ],
      mensaje: [
        '', 
        [
          Validators.required,           // Campo obligatorio
          Validators.minLength(10),       // Mínimo 10 caracteres
          Validators.maxLength(1000)      // Máximo 1000 caracteres
        ]
      ]
    });
  }

  // ============================================================
  // GETTERS: Acceso rápido a los controles del formulario
  // ============================================================
  
  /**
   * Devuelve los controles del formulario
   * Permite acceder fácilmente desde el template como: f.nombre
   */
  get f(): any {
    return this.contactForm.controls;
  }

  // ============================================================
  // MÉTODO: CANCELAR
  // Limpia el formulario y resetea estados
  // ============================================================
  cancelar(): void {
    // Si está enviando, no permitir cancelar
    if (this.submitting) {
      return;
    }

    // Resetear formulario a valores iniciales
    this.contactForm.reset();
    
    // Resetear estado de submitted
    this.submitted = false;
    
    // Log para desarrollo
    console.log('Formulario cancelado y reseteado');
  }

  // ============================================================
  // MÉTODO: ENVIAR
  // Valida y procesa el formulario
  // ============================================================
  enviar(): void {
    // Marcar todos los campos como tocados para mostrar errores
    this.contactForm.markAllAsTouched();

    // VALIDACIÓN: Si el formulario es inválido, no continuar
    if (this.contactForm.invalid) {
      console.warn('Formulario inválido. Revise los campos.');
      
      // Scroll al primer campo con error (opcional)
      setTimeout(() => {
        const firstInvalidControl = document.querySelector('.form-input.is-invalid, .form-textarea.is-invalid');
        if (firstInvalidControl) {
          firstInvalidControl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      return;
    }

    // Activar estado de envío (deshabilita botones)
    this.submitting = true;

    try {
      // ============================================================
      // PREPARACIÓN DE DATOS
      // ============================================================
      
      // Extraer valores y hacer trim (eliminar espacios)
      const payload = {
        nombre: (this.f.nombre.value || '').toString().trim(),
        email: (this.f.email.value || '').toString().trim().toLowerCase(),
        telefono: (this.f.telefono.value || '').toString().trim(),
        asunto: (this.f.asunto.value || '').toString().trim(),
        mensaje: (this.f.mensaje.value || '').toString().trim(),
        createdAt: new Date().toISOString(),  // Timestamp de creación
        source: 'Formulario de Contacto Web'
      };

      // VALIDACIÓN ADICIONAL: Verificar que los campos obligatorios no estén vacíos después del trim
      if (!payload.nombre || !payload.email || !payload.asunto || !payload.mensaje) {
        throw new Error('Los campos obligatorios no pueden estar vacíos');
      }

      // Validar formato de email adicional
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(payload.email)) {
        throw new Error('Formato de email inválido');
      }

      // ============================================================
      // GENERACIÓN Y DESCARGA DEL JSON
      // ============================================================
      
      // Convertir objeto a JSON con formato legible
      const jsonText = JSON.stringify(payload, null, 2);
      
      // Crear Blob (Binary Large Object) con el contenido JSON
      const blob = new Blob([jsonText], { type: 'application/json' });
      
      // Crear URL temporal para el Blob
      const url = window.URL.createObjectURL(blob);
      
      // Crear elemento <a> temporal para la descarga
      const link = document.createElement('a');
      link.href = url;
      link.download = `contacto_${Date.now()}.json`;  // Nombre único con timestamp
      
      // Agregar al DOM (necesario en algunos navegadores)
      document.body.appendChild(link);
      
      // Simular click para iniciar descarga
      link.click();
      
      // Limpiar: remover elemento del DOM
      document.body.removeChild(link);
      
      // Liberar memoria: revocar URL temporal
      window.URL.revokeObjectURL(url);

      // ============================================================
      // ÉXITO: Resetear formulario y mostrar confirmación
      // ============================================================
      
      this.submitted = true;
      this.contactForm.reset();
      
      console.log('✅ Formulario enviado correctamente:', payload);

      // Scroll al mensaje de éxito
      setTimeout(() => {
        const successMessage = document.querySelector('.success-message');
        if (successMessage) {
          successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);

      // Opcional: Ocultar mensaje de éxito después de 8 segundos
      setTimeout(() => {
        this.submitted = false;
      }, 8000);

    } catch (error) {
      // ============================================================
      // MANEJO DE ERRORES
      // ============================================================
      
      console.error('❌ Error al procesar el formulario:', error);
      
      // Mostrar alerta al usuario
      const errorMessage = error instanceof Error ? error.message : 'Error desconocido';
      alert(`No fue posible procesar el formulario: ${errorMessage}\nPor favor, intente nuevamente.`);
      
    } finally {
      // ============================================================
      // LIMPIEZA: Siempre desactivar estado de envío
      // ============================================================
      this.submitting = false;
    }
  }

  // ============================================================
  // MÉTODOS HELPER: Utilidades para validación en template
  // ============================================================
  
  /**
   * Verifica si un campo tiene un error específico y ha sido tocado
   * @param fieldName Nombre del campo
   * @param errorType Tipo de error (required, email, minlength, pattern, etc.)
   */
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.hasError(errorType) && field.touched);
  }

  /**
   * Verifica si un campo es inválido y ha sido tocado
   * @param fieldName Nombre del campo
   */
  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && field.touched);
  }

  /**
   * Verifica si un campo es válido y ha sido tocado
   * @param fieldName Nombre del campo
   */
  isFieldValid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.valid && field.touched);
  }

  /**
   * Obtiene el mensaje de error de longitud mínima
   * @param fieldName Nombre del campo
   */
  getMinLengthError(fieldName: string): number {
    const field = this.contactForm.get(fieldName);
    return field?.errors?.['minlength']?.requiredLength || 0;
  }

  /**
   * Obtiene el número de caracteres actuales en un campo
   * @param fieldName Nombre del campo
   */
  getCharCount(fieldName: string): number {
    const field = this.contactForm.get(fieldName);
    return field?.value?.length || 0;
  }

  /**
   * Obtiene el número máximo de caracteres permitidos
   * @param fieldName Nombre del campo
   */
  getMaxLength(fieldName: string): number {
    const field = this.contactForm.get(fieldName);
    return field?.errors?.['maxlength']?.requiredLength || 1000;
  }
}