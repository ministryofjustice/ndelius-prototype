export interface ISection {
  route: string;
  label: string;
  state: string;
  dataOnly?: boolean;
  saved?: boolean;
  valid?: boolean;
}

/**
 * Used for check report and also for meta reducers
 * @returns {Array<ISection>}
 */
export function sections(): Array<ISection> {
  return [
    {
      route: '/parom1/prisoner-details',
      label: 'Prisoner details',
      state: 'prisonerDetails'
    },
    {
      dataOnly: true,
      route: '/parom1/signature',
      label: 'Signature and date',
      state: 'signature'
    }
  ];
}
