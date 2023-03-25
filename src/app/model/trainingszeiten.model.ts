export const zeitenAttributesMapping = {
  id: 'ID',
  mannschaft: 'Mannschaft',
  wochentag: 'Wochentag',
  zeit: 'Zeiten',
  typ:'Typ'
};

export interface Zeiten {
  id: string;
  mannschaft: string;
  wochentag: string;
  zeit: string;
  typ: string;
}
