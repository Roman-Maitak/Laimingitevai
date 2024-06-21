import { useTranslation } from "react-i18next";
import { ServiceModel } from "../../entities/service/service";
import Tabs from "../../shared/ui/Tabs/Tabs";

export const Services = () => {
  const { t } = useTranslation();
  const services = t("services") as unknown as ServiceModel[];
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row bg-background w-full"
    >
      <Tabs items={services} />
    </section>
  );
};
