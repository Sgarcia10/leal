import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { HeaderComponent } from '../../components/header/header.component';
import { SharedModule } from '../../shared/shared.module';
import { ProfileComponent } from '../../components/profile/profile.component';
import { TransactionFeedComponent } from '../../components/transaction-feed/transaction-feed.component';
import { TransactionComponent } from '../../components/transaction/transaction.component';
import { DialogTransactionDetailComponent } from '../../components/dialog-transaction-detail/dialog-transaction-detail.component';
import { DateFilterComponent } from '../../components/date-filter/date-filter.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    ProfileComponent,
    TransactionFeedComponent,
    TransactionComponent,
    DialogTransactionDetailComponent,
    DateFilterComponent
  ],
  imports: [SharedModule],
  entryComponents: [DialogTransactionDetailComponent]
})
export class UserModule {}
