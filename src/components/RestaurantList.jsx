export const RestaurantList = ({ data }) => {
  return (
    <div className="grid grid-cols-3 gap-6">
      {data.map((store) => {
        return (
          <div>
            {store.name}
          </div>
        )
      })}
    </div>
  )
}