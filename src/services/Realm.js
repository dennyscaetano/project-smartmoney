import Realm from 'realm';

import CategorySchema from '../schemas/CategorySchema';
import EntrySchema from '../schemas/EntrySchema';

import {getAllCategories} from './Categories';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchema, EntrySchema],
    schemaVersion: 2,
  });

  initDb(realm);

  return realm;
};

export const initDb = realm => {
  const categoriesLength = realm.objects('Category').length;
  console.log(`initDb :: Quantidade de categorias no BD: ${categoriesLength}`);

  if (categoriesLength === 0) {
    const categories = getAllCategories();

    console.log(`initDB :: Initing db...`);

    try {
      realm.write(() => {
        categories.forEach(category => {
          console.log(
            `initDB :: creating category: ${JSON.stringify(category)}`,
          );

          realm.create('Category', category, true);
        });
      });
    } catch (error) {}
  } else {
    console.log(`initDB :: Categories already exists... Skipping`);
  }
};
