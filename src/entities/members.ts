export interface Member {
  id?: string;
  name: string;
  email: string;
  username: string;
  password: string;
  money: number;
  type: MemberType;
}

export interface CreateMemberCommand extends Member {}

export enum MemberType {
  ADMIN,
  USER,
}
