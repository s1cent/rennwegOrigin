export const zeitenAttributesMapping = {
  id: 'ID',
  mannschaft: 'Mannschaft',
  wochentag: 'Wochentag',
  zeit: 'Zeiten',
  pic: 'Foto',
  email: 'E-Mail',
  telefonnummer: 'Telefonnummer',
  titel: 'Titel'
};

export interface Zeiten {
  id: string;
  mannschaft: string;
  wochentag: string;
  zeit: string;
}
