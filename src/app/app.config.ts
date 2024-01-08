import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideBaloiseDesignSystem } from '@baloise/design-system-components-angular/standalone'
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideBaloiseDesignSystem(),
    importProvidersFrom(HttpClientModule)
  ],
};
