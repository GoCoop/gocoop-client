export type Res<T> = {
  data: T | null;
  success: boolean;
  message: string;
};
