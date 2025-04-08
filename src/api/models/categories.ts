export type CategoriesT = 
"logo" 
| "industry" 
| "coffee" 
| "beer" 
| "music";

export type CategoryT = {
  id: number;
  name: string;
  label: CategoriesT;
  icon: string;
};