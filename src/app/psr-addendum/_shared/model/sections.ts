export interface ISection {
  route: string;
  label: string;
  state: string;
  interactions?: Array<Object>;
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
      route: '/psr-addendum/offender-details',
      label: 'Offender details',
      state: 'offenderDetails'
    },
    {
      route: '/psr-addendum/court-details',
      label: 'Sentencing court details',
      state: 'courtDetails'
    },
    {
      route: '/psr-addendum/addendum-detail',
      label: 'Addendum detail',
      state: 'addendumDetail'
    },
    {
      dataOnly: true,
      route: '/psr-addendum/signature',
      label: 'Sign and date your addendum',
      state: 'signature'
    }
  ];
}
