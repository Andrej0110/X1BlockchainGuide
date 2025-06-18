{/*
    const handleButtonClickWsl = (e) => {
    e.preventDefault(); // Verhindert das Standard-Verhalten des Links
    setActiveTab("wsl");
    // Warte kurz, bis der neue Abschnitt gerendert ist, dann scrollen
    setTimeout(() => {
      const wslSection = document.getElementById("wsl");
      if (wslSection) {
        wslSection.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 0);
  };

            <Trans
              i18nKey="mainGuidSteps:step2.buttonText"
              components={{
                telegramLink: (
                  <a
                    href="#main" // Verweist auf den Main Guide Abschnitt
                    onClick={handleButtonClickWsl}
                    className="text-blue-600 hover:text-blue-800 hover:underline transition-colors duration-200"
                  ></a>
                ),
              }}
            />


*\}