import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TransactionFeedComponent } from '../../components/transaction-feed/transaction-feed.component';
import { TransactionComponent } from '../../components/transaction/transaction.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    ProfileComponent,
    TransactionFeedComponent,
    TransactionComponent
  ],
  imports: [SharedModule]
})
export class UserModule {}
