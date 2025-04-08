import type { CategoriesT } from "./categories";

type CategoriesData = {
  id: number;
  name: string;
  label: CategoriesT;
  icon: string;
}

export type CoopDetailsT = {
  id: number;
  name: string;
  is_verified: boolean;
  image_url: string;
  categories: CategoriesData[];
  short_desc: string;
  description: string;
  country: string;
  website_url: string;
  workers: number;
};