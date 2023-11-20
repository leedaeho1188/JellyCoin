export interface ImageFile {
  file: File;
  objectUrl: string;
}

export type Role = 'student' | 'teacher'; 

export interface GroupForm {
  id?: number;
  code?: string;
  newForm?: newGroupForm;
}

export interface newGroupForm {
  name: string;
  description: string;
  address: string;
  addressDetail: string;
}