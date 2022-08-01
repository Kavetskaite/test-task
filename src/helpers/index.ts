import { Label } from "../interfaces";

export const getLabelTitle = (labels: Array<Label>, labelKey: string) => {
  const label = labels.find((item) => item.labelKey === labelKey);
  return label?.title || '';
}
