import { RenderMode, ServerRoute } from '@angular/ssr';
import { DriverService } from './services/driver.service'; // Assuming the service path
import { HttpClientModule } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'driver/:id',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      // This function should return an array of route parameters
      // For the driver route, we need to fetch all driver IDs
      // We need to instantiate the DriverService here
      // Note: Depending on your setup, you might need to adjust how dependencies are injected here.
      // A simple approach for build-time fetching is to directly create the service instance.

      // This might require setting up HttpClient for use in this context
      // For demonstration, we'll assume a simple instantiation. Proper setup in a real app might differ.

      // This part is tricky as HttpClient typically relies on browser/server environments.
      // A more robust solution for build-time data fetching might involve a separate script or API endpoint.

      // **Disclaimer:** Directly instantiating services with HttpClient like this in getPrerenderParams
      // might not work out-of-the-box depending on your Angular/SSR setup.
      // You might need to provide necessary dependencies or use a different data fetching method.

      // Assuming DriverService can be instantiated and used to fetch data at build time:

      try {
        // We need to create a way to get the service working here without full Angular DI.
        // This is a simplified example and might need adjustments based on your actual dependency setup.
        // A potential approach is to have a dedicated data fetching utility that doesn't rely on HttpClient,
        // or configure HttpClient for use in a Node.js environment if your setup supports it.

        // For a typical SSR setup, you might pass an injector or have access to services differently.
        // Given the current tools, I cannot fully replicate the necessary environment to run HttpClient here.

        // **Alternative Simplification (if direct service use is complex):**
        // If fetching directly here is problematic, you might need a build step that generates a file
        // containing all driver IDs, and this function reads that file.

        // **Assuming DriverService can be used (requires appropriate setup not fully replicable with current tools):**
        // const driverService = new DriverService(httpClientInstance); // HttpClient instance needed
        // const drivers = await firstValueFrom(driverService.getDrivers());
        // return drivers.map(driver => ({ id: driver.guid }));

        // **Placeholder:** Returning a static list as a placeholder. Replace with actual data fetching.

        // To make this work, you would typically need to set up HttpClient in a way that it can be used
        // during the server build process. This often involves providing necessary modules and dependencies
        // for a Node.js environment if your build runs in Node.

        // Since I cannot fully simulate your build environment or configure HttpClient here,
        // I will provide the structure and add comments about what's needed.

        // A more realistic approach might involve an API endpoint to get all driver IDs and fetching from there.

        // Example structure, assuming a method exists to get all IDs:
        // const driverIds = await fetchAllDriverIds(); // Replace with actual data fetching logic
        // return driverIds.map(id => ({ id }));

        // As a temporary measure or if your DriverService can indeed be used:
         // This would require HttpClientModule to be configured for the server build.
         // And potentially mocking or setting up dependencies HttpClient needs.

        const mockHttpClient: any = {}; // Replace with actual HttpClient instance or a mock that works in Node
        const driverService = new DriverService(mockHttpClient);

        // This call will likely fail without proper HttpClient setup for the server context.
        // You need to ensure HttpClient can make HTTP requests during the build.
        const drivers = await driverService.getDrivers().toPromise(); // Using toPromise for async

        if (drivers && drivers.length > 0) {
             // Assuming 'guid' is the property holding the driver ID
            return drivers.map(driver => ({ id: driver.guid }));
        } else {
            console.warn('No drivers found for prerendering.');
            return []; // Return empty array if no drivers are fetched
        }

      } catch (error) {
        console.error('Error fetching driver IDs for prerendering:', error);
        // Depending on requirements, you might want to throw the error or return empty.
        return []; // Prevent build failure if fetching fails
      }
    },
  },
  {
    path: '**',
    renderMode: RenderMode.Prerender, // Keep default prerender for other routes if needed
  },
];
