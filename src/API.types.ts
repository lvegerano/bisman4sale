import { DeepOmit } from './types/DeepOmit';
import { GetCompCategoryQuery } from './API';

export type CompCategoryType = DeepOmit<GetCompCategoryQuery['getCompCategory'], '__typename'>;
