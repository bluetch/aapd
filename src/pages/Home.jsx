import { useEffect, useState } from "react";
import { Button, CuisineCategory, Header, Footer, Icon, RestaurantList, SearchBanner } from "../components";
export const Home = () => {
  const [stores, setStores] = useState([]);

  const fetchStore = async () => {
    const response = await fetch("data/stores.json");
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    fetchStore();
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex-grow">
        <SearchBanner />
        <div className="container mx-auto">
          <CuisineCategory />
          <h3 className="font-bold text-xl">請選擇喜歡的餐廳</h3>
          <p className="font-light mt-2">找到
            <strong className="mx-1 font-bold">258</strong>
            間符合在
            <strong className="mx-1 font-bold">台北市</strong>
            的
            <strong className="mx-1 font-bold">美式餐廳</strong>
          </p>
          <div className="space-x-2 mt-4">
            <Button color="white" variant="outlined">
              排序
              <span className="text-gray-400 ml-2">熱門</span>
              <Icon name="chevronDown" className="ml-2" />
            </Button>
            <Button color="white" variant="outlined">
              價格
              <span className="text-gray-400 ml-2">$$</span>
              <Icon name="chevronDown" className="ml-2" />
            </Button>
            <Button color="white" variant="outlined">
              飲食限制
              <span className="text-gray-400 ml-2">不限</span>
              <Icon name="chevronDown" className="ml-2" />
            </Button>
            <Button color="white" variant="outlined">
              立即訂位
              <span className="text-gray-400 ml-2">晚餐</span>
              <Icon name="chevronDown" className="ml-2" />
            </Button>
          </div>
          <RestaurantList data={stores} />
        </div>
      </div>
      <Footer />
    </div>
  );
}