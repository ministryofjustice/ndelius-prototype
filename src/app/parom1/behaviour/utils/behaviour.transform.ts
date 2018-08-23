import { IBehaviour } from '../model/behaviour.model';

export class BehaviourTransform {

  /**
   *
   * @param {IPrisonerDetails} data
   * @returns {Object}
   */
  static process(data: IBehaviour): Array<any> {
    return [
      { text: 'Behaviour in prison', style: 'sectionHeading' },
      data.behaviourDetail || '',
      { text: 'ROTL', style: 'fieldHeading' },
      data.rotlInformation || ''
    ];
  }

}
