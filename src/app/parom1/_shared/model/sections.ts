export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  saved?: boolean;
  valid?: boolean;
}

/**
 * Used for check report and also for meta reducers
 * @returns {Array<ISection>}
 */
export function sections(): Array<ISection> {
  return [

  ];
}
