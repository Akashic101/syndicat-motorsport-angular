import { Clerk } from '@clerk/clerk-js';
import { environment, prod } from './environments/environment';

const clerkPubKey = environment.clerkPublishableKey;

(async () => {
  const clerk = new Clerk(clerkPubKey);
  await clerk.load();

  const appDiv = document.getElementById('app');
  if (!appDiv) return;

  if (prod.login) {
    if (clerk.user) {
      // Use <img> for profile picture and show username
      const username = clerk.user.username || clerk.user.firstName || clerk.user.lastName || clerk.user.emailAddresses[0]?.emailAddress || 'User';
      const imageUrl = clerk.user.imageUrl;
      appDiv.innerHTML = `
        <div style="display: flex; align-items: center; gap: 1rem;">
        <span style="font-size: 1.2rem; font-weight: 500;">${username}</span>
          <img src="${imageUrl}" alt="avatar" style="width: 48px; height: 48px; border-radius: 50%; box-shadow: 0 2px 8px #0001; object-fit: cover;" />
        </div>
      `;
    } else {
      appDiv.innerHTML = `
        <button id="clerk-signin-btn" class="p-button rounded text-sm font-semibold hover:bg-blue-700 transition duration-300" style="display: flex; align-items: center; gap: 0.5rem; font-size: 1.1rem;">
          <span class="pi pi-discord" style="font-size: 1.5rem;"></span>
          <span>Login with Discord</span>
        </button>
      `;
      const signInBtn = document.getElementById('clerk-signin-btn');
      if (signInBtn) {
        signInBtn.addEventListener('click', () => {
          clerk.openSignIn();
        });
      }
    }
  }
})();
