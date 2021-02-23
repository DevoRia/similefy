import {Injectable} from '@angular/core';
const Diff = require('diff');

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor() {
  }

  doCompare(source) {
    let originalResult: string = this.clearTags(source[0])
    const diff = Diff.diffChars(originalResult || '', this.clearTags(source[1]) || '');
    let diffResult: string = ''
    for (const diffElement of diff) {
      let diffValue: string = diffElement.value;
      if (diffElement.added) {
        diffValue = `<i>${diffElement.value}</i>`;
      }
      if (diffElement.removed) {
        originalResult = originalResult.replace(diffElement.value, `<strong>${diffElement.value}</strong>`)
        diffValue = '';
      }
      diffResult = diffResult + diffValue;
    }
    return [originalResult , diffResult];
  }

  clearTags(value: string) {
    return value
      .replace(/<strong>/g, '')
      .replace(/<\/strong>/g, '')
      .replace(/<i>/g, '')
      .replace(/<\/i>/g, '')
      .replace(/<p>/g, '')
      .replace(/<\/p>/g, '')

  }

}
