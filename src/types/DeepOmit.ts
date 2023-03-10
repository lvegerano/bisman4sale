type Primitive =
  | string
  // eslint-disable-next-line @typescript-eslint/ban-types
  | Function
  | number
  | boolean
  | symbol
  | undefined
  | null;

type DeepOmitArray<T extends unknown[], K> = {
  [P in keyof T]: DeepOmit<T[P], K>;
};

export type DeepOmit<T, K> = T extends Primitive
  ? T
  : {
      [P in Exclude<keyof T, K>]: T[P] extends infer TP
        ? TP extends Primitive
          ? TP // leave primitives and functions alone
          : TP extends unknown[]
          ? DeepOmitArray<TP, K> // Array special handling
          : DeepOmit<TP, K>
        : never;
    };
