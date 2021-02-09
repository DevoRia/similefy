import {FileType} from "../../services/file/file-type";

export interface Project {
  id?: string;
  uid?: string;
  name?: string;
  type?: string | FileType,
  source?: string | string[]
}
