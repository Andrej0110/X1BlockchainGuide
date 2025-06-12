import { useTranslation } from "react-i18next";

const TableOfContentRentGuid = ({ stepTitles }) => {
  const { t } = useTranslation("rentServerGuidSteps");

  return (
    <nav className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{t("tableOfContent")}</h3>
      <ul className="list-disc pl-5 space-y-2">
        {(stepTitles || []).map((title, index) => (
          <li key={index}>
            <a
              href={`#step${index + 1}`}
              className="text-blue-600 hover:underline"
            >
              {title || t(`step${index + 1}.title`)}{" "}
              {/* Fallback auf Übersetzungen */}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContentRentGuid;
