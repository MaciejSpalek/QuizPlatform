import { ISingleOption } from '../SelectInput.model';

export interface ISelect {
  handleOnClick: (callback: () => ISingleOption) => void;
  options: ISingleOption[];
  selectCaption: string;
  type: string;
}
