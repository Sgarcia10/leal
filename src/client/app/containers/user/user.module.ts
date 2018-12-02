import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [UserComponent, HeaderComponent],
  imports: [SharedModule]
})
export class UserModule {}
