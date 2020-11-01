import cats from './cats.json';
import * as Cat from 'data/models/cat';

/**
 * Seends all cats from the JSON to the database if they do not exist
 *
 * @export
 * @returns
 */
export default async function seedCats(): Promise<Cat.ICat[]> {
  const model = Cat.getModel();
  return Promise.all(
    cats.images.map(({ id, url }: { id: string; url: string }) =>
      model.findOneAndUpdate(
        // filter
        {
          id,
        },
        // payload
        {
          id,
          url,
        },
        // options
        {
          upsert: true,
          useFindAndModify: false,
        }
      )
    )
  );
}
