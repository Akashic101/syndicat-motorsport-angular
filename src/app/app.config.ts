import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { definePreset } from '@primeng/themes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

const SmTheme = definePreset(Aura, {
    semantic: {
        primary: {
            50: '#e0f9f6',
            100: '#b3f1e9',
            200: '#80e8dc',
            300: '#4ddfcc',
            400: '#26d9c0',
            500: '#00eecf',
            600: '#00c6ad',
            700: '#009f8b',
            800: '#00796a',
            900: '#004d40',
            950: '#00332b'
        }
    }
});

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    providePrimeNG({
        theme: {
            preset: SmTheme
        }
    }),
    provideHttpClient(withInterceptorsFromDi())
  ]
};
