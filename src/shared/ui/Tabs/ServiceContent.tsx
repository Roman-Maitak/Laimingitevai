import { ServiceModel } from "../../../entities/service/service";

type ServiceContentProps = {
  item: ServiceModel;
};

export const ServiceContent = ({ item }: ServiceContentProps) => {

  return (
    <div
      key={item.id}
      className="relative p-6 bg-secondary text-medium text-text rounded-lg w-full lg:w-full h-[calc(100%-2rem)]"
    >
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center rounded-lg"
        style={{ backgroundImage: `url(${item.image})` }}
      />
      <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 rounded-lg"></div>
      <div className="relative z-10 p-6 lg:py-8 overflow-auto h-full">
        <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2">
          {item.name}
        </h3>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};
