import { IMappa } from '../model/mappa.model';

export const mappaTransform = (data: IMappa) => {
  return [
    { text: 'MAPPA', style: 'sectionHeading' },
    {
      text: [{ text: 'MAPPAQ completed on ', style: 'fontBold' }, data.screenedDate || ''], margin: [0, 5, 0, 10]
    },
    {
      style: 'tableDefault',
      margin: [0, 15, 0, 15],
      table: {
        widths: ['*', '*'],
        body: [
          [{ text: 'Prisoner\'s current MAPPA category', style: 'fontBold' }, {
            text: 'Prisoner\'s current MAPPA level',
            style: 'fontBold'
          }],
          [data.mappaCategory || '', data.mappaLevel || '']
        ]
      }
    }
  ];
};
