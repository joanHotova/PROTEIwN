import {Protein} from './protein';
import {Gene} from './gene';
import {Organism} from './organism';
import {Sequence} from './sequence';
import {ProteinClassification} from './protein-classification';

export class AllBioData {

  proteinList: Protein[];
  organismList: Organism[];
  geneList: Gene[];
  sequenceList: Sequence[];
  proteinClassificationList: ProteinClassification[];

}
