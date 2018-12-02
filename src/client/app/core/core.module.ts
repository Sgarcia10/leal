import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { APP_CONTEXT_TOKEN, AppContext } from './context';
import { httpInterceptorProviders } from './http-interceptors';
import { DialogService } from './services/utils/dialog.service';

@NgModule({
  declarations: [],
  imports: [HttpClientModule],
  providers: [
    { provide: APP_CONTEXT_TOKEN, useValue: AppContext },
    httpInterceptorProviders
  ]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded, import it only in the AppModule');
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [DialogService]
    };
  }
}
