import { useState } from "react";
import { ArrowRight, BookHeart, ChevronDown, Clock3, HeartPulse, Leaf, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import { SectionTitle } from "@/components/app/Ui";
const topics = [{
  label: "Periods 101",
  icon: BookHeart,
  tone: "coral"
}, {
  label: "Pain relief",
  icon: HeartPulse,
  tone: "teal"
}, {
  label: "Lifestyle",
  icon: Leaf,
  tone: "green"
}, {
  label: "Ask an expert",
  icon: Stethoscope,
  tone: "blue"
}];
const faqs = [{
  question: "When are period cramps considered unusual?",
  answer: "Pain that is suddenly severe, repeatedly interrupts daily life, or comes with fainting, fever, or very heavy bleeding deserves medical attention."
}, {
  question: "Can bloating change during my cycle?",
  answer: "Yes. Hormonal changes can influence fluid retention and digestion. Tracking patterns can help you anticipate and discuss recurring symptoms."
}];
export default function Learn() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return <div className="page-stack learn-page">
      <section className="learn-feature">
        <div className="learn-feature-icon">
          <Sparkles size={24} />
        </div>
        <span className="feature-label">Medicine guide</span>
        <h2>AboutEZN6 Eve</h2>
        <p>Ibuprofen + PamabromLiquid-filled soft capsule,Fast onset relief for menstrual pain & hepls reduce bloating</p>
        <div className="article-meta">
          <span>2 min read</span>
          <span><ShieldCheck size={14} /> Clinically reviewed</span>
        </div>
        <button className="light-button">
          Read guide <ArrowRight size={16} />
        </button>
      </section>

      <section>
        <SectionTitle title="Browse by topic" />
        <div className="topic-grid">
          {topics.map(({
          label,
          icon: Icon,
          tone
        }) => <button className="topic-tile" key={label}>
              <span className={`topic-icon ${tone}`}><Icon size={21} /></span>
              <strong>{label}</strong>
            </button>)}
        </div>
      </section>

      <section>
        <SectionTitle title="Expert picks" action="See all" />
        <div className="article-list">
          <article className="article-card">
            <div className="article-visual heat-visual">
              <span className="visual-line line-a" />
              <span className="visual-line line-b" />
              <HeartPulse size={29} />
            </div>
            <div>
              <span className="article-category">Pain management</span>
              <h3>Heat, movement, medicine: what can help?</h3>
              <p>A practical look at evidence-led period comfort strategies.</p>
              <span className="article-meta-inline">Dr. Nadia Lim · 5 min</span>
            </div>
          </article>
          <article className="article-card">
            <div className="article-visual nutrition-visual">
              <Leaf size={30} />
              <span className="leaf-dot dot-a" />
              <span className="leaf-dot dot-b" />
            </div>
            <div>
              <span className="article-category">Lifestyle</span>
              <h3>Eating gently when bloating shows up</h3>
              <p>Simple habits that can support comfort throughout your cycle.</p>
              <span className="article-meta-inline">Better Day editors · 4 min</span>
            </div>
          </article>
        </div>
      </section>

      <section className="otc-guide health-card">
        <div className="otc-heading">
          <span className="brand-mark large">E</span>
          <div>
            <span className="article-category">OTC relief guide</span>
            <h3>Choosing an option that fits your symptoms</h3>
          </div>
        </div>
        <p>
          EZN6 Eve is one over-the-counter option designed for menstrual pain
          and bloating. Compare active ingredients, suitability, and label
          directions before choosing any product.
        </p>
        <button className="outline-button">
          Compare relief options <ArrowRight size={15} />
        </button>
        <span className="safety-copy">
          Educational content only. Ask a pharmacist if you are unsure what is
          right for you.
        </span>
      </section>

      <section>
        <SectionTitle title="Frequently asked" />
        <div className="faq-list health-card">
          {faqs.map((faq, index) => <div className="faq-item" key={faq.question}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq.question}</span>
                <ChevronDown size={18} className={openFaq === index ? "rotate" : ""} />
              </button>
              {openFaq === index ? <p>{faq.answer}</p> : null}
            </div>)}
        </div>
      </section>
    </div>;
}