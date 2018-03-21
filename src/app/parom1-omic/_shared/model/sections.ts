export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
  saved?: boolean;
  valid?: boolean;
}

export function sections(): Array<ISection> {
  return [
    {
      route: '/parom1-omic/offender-details',
      label: 'Prisoner details',
      state: 'prisonerDetails'
    }
  ];
}
