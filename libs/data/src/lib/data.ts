export interface CardBodyDataConfig {
  startTime?: Date;
  endTime?: Date;
  users?: Array<userConfig>;
}

interface userConfig {
  user: string
}

export interface AccessUser extends userConfig{
  id: string
  password: string
}

interface LabelConfig {
  label: string
}

export interface CardDataConfig extends userConfig{
  id: string;
  title: string;
  description?: string;
  labels?: Array<LabelConfig>;
  labelSection: string;
  checkDone: boolean;
  cardBody?: CardBodyDataConfig;
}

export interface Sections {
  title: string;
}
