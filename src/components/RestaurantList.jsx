import { CUISINE_CATEGORY } from "constants";
import { Icon, Tag } from "components";

export const RestaurantList = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((store) => {
        const { cuisineType, commentCount, distance, id, img, name, priceRange, rate } = store;
        return (
          <figure key={id} className="relative rounded overflow-hidden border shadow group cursor-pointer">
            <div className="overflow-hidden aspect-video">
              <img src={img} alt={name} className="transition-all group-hover:scale-110" />
            </div>
            <figcaption className="p-4">
              <h3 className="text-lg font-bold mb-1 group-hover:text-orange-500">{name}</h3>
              <div className="space-x-2 font-light text-xs">
                <span><Icon name="star" size="sm" className="mr-0.5 mb-0.5" />{rate}</span>
                <span>{commentCount} 個評論</span>
                <span>${priceRange[0]} - ${priceRange[1]}</span>
                <span>{distance}公尺</span>
              </div>
              <div className="space-x-1 my-2">
                <Tag color="yellow">{CUISINE_CATEGORY[cuisineType].name}</Tag>
                <Tag>聚會首選</Tag>
                <Tag>價格實惠</Tag>
              </div>
              <p className="font-light text-xs mb-2">今日可訂位時間</p>
              <div className="space-x-2">
                <div className="border rounded py-1 px-2 inline-flex flex-col hover:bg-gray-100">
                  <p className="text-sm font-bold">5:00PM</p>
                  <p className="text-xs text-gray-500 font-light">全位可坐</p>
                </div>
                <div className="border rounded py-1 px-2 inline-flex flex-col hover:bg-gray-100">
                  <p className="text-sm font-bold">5:30PM</p>
                  <p className="text-xs text-gray-500 font-light">吧台座位</p>
                </div>
                <div className="border rounded py-1 px-2 inline-flex flex-col hover:bg-gray-100">
                  <p className="text-sm font-bold">6:00PM</p>
                  <p className="text-xs text-gray-500 font-light">吧台座位</p>
                </div>
              </div>
            </figcaption>
          </figure>
        )
      })}
    </div>
  )
}