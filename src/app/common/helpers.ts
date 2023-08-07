import { LINKS } from './constants.ts';

export const getDepartments = () => {
  return Object.keys(LINKS);
};

export const getSubjects = (department: string) => {
  return Object.keys(LINKS[department]);
};

export const downloadFile = (department: string, subject: string) => {
  alert('download');
};
