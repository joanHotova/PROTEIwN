import {Protein} from './protein';

export class Organism {
  taxID: number;
  scientific_name: string;
  mnemonic: string;
  taxonomy_navigation: string;
  setProteins: Protein[];
  isSelected: boolean;
}
