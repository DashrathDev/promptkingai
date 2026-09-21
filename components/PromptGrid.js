import PromptCard from "./PromptCard";
export default function PromptGrid({ prompts }) {
  return (
    <div className="prompt-grid">
      {prompts.map((p) => (
        <PromptCard key={p.id} prompt={p} />
      ))}
    </div>
  );
}
