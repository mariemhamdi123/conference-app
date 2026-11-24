
import { Component, input, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Conference } from '../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [CommonModule],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css'
})
export class ConferenceDetails {

  // Recevoir la conférence depuis le parent
  conference = input<Conference | null>(null);

  // Envoyer un événement vers le parent
  inscription = output<Conference>();

  register() {

    const conf = this.conference();

    if (conf && conf.nbParticipants < conf.maxParticipants) {
      this.inscription.emit(conf);
    }

  }

}
