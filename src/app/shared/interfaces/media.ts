export interface Marking {
  id: number;
  user: User;
  markingDate: string;
  openingMark: string;
  closingMark: boolean;
  article: string;
  credits: string;
  press: boolean;
  published: boolean;
}

export interface Permission {
  id: number;
  name: string;
}

export interface Report {
  exceededHours: string
  totalHours: string,
  missingHours: string,
  day: Date
}

export interface User {
  id: number;
  username: string;
  workload: string;
  password: string;
  permission: Permission
}



