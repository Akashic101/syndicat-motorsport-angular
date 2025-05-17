import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { 
  faPatreon, 
  faDiscord, 
  faYoutube, 
  faInstagram, 
  faBluesky
} from '@fortawesome/free-brands-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

interface Server {
  name: string;
  description: string;
  liveTiming: string;
  joinLink: string;
  contact: string;
}

interface PatreonTier {
  name: string;
  price: number;
  description: string;
  benefits: string[];
  recommended?: boolean;
}

@Component({
  selector: 'sm-support-us',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './support-us.component.html',
  styleUrl: './support-us.component.scss'
})
export class SupportUsComponent {
  // Font Awesome Icons
  faPatreon = faPatreon;
  faDiscord = faDiscord;
  faYoutube = faYoutube;
  faInstagram = faInstagram;
  faBluesky = faBluesky;
  faCheck = faCheck;

  patreonTiers: PatreonTier[] = [
    {
      name: 'Supporter',
      price: 2,
      description: 'Becoming a \'Supporter\' means you are directly helping to support our server and website running costs in addition to allowing us to continue hosting events and leagues. With your support we will be able to more effectively grow our community.',
      benefits: [
        'Discord role: Stand out in the Discord server as a supporter',
        'Early Access: Get access to league registration first',
        'Priority Slots: Get priority when joining leagues',
        'Discord Channels: Get access to special channels for supporters',
      ],
      recommended: true
    },
    {
      name: 'Supporter Plus',
      price: 6.50,
      description: 'The \'Supporter Plus\' tier offers all of the great benefits of our \'Supporter\' tier with a few extras thrown in to show you how much we appreciate your support. As extras over the \'Supporter\' tier we will provide you with a custom livery for our leagues (includes car and driver suit). You will also be able to commission one digital artwork, such as those features on this page, per month.',
      benefits: [
        'Early Access: Get access to league registration first',
        'Priority Slots: Get priority when joining leagues',
        'Discord Channels: Get access to special channels for supporters',
        'Discord role: Stand out in the Discord server as a supporter',
        'Custom Car and Driver Livery for leagues',
        'Digital Artwork Commissions (One per month)',
      ]
    },
    {
      name: 'Supporter Pro',
      price: 13,
      description: 'The \'Supporter Pro\' tier offers all of the great benefits of our \'Supporter Plus\' tier with the added benefit of being able to contribute to planning discussions.',
      benefits: [
        'Early Access: Get access to league registration first',
        'Priority Slots: Get priority when joining leagues',
        'Discord Channels: Get access to special channels for supporters',
        'Discord role: Stand out in the Discord server as a supporter',
        'AC Dedicated Server',
      ]
    }
  ];

  socialLinks = {
    discord: 'https://discord.gg/c3N6ZkAEue',
    bluesky: 'https://bsky.app/profile/synmotorsport.bsky.social',
    youtube: 'https://www.youtube.com/@syndicatemotorsport',
    instagram: 'https://www.instagram.com/syndicate.motorsport/',
    patreon: 'https://www.patreon.com/syndicate_motorsport'
  };

  servers: Server[] = [
    {
      name: 'Assetto Corsa #1',
      description: 'Primary server, usually used for Saturday nights.',
      liveTiming: 'http://138.201.226.34:8092/live-timing',
      joinLink: 'https://acstuff.ru/s/q:race/online/join?httpPort=8081&ip=138.201.226.34',
      contact: 'PirateLaserBeam'
    },
    {
      name: 'Assetto Corsa #2',
      description: 'Secondary server, usually used for Wednesday nights.',
      liveTiming: 'http://138.201.226.34:8192/live-timing',
      joinLink: 'https://acstuff.ru/s/q:race/online/join?httpPort=8182&ip=138.201.226.34',
      contact: 'Red'
    },
    {
      name: 'Assetto Corsa #3',
      description: 'Fun race server, usually used for non ELO enabled events.',
      liveTiming: 'http://138.201.226.34:8392/live-timing',
      joinLink: 'https://acstuff.ru/s/q:race/online/join?httpPort=8381&ip=138.201.226.34',
      contact: 'PirateLaserBeam'
    }
  ];
}
