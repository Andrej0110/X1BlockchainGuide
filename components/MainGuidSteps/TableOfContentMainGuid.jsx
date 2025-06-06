const TableOfContentMainGuid = ({ language, stepTitles }) => {
  const content = {
    en: { tableOfContent: "Table of Contents" },
    de: { tableOfContent: "Inhaltsangabe" },
  };

  return (
    <nav className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{content[language].tableOfContent}</h3>
      <ul className="list-disc pl-5 space-y-2">
        {(stepTitles || []).map((title, index) => (
          <li key={index}>
            <a href={`#step${index + 1}`} className="text-blue-600 hover:underline">
              {title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TableOfContentMainGuid;