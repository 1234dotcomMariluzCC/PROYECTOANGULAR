
import { Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { ContactoComponent } from './contacto/contacto.component';


export const routes: Routes = [
    {path:'menu',component:MenuComponent},
    {path:'perfil',component:PerfilComponent},
    {path:'experiencia',component:ExperienciaComponent},
    {path:'habilidades',component:HabilidadesComponent},
    {path:'contacto',component:ContactoComponent},

];
