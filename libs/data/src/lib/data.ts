export interface CardBodyDataConfig {
  startTime?: Date;
  endTime?: Date;
  users?: Pick<AccessUser, 'id'>[];
}

export type UserConfig = Exclude<AccessUser, 'password'>;

export interface AccessUser {
  id: string;
  user: string;
  password: string;
}

export interface LabelConfig {
  id: string;
  label: string;
  color: string;
}

export interface CardDataConfig {
  id: string;
  titleCard: string;
  description?: string;
  userId: Pick<AccessUser, 'id'>;
  labelsId?: Pick<LabelConfig, 'id'>[];
  sectionId: Pick<Sections, 'id'>;
  checkDone: boolean;
  cardBody?: CardBodyDataConfig;
}

export interface Sections {
  id: string;
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
}
