export interface ImageFile {
  file: File;
  objectUrl: string;
}

export type RoleUnion = 'student' | 'teacher'; 

export interface RoleForm {
  role: RoleUnion;
  groupForm?: GroupForm;
  isRoleFormValid: boolean;
}

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

export interface userNicknameForm {
  username: string;
  nickname: string;
  isUserNicknameValid: boolean;
}

export interface SignUpForm {
  profileImg?: ImageFile;
  roleForm: RoleForm;
  userNicknameForm: userNicknameForm;
}