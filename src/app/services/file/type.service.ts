import { Injectable } from '@angular/core';
import {FileType} from "./file-type";

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor() { }

  isSupportedType(type: string) {
    return (Object.values(FileType as any).includes(type))
  }

}
