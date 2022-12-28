export const vorstandAttributesMapping = {
  id: 'ID',
  name: 'Name',
  nachName: 'Nachname',
  title: 'Titel',
  number: 'Telefonnummer',
  email: 'E-Mail',
  pic: 'Foto'
};

export interface Vorstand {
  id: string;
  name: string;
  nachName: string;
  title: string;
  number: string;
  email: string;
  pic: string;
}
