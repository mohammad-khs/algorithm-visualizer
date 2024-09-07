export type SortingAlgorithmType =
  | "bubble"
  | "insertion"
  | "selection"
  | "merge"
  | "quick";

export type SelectOptionsType = {
  label: string;
  value: string;
};

export type AnimationArrayType = [number[], boolean][]