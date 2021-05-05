import {AllBioData} from './AllBioData';
import {Protein} from './protein';
import {ProteinClassification} from './protein-classification';
import {Sequence} from './sequence';
import {Organism} from './organism';
import {Gene} from './gene';

export class AndSegments {

  AndSegments: Array<string>;
  allBioData: AllBioData;

  constructor(allBioData: AllBioData) {
    this.allBioData = allBioData;
  }

  andFunction(seg: string): AllBioData {
    let filteredAllBioData = new AllBioData();
    this.AndSegments = seg.split(`AND`);

    for (const andSegment of this.AndSegments) {
      const subFilterAllBioData = this.subFilter(andSegment.trim(), andSegment.includes('NOT'));
      if (filteredAllBioData.proteinList == null) {
        filteredAllBioData = subFilterAllBioData;
      } else {
        filteredAllBioData.proteinList = subFilterAllBioData.proteinList
          .filter(p => filteredAllBioData.proteinList.indexOf(p) >= 0);
        filteredAllBioData.sequenceList = subFilterAllBioData.sequenceList
          .filter(p => filteredAllBioData.sequenceList.indexOf(p) >= 0);
        filteredAllBioData.geneList = subFilterAllBioData.geneList
          .filter(p => filteredAllBioData.geneList.indexOf(p) >= 0);
        filteredAllBioData.organismList = subFilterAllBioData.organismList
          .filter(p => filteredAllBioData.organismList.indexOf(p) >= 0);
        filteredAllBioData.proteinClassificationList = subFilterAllBioData.proteinClassificationList
          .filter(p => filteredAllBioData.proteinClassificationList.indexOf(p) >= 0);
      }
    }
    return filteredAllBioData;
  }

  private subFilter(val: string, isNegate: boolean) {
    const filteredAllBioData = new AllBioData();
    filteredAllBioData.proteinList = this.filterObjectKeys(
      this.allBioData.proteinList, val, isNegate) as Protein[];
    filteredAllBioData.organismList = this.filterObjectKeys(
      this.allBioData.organismList, val, isNegate) as Organism[];
    filteredAllBioData.geneList = this.filterObjectKeys(
      this.allBioData.geneList, val, isNegate) as Gene[];
    filteredAllBioData.sequenceList = this.filterObjectKeys(
      this.allBioData.sequenceList, val, isNegate) as Sequence[];
    filteredAllBioData.proteinClassificationList = this.filterObjectKeys(
      this.allBioData.proteinClassificationList, val, isNegate) as ProteinClassification[];
    return filteredAllBioData;
  }

  private filterObjectKeys(objs: object[], val: string, isNegate: boolean): object[] {
    const valTrimmed = val.replace('NOT', '').trim(); //NOT kati => kati
    return objs.filter(o => {
      if (isNegate) {
        return !Object.keys(o).some(property => {
          const propertyValue = o[property];
          if (propertyValue == null) { return false; }
          return propertyValue.toString().toLowerCase().includes(valTrimmed.toLowerCase());
        });
      } else {
        return Object.keys(o).some(property => {
          const propertyValue = o[property];
          if (propertyValue == null) { return false; }
          return propertyValue.toString().toLowerCase().includes(valTrimmed.toLowerCase());
        });
      }
    });
  }
}


