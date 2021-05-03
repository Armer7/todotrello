import {CardDataConfig, Sections, AccessUser} from "@todotrello/data";

export const sections: Sections[] = [
  {
    title: 'New'
  },
    {
    title: 'InProcess'
  },
    {
    title: 'ReView'
  },
    {
    title: 'Close'
  },

];

export const accessUser: AccessUser[] = [
  {
    id: '1',
  user: '@Aleksey',
  password: '123'
  },
   {
    id: '2',
  user: '@Elen',
  password: '456'
  },

];


export const cardData: CardDataConfig[] = [
  {
  id: '1',
    title: 'first card',
    description: 'It is first card',
    labelSection: 'New',
    checkDone: false,
    user: '@Aleksey'
  },
  {
    id: '2',
    title: 'second card',
    description: 'It is second card',
    labelSection: 'InProcess',
    checkDone: false,
    user: '@Aleksey',
    cardBody: {
      startTime: new Date(1618861032669),
      users: [
        {user: '@Aleksey'},
        {user: '@Elen'}
      ]
    }
  },
  {
    id: '3',
    title: 'third card',
    description: 'It is third card',
    labels: [
      {
        label: 'export'
      }
    ],
    labelSection: 'ReView',
    checkDone: true,
    user: '@Aleksey',
    cardBody: {
      startTime: new Date(1618861032669),
      endTime: new Date( 1618861432000),
      users: [
        {user: '@Aleksey'},
      ]
    }
  },
    {
    id: '4',
    title: 'fourth card',
    description: 'It is fourth card',
    labels: [
      {
        label: 'test'
      }
    ],
    labelSection: 'Close',
    checkDone: true,
    user: '@Elen',
    cardBody: {
      startTime: new Date(1618861032669),
      endTime: new Date( 1618861432000),
      users: [
        {user: '@Aleksey'},
      ]
    }
  },

];