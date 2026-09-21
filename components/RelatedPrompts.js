import PromptGrid from "./PromptGrid";
export default function RelatedPrompts({ prompts }) {
  return (
    <section className="section">
      <div className="section-heading">
        <div>
          <span className="eyebrow">KEEP EXPLORING</span>
          <h2>A different take. Your next idea.</h2>
        </div>
      </div>
      <PromptGrid prompts={prompts} />
    </section>
  );
}
