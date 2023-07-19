import { CUISINE_CATEGORY } from 'constants';

export const CuisineCategory = ({ onClick = () => { } }) => {
  return (
    <section className="grid grid-cols-10 gap-10 py-6">
      {CUISINE_CATEGORY.map((category) => {
        return (
          <div
            key={category.id}
            className="flex flex-col items-center group cursor-pointer"
            onClick={() => onClick(category.id)}
          >
            <div className="rounded-full overflow-hidden border p-4 group-hover:border-orange-500 group-hover:bg-orange-50">
              <img
                src={category.img}
                alt={category.name}
                className="w-10 h-10 object-fit"
              />
            </div>
            <p className="text-sm mt-2 group-hover:text-orange-500">{category.name}</p>
          </div>
        );
      })}
    </section>
  );
};
