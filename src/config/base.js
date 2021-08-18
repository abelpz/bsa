export const server = 'https://qa.door43.org';

export const defaultTplBible = {
  ru: [
    { w: 4, h: 10, x: 0, y: 0, i: 'ru_rob', minH: 4, minW: 2 },
    { w: 4, h: 10, x: 4, y: 0, i: 'ru_rsb', minH: 4, minW: 2 },
    { w: 4, h: 10, x: 8, y: 0, i: 'ru_tn', minH: 4, minW: 2 },
  ],
  en: [
    { w: 4, h: 10, x: 0, y: 0, i: 'en_ueb', minH: 4, minW: 2 },
    { w: 4, h: 10, x: 4, y: 0, i: 'en_ust', minH: 4, minW: 2 },
    { w: 4, h: 10, x: 8, y: 0, i: 'el-x-koine_ugnt', minH: 4, minW: 2 },
  ],
};

export const defaultTplOBS = {
  ru: [
    { w: 6, h: 10, x: 0, y: 0, i: 'ru_obs', minH: 4, minW: 2 },
    { w: 6, h: 5, x: 6, y: 0, i: 'ru_obs-tn', minH: 4, minW: 2 },
    { w: 6, h: 5, x: 6, y: 5, i: 'ru_obs-tq', minH: 4, minW: 2 },
  ],
  en: [
    { w: 6, h: 10, x: 0, y: 0, i: 'en_obs', minH: 4, minW: 2 },
    { w: 6, h: 5, x: 6, y: 0, i: 'en_obs-tn', minH: 4, minW: 2 },
    { w: 6, h: 5, x: 6, y: 5, i: 'en_obs-tq', minH: 4, minW: 2 },
  ],
};

export const defaultBibleReference = {
  ru: {
    bookId: 'mat',
    chapter: 1,
    verse: 1,
  },
  en: {
    bookId: 'mat',
    chapter: 1,
    verse: 1,
  },
};

export const defaultOBSReference = {
  ru: {
    bookId: 'obs',
    chapter: 1,
    verse: 1,
  },
  en: {
    bookId: 'obs',
    chapter: 1,
    verse: 1,
  },
};

export const languages = ['en', 'ru'];

/* CORE */

export const defaultCard = { w: 4, h: 4, x: 0, y: 99, minH: 4, minW: 2 };

export const singleChaptersBookID = ['oba', '2jn', '3jn', 'jud', 'phm'];

export const bibleList = [
  {
    identifier: 'gen',
    isset: false,
    sort: 1,
    categories: 'bible-ot',
  },
  {
    identifier: 'exo',
    isset: false,
    sort: 2,
    categories: 'bible-ot',
  },
  {
    identifier: 'lev',
    isset: false,
    sort: 3,
    categories: 'bible-ot',
  },
  {
    identifier: 'num',
    isset: false,
    sort: 4,
    categories: 'bible-ot',
  },
  {
    identifier: 'deu',
    isset: false,
    sort: 5,
    categories: 'bible-ot',
  },
  {
    identifier: 'jos',
    isset: false,
    sort: 6,
    categories: 'bible-ot',
  },
  {
    identifier: 'jdg',
    isset: false,
    sort: 7,
    categories: 'bible-ot',
  },
  {
    identifier: 'rut',
    isset: false,
    sort: 8,
    categories: 'bible-ot',
  },
  {
    identifier: '1sa',
    isset: false,
    sort: 9,
    categories: 'bible-ot',
  },
  {
    identifier: '2sa',
    isset: false,
    sort: 10,
    categories: 'bible-ot',
  },
  {
    identifier: '1ki',
    isset: false,
    sort: 11,
    categories: 'bible-ot',
  },
  {
    identifier: '2ki',
    isset: false,
    sort: 12,
    categories: 'bible-ot',
  },
  {
    identifier: '1ch',
    isset: false,
    sort: 13,
    categories: 'bible-ot',
  },
  {
    identifier: '2ch',
    isset: false,
    sort: 14,
    categories: 'bible-ot',
  },
  {
    identifier: 'ezr',
    isset: false,
    sort: 15,
    categories: 'bible-ot',
  },
  {
    identifier: 'neh',
    isset: false,
    sort: 16,
    categories: 'bible-ot',
  },
  {
    identifier: 'est',
    isset: false,
    sort: 17,
    categories: 'bible-ot',
  },
  {
    identifier: 'job',
    isset: false,
    sort: 18,
    categories: 'bible-ot',
  },
  {
    identifier: 'psa',
    isset: false,
    sort: 19,
    categories: 'bible-ot',
  },
  {
    identifier: 'pro',
    isset: false,
    sort: 20,
    categories: 'bible-ot',
  },
  {
    identifier: 'ecc',
    isset: false,
    sort: 21,
    categories: 'bible-ot',
  },
  {
    identifier: 'sng',
    isset: false,
    sort: 22,
    categories: 'bible-ot',
  },
  {
    identifier: 'isa',
    isset: false,
    sort: 23,
    categories: 'bible-ot',
  },
  {
    identifier: 'jer',
    isset: false,
    sort: 24,
    categories: 'bible-ot',
  },
  {
    identifier: 'lam',
    isset: false,
    sort: 25,
    categories: 'bible-ot',
  },
  {
    identifier: 'ezk',
    isset: false,
    sort: 26,
    categories: 'bible-ot',
  },
  {
    identifier: 'dan',
    isset: false,
    sort: 27,
    categories: 'bible-ot',
  },
  {
    identifier: 'hos',
    isset: false,
    sort: 28,
    categories: 'bible-ot',
  },
  {
    identifier: 'jol',
    isset: false,
    sort: 29,
    categories: 'bible-ot',
  },
  {
    identifier: 'amo',
    isset: false,
    sort: 30,
    categories: 'bible-ot',
  },
  {
    identifier: 'oba',
    isset: false,
    sort: 31,
    categories: 'bible-ot',
  },
  {
    identifier: 'jon',
    isset: false,
    sort: 32,
    categories: 'bible-ot',
  },
  {
    identifier: 'mic',
    isset: false,
    sort: 33,
    categories: 'bible-ot',
  },
  {
    identifier: 'nam',
    isset: false,
    sort: 34,
    categories: 'bible-ot',
  },
  {
    identifier: 'hab',
    isset: false,
    sort: 35,
    categories: 'bible-ot',
  },
  {
    identifier: 'zep',
    isset: false,
    sort: 36,
    categories: 'bible-ot',
  },
  {
    identifier: 'hag',
    isset: false,
    sort: 37,
    categories: 'bible-ot',
  },
  {
    identifier: 'zec',
    isset: false,
    sort: 38,
    categories: 'bible-ot',
  },
  {
    identifier: 'mal',
    isset: false,
    sort: 39,
    categories: 'bible-ot',
  },
  {
    identifier: 'mat',
    isset: false,
    sort: 40,
    categories: 'bible-nt',
  },
  {
    identifier: 'mrk',
    isset: false,
    sort: 41,
    categories: 'bible-nt',
  },
  {
    identifier: 'luk',
    isset: false,
    sort: 42,
    categories: 'bible-nt',
  },
  {
    identifier: 'jhn',
    isset: false,
    sort: 43,
    categories: 'bible-nt',
  },
  {
    identifier: 'act',
    isset: false,
    sort: 44,
    categories: 'bible-nt',
  },
  {
    identifier: 'jas',
    isset: false,
    sort: 59,
    categories: 'bible-nt',
  },
  {
    identifier: '1pe',
    isset: false,
    sort: 60,
    categories: 'bible-nt',
  },
  {
    identifier: '2pe',
    isset: false,
    sort: 61,
    categories: 'bible-nt',
  },
  {
    identifier: '1jn',
    isset: false,
    sort: 62,
    categories: 'bible-nt',
  },
  {
    identifier: '2jn',
    isset: false,
    sort: 63,
    categories: 'bible-nt',
  },
  {
    identifier: '3jn',
    isset: false,
    sort: 64,
    categories: 'bible-nt',
  },
  {
    identifier: 'jud',
    isset: false,
    sort: 65,
    categories: 'bible-nt',
  },
  {
    identifier: 'rom',
    isset: false,
    sort: 45,
    categories: 'bible-nt',
  },
  {
    identifier: '1co',
    isset: false,
    sort: 46,
    categories: 'bible-nt',
  },
  {
    identifier: '2co',
    isset: false,
    sort: 47,
    categories: 'bible-nt',
  },
  {
    identifier: 'gal',
    isset: false,
    sort: 48,
    categories: 'bible-nt',
  },
  {
    identifier: 'eph',
    isset: false,
    sort: 49,
    categories: 'bible-nt',
  },
  {
    identifier: 'php',
    isset: false,
    sort: 50,
    categories: 'bible-nt',
  },
  {
    identifier: 'col',
    isset: false,
    sort: 51,
    categories: 'bible-nt',
  },
  {
    identifier: '1th',
    isset: false,
    sort: 52,
    categories: 'bible-nt',
  },
  {
    identifier: '2th',
    isset: false,
    sort: 53,
    categories: 'bible-nt',
  },
  {
    identifier: '1ti',
    isset: false,
    sort: 54,
    categories: 'bible-nt',
  },
  {
    identifier: '2ti',
    isset: false,
    sort: 55,
    categories: 'bible-nt',
  },
  {
    identifier: 'tit',
    isset: false,
    sort: 56,
    categories: 'bible-nt',
  },
  {
    identifier: 'phm',
    isset: false,
    sort: 57,
    categories: 'bible-nt',
  },
  {
    identifier: 'heb',
    isset: false,
    sort: 58,
    categories: 'bible-nt',
  },
  {
    identifier: 'rev',
    isset: false,
    sort: 66,
    categories: 'bible-nt',
  },
  {
    identifier: 'obs',
    isset: false,
    sort: 70,
    categories: 'obs',
  },
];
