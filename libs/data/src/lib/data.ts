interface ICheckDone {
  startTime?: Date;
  endTime?: Date;
  check: boolean;
}

interface ICardCheckList {
  readonly checkId: string;
  startTime?: Date;
  endTime?: Date;
  userId?: Pick<AccessUser, 'id'>;
  checkList: boolean;
  description: string;
}

export type UserConfig = Exclude<AccessUser, 'password'>;

export interface AccessUser {
  readonly id: string;
  user: string;
  password: string;
}

export interface LabelConfig {
  readonly id: string;
  label: string;
  color: string;
}

export interface CardDataConfig {
  readonly id: string;
  titleCard: string;
  description?: string;
  userId: Pick<AccessUser, 'id'>;
  labelsId?: Pick<LabelConfig, 'id'>[];
  sectionId: Pick<Sections, 'id'>;
  checkDone: ICheckDone;
  cardCheckList?: ICardCheckList[];
}

export interface Sections {
  readonly id: string;
  title: string;
}

export const showDate = { year: 'numeric', month: 'short', day: 'numeric' };

type TCardProps = {
  users: UserConfig[];
  labels: LabelConfig[];
};

export interface CardProps extends TCardProps {
  card: CardDataConfig;
}

export interface CardColProps extends TCardProps {
  section: Sections;
  cards: CardDataConfig[];
}
