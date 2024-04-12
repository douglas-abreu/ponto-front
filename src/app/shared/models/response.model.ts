export interface Response<T> {
  status: number;
  data?: T[] | T | Data<T> | any;
  message?: string;
}

export interface Data<T> {
  content: T[];
}
