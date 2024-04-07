import usePreferredLanguage from "../hooks/usePreferredLanguage";

export default function UsePreferredLanguageContainer() {
  const language = usePreferredLanguage();
  return (
    <div className="container">
      <h1>Use Preferred Language</h1>
      <div className="grid gap-y-4 text-center">
        <p>Change language here - chrome://settings/languages</p>
        <section>
          <h2>
            The correct date format for <pre>{language}</pre> is{" "}
            <time>{new Date(Date.now()).toLocaleDateString(language)}</time>
          </h2>
        </section>
      </div>
    </div>
  );
}
