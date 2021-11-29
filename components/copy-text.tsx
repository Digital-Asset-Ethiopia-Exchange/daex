import { useCallback, useState } from "react";

export function CopyText({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const onClick = useCallback(async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 4000);
  }, []);

  return (
    <button className="focus:outline-none" onClick={onClick}>
      {copied ? (
        <svg
          viewBox="0 0 24 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 text-gray-500"
        >
          <path
            d="M1 10.5L7.81481 17L22.5 1.5"
            stroke="#333333"
            strokeWidth="2"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          className="w-6 text-gray-400 hover:text-gray-600"
        >
          <path
            d="M4 5.98V22h12V6L4 5.98zm9.99 14.04H6V8h8l-.01 12.02z"
            fill="#76808F"
          ></path>
          <path d="M20 2v16h-2V4H8V2h12z" fill="#76808F"></path>
        </svg>
      )}
    </button>
  );
}
