import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideBaloiseDesignSystem } from '@baloise/design-system-components-angular/standalone'
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideBaloiseDesignSystem({defaults: {region: 'CH', language: 'en', allowedLanguages: ['de', 'en']}}),
    importProvidersFrom(HttpClientModule), provideHttpClient(), provideTransloco({
        config: { 
          availableLangs: ['en', 'de'],
          defaultLang: 'en',
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode(),
        },
        loader: TranslocoHttpLoader
      })
  ],
};
