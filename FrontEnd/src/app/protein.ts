import {Organism} from './organism';

export class Protein {
  accession_number: string;
  seq_id: string;
  Prosite_ID: string;
  prev_acc_numbers: string;
  entry_name: string;
  full_name: string;
  short_name: string;
  reviewed: boolean;
  integrated: string;
  first_date: Date = new Date();
  last_date: Date = new Date();
  pfunction: string;
  proteomes: string;
  setOrganisms: Organism[];
  isSelected: boolean;
}
