import { atom } from 'recoil';

export const ProjectNameAtom = atom({
  key: 'ProjectName',
  default: '',
});
export const ProjectDateAtom = atom({
  key: 'ProjectDate',
  default: '',
});
export const BackendNumberAtom = atom({
  key: 'BackendNumber',
  default: 0,
});
export const FrontendNumberAtom = atom({
  key: 'FrontendNumber',
  default: 0,
});
export const DesignerNumberAtom = atom({
  key: 'DesignerNumber',
  default: 0,
});
export const PMNumberAtom = atom({
  key: 'PMNumber',
  default: 0,
});
export const ProjectDescriptionAtom = atom({
  key: 'ProjectDescription',
  default: '',
});
