import {AndSegments} from './AndSegments';
import {AllBioData} from './AllBioData';

export class OrSegments {

  private searchTextFromHome: any;
  private orSegments: Array<string>;
  private readonly allBioData: AllBioData;

  constructor(searchTextFromHome: string, allBioData: AllBioData) {
    this.searchTextFromHome = searchTextFromHome;
    this.allBioData = allBioData;
  }

  orFunction(): AllBioData {
    let filteredAllBioData = new AllBioData();

    this.orSegments = this.searchTextFromHome.split(`OR`);

    for (const orSegment of this.orSegments) {
      const orSegBioData = this.subFilter(orSegment.trim()); //to trim afairei to keno
      if (filteredAllBioData.proteinList == null) { //mpainei prwth fora
        filteredAllBioData = orSegBioData;
      } else {
        orSegBioData.proteinList.forEach(p =>
          filteredAllBioData.proteinList.push(p));

        orSegBioData.organismList.forEach(o =>
          filteredAllBioData.organismList.push(o));

        orSegBioData.geneList.forEach(g =>
          filteredAllBioData.geneList.push(g));

        orSegBioData.sequenceList.forEach(s =>
          filteredAllBioData.sequenceList.push(s));

        orSegBioData.proteinClassificationList.forEach(pc =>
          filteredAllBioData.proteinClassificationList.push(pc));
      }
    }

    return filteredAllBioData;
  }

  private subFilter(val: string): AllBioData {
    return new AndSegments(this.allBioData).andFunction(val);
  }
}
