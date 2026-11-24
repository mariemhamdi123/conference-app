
import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../models/conference';
import { ConferenceDetails } from '../conference-details/conference-details';

@Component({
  selector: 'app-conference-list',
  imports: [CommonModule, FormsModule, ConferenceDetails],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css'
})
export class ConferenceList {

  searchTerm: string = '';

  selectedConference = signal<Conference | null>(null);

  conferences: Conference[] = [
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Les nouveautés d’Angular 21 : signals, zoneless et contrôle de flux natif.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la gestion d’état réactive avec les signals.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 30,
      nbParticipants: 24
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Panorama des technologies web modernes.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 50,
      nbParticipants: 50
    },
    {
      id: 4,
      title: 'TypeScript Day',
      description: 'Édition 2025, déjà terminée.',
      date: new Date(2025, 4, 10),
      place: 'Monastir',
      maxParticipants: 80,
      nbParticipants: 80
    }
  ];

  get upcomingConferences(): Conference[] {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    return this.conferences.filter(conference =>
      conference.date >= today &&
      conference.title.toLowerCase().includes(
        this.searchTerm.toLowerCase().trim()
      )
    );
  }

  // Sélectionner une conférence
  selectConference(conference: Conference) {
    this.selectedConference.set(conference);
  }

  // Inscription à une conférence
  register(conference: Conference) {

    if (conference.nbParticipants < conference.maxParticipants) {

      const updatedConference = {
        ...conference,
        nbParticipants: conference.nbParticipants + 1
      };

      this.conferences = this.conferences.map(c =>
        c.id === conference.id ? updatedConference : c
      );

      if (this.selectedConference()?.id === conference.id) {
        this.selectedConference.set(updatedConference);
      }

    }
  }

}
