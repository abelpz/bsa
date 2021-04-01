import { resourcesList } from './config';

export const getResources = (appConfig) => {
  const resources = [];
  appConfig.forEach((el) => {
    if (resourcesList[el.i].type === 'bible') {
      resources.push(resourcesList[el.i].link);
    }
  });
  resources === [] && resources.push(resourcesList['rob'].link);
  return resources;
};

export const getUniqueResources = (appConfig) => {
  const resources = { ...resourcesList };
  appConfig.forEach((el) => {
    delete resources[el.i];
  });
  return resources;
};
