export const trainerAttributesMapping = {
  id: 'ID',
  name: 'Name',
  nachName: 'Nachname',
  position: 'Position',
  pic: 'Foto',
  email: 'E-Mail',
  telefonnummer: 'Telefonnummer',
  titel: 'Titel'
};

export interface Trainer {
  id: string;
  name: string;
  nachName: string;
  position: string;
  pic: string;
  email: string;
  telefonnummer: string;
  titel: string;
}
