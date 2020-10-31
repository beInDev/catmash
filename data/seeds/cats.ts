import cats from "./cats.json";
import * as Cat from "data/models/cat";

export default async function seedCats() {
  const model = Cat.getModel();
  return Promise.all(
    cats.images.map(({ id, url }: { id: string; url: string }) =>
      model.findOneAndUpdate(
        {
          id,
        },
        {
          id,
          url,
        },
        {
          upsert: true,
        }
      )
    )
  );
}
