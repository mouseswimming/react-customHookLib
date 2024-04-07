import useCopyToClipboard from "../hooks/useCopyToClipboard";
import { MdContentCopy, MdCheckCircleOutline } from "react-icons/md";

const randomHash = crypto.randomUUID();

export default function UseCopyToClipboardContainer() {
  const [copiedText, copyToClipboard] = useCopyToClipboard();
  const hasCopiedText = Boolean(copiedText);

  return (
    <section className="m-auto w-max text-center">
      <h1>useCopyToClipboard</h1>
      <article>
        <label>Fake API Key</label>
        <pre className="bg-black/10 p-4 rounded-md mt-2">
          <code>{randomHash}</code>
          <button
            disabled={hasCopiedText}
            className="link"
            onClick={() =>
              copyToClipboard &&
              typeof copyToClipboard === "function" &&
              copyToClipboard(randomHash)
            }
          >
            {hasCopiedText ? <MdCheckCircleOutline /> : <MdContentCopy />}
          </button>
        </pre>
      </article>
      {hasCopiedText && (
        <dialog
          open={hasCopiedText}
          className="bg-purple-500 text-white max-w-[400px] w-full m-auto mt-4 p-6"
        >
          <h4 className="mb-2">
            Copied{" "}
            <span role="img" aria-label="Celebrate Emoji">
              🎉
            </span>
          </h4>
          <textarea
            placeholder="Paste your copied text"
            className="rounded-sm bg-black/10 outline-none p-4 text-white w-full appearance-none"
          />
        </dialog>
      )}
    </section>
  );
}
