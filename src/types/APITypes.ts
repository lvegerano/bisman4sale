import { DeepOmit } from './DeepOmit';
import { CategoriesByNodeQuery } from '../API';

export type CategoriesByNode = DeepOmit<
  Exclude<CategoriesByNodeQuery['categoriesByNode'], null>,
  '__typename'
>;
