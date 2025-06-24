import { useTranslation, Trans } from "react-i18next";

const CalendlyPage = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <iframe
        src="https://calendly.com/devandrej01/30min/"
        title="Calendly Webside"
        loading="lazy"
        sandbox="allow-same-origin allow-scripts allow-popups"
        className="absolute top-0 left-0 w-full h-full rounded-lg border border-black"
      />
    </div>
  );
};

const ServiceStep_1 = ({}) => {
  const { t } = useTranslation("ServiceSteps");

  return (
    <div>
      <div className="ml-4">
        <h2 className="text-2xl font-semibold">{t("introduction")}</h2>
        <p>
          <Trans
            i18nKey="ServiceSteps:p01"
            components={{
              telegramLink: (
                <a
                  href="https://calendly.com/devandrej01/30min"
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                />
              ),
            }}
          />
        </p>
        <CalendlyPage />
      </div>
    </div>
  );
};

export default ServiceStep_1;
