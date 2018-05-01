import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatDividerModule
} from '@angular/material';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule
  ],
  exports: [
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule
  ],
  declarations: [PaginaPrincipalComponent]
})
export class MaterialModule { }
