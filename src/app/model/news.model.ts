export const newsAttributesMapping = {
  id: 'ID',
  title: 'newsTitel',
  shortText: 'shortText',
  text: 'newsText',
  pic: 'Foto',
};

export interface News {
  id: string;
  title: string;
  text: string;
  pic: string;
  shortText: string;
}
