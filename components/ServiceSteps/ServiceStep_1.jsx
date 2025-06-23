import { useTranslation, Trans } from "react-i18next";

const CalendlyPage = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden">
      <iframe
        src="https://calendly.com/"
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
                  href="https://calendly.com/"
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
