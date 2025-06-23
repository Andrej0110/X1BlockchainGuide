import { useTranslation, Trans } from "react-i18next";

const ServiceStep_1 = ({ id }) => {
  const { t } = useTranslation("test");

  return (
    <div>
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{t("introduction")}</h2>
        <p>{t("p01")}</p>
      </div>
    </div>
  );
};

export default ServiceStep_1;
