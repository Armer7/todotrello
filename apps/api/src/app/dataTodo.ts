import {
  CardDataConfig,
  Sections,
  AccessUser,
  LabelConfig,
} from '@todotrello/data';

export const sections: Sections[] = [
  {
    id: '1',
    title: 'New',
  },
  {
    id: '2',
    title: 'InProcess',
  },
  {
    id: '3',
    title: 'ReView',
  },
  {
    id: '4',
    title: 'Close',
  },
];

export const labels: LabelConfig[] = [
  {
    id: '1',
    label: 'export',
    color: 'yellow',
  },
  {
    id: '2',
    label: 'test',
    color: 'red',
  },
  {
    id: '3',
    label: 'local',
    color: 'green',
  },
];

export const accessUser: AccessUser[] = [
  {
    id: '1',
    user: 'Aleksey',
    password: '123',
  },
  {
    id: '2',
    user: 'Elen',
    password: '456',
  },
];

export const cardData: CardDataConfig[] = [
  {
    id: '1',
    titleCard: 'first card',
    description: 'It is first card',
    sectionId: {
      id: '1',
    },
    checkDone: {
      check: false,
    },
    userId: {
      id: '1',
    },
  },
  {
    id: '2',
    titleCard: 'second card',
    description: 'It is second card',
    sectionId: {
      id: '2',
    },
    checkDone: {
      startTime: new Date(Date.UTC(2021, 4, 20, 3, 0, 0)),
      check: false,
    },
    userId: {
      id: '1',
    },
    cardCheckList: [
      {
        checkId: '1',
        startTime: new Date(Date.UTC(2021, 4, 20, 3, 0, 0)),
        userId: { id: '1' },
        checkList: false,
        description: 'My part',
      },
    ],
  },
  {
    id: '3',
    titleCard: 'third card',
    description: 'It is third card',
    labelsId: [
      {
        id: '1',
      },
      {
        id: '2',
      },
      {
        id: '3',
      },
    ],
    sectionId: {
      id: '3',
    },
    checkDone: {
      startTime: new Date(Date.UTC(2021, 4, 22, 3, 0, 0)),
      endTime: new Date(Date.UTC(2021, 4, 25, 3, 0, 0)),
      check: true,
    },
    userId: {
      id: '2',
    },
    cardCheckList: [
      {
        checkId: '1',
        startTime: new Date(Date.UTC(2021, 4, 22, 3, 0, 0)),
        endTime: new Date(Date.UTC(2021, 4, 25, 3, 0, 0)),
        userId: { id: '1' },
        checkList: false,
        description: 'Setting',
      },
    ],
  },
  {
    id: '4',
    titleCard: 'fourth card',
    description: 'It is fourth card',
    labelsId: [
      {
        id: '2',
      },
      {
        id: '3',
      },
    ],
    sectionId: {
      id: '4',
    },
    checkDone: {
      startTime: new Date(Date.UTC(2021, 4, 26, 3, 0, 0)),
      endTime: new Date(Date.UTC(2021, 4, 22, 15, 0, 0)),
      check: true,
    },
    userId: {
      id: '2',
    },
    cardCheckList: [
      {
        checkId: '1',
        startTime: new Date(Date.UTC(2021, 4, 26, 3, 0, 0)),
        endTime: new Date(Date.UTC(2021, 4, 22, 15, 0, 0)),
        userId: { id: '1' },
        checkList: true,
        description: 'set param',
      },
    ],
  },
];
