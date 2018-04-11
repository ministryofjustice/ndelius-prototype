import { IMappa } from '../../mappa/model/mappa.model';

export const mappaTransform = (data: IMappa) => {
  return [
    { text: 'Multi Agency Public Protection Arrangements (MAPPA)', style: 'sectionHeading' },
    { text: 'What date was the prisoner screened for MAPPA (MAPPAQ completed)?', style: 'fieldHeading' },
    data.screenedDate,
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
          [data.mappaCategory, data.mappaLevel]
        ]
      }
    }
  ];
};
