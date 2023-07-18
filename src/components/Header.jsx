import { Link } from "react-router-dom";
import { Button, Icon, Input } from "components";

export const Header = () => {
  return (
    <header className="flex px-6 py-3 items-center justify-between gap-8 whitespace-nowrap">
      <div className="grid grid-cols-2 divide-x gap-4">
        <img src="aapd_restaurant_logo.png" alt="Uber Eats" className="inline-flex h-8" />
        <div className="flex items-center gap-4 pl-4 font-bold">
          <Link to="/" className="text-blue-900">
            <Icon name="restaurant" className="mr-1" color="blue" />
            訂位
          </Link>
          <Link className="text-gray-500">
            <Icon name="delivery" className="mr-1" color="gray" />
            外送
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Input
          iconStart="search"
          placeholder="搜尋店家名稱"
        />
        <div className="space-x-2">
          <Link className="px-2">
            <Icon name="thumbUp" className="mr-2"/>
            熱門店家
          </Link>
          <Link className="px-2">
            <Icon name="favorite" className="mr-2"/>
            我的收藏
          </Link>
        </div>
        <div className="space-x-2">
          <Button color="gray">
            註冊
          </Button>
          <Button>
            登入
          </Button>
        </div>
      </div>
    </header>
  );
}