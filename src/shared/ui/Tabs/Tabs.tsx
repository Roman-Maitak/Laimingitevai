import { Tab } from "./Tab";
import { ServiceModel } from "../../../entities/service/service";
import { useState } from "react";
import { ServiceContent } from "./ServiceContent";
import { cn } from "../../utils";
import TabIcon from "../../../widgets/services/ui/TabIcon";

export type TabsProps = {
  items: ServiceModel[];
  className?: string;
};

const Tabs = ({ items, className }: TabsProps) => {
  const [selectedTab, setSelectedTab] = useState(items[0].id);

  return (
    <div className="flex flex-col lg:flex-row w-full h-screen px-4 sm:px-8">
      <div
        className={cn(
          className,
          "flex flex-col items-center lg:items-start justify-center space-y-4 text-sm font-medium mb-4 lg:mb-0",
          "w-full lg:w-1/4"
        )}
      >
        <div className="flex flex-col items-center justify-center h-full w-full">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 md:w-auto md:max-w-lg mx-auto">
            {items.map((item) => (
              <Tab
                key={item.id}
                name={item.name}
                isActive={selectedTab === item.id}
                onClick={() => setSelectedTab(item.id)}
                className="w-full md:w-auto"
                TabIcon={TabIcon[item.icon]}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full lg:flex-1 overflow-y-auto p-4 sm:px-8 h-full">
        {items
          .filter((item) => item.id === selectedTab)
          .map((item) => (
            <ServiceContent item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default Tabs;
