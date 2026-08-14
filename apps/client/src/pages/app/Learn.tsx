import { useState } from "react";
import { ArrowRight, BookHeart, ChevronDown, Clock3, HeartPulse, Leaf, ShieldCheck, Sparkles, Stethoscope, MessageCircle } from "lucide-react";
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
  
  return (
    <div className="page-stack learn-page">
      <section className="learn-feature">
        <div className="learn-feature-icon">
          <Sparkles size={24} />
        </div>
        <span className="feature-label">Medicine guide</span>
        <h2>About EZN6 Eve</h2>
        <p>Ibuprofen + Pamabrom Liquid-filled soft capsule, Fast onset relief for menstrual pain & hepls reduce bloating</p>
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
          {topics.map(({ label, icon: Icon, tone }) => (
            <button className="topic-tile" key={label}>
              <span className={`topic-icon ${tone}`}><Icon size={21} /></span>
              <strong>{label}</strong>
            </button>
          ))}
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

      {/* 새롭게 교체된 Community Talk 섹션 */}
      <section>
        <SectionTitle title="Community talk" action="Enter" />
        <div className="community-board health-card" style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px' }}> 
          <article className="community-post">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginBottom: '4px' }}>
              <span className="article-category">Symptoms</span>
              <span>2h ago</span>
            </div>
            <h4 style={{ margin: '4px 0', fontSize: '15px' }}>Does anyone else get insanely exhausted 2 days before? 😴</h4>
            <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#555', lineHeight: '1.4' }}>
              I literally can't keep my eyes open at work today. What are your tips for fighting pre-period fatigue?
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', fontWeight: '500' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#888' }}>
                <MessageCircle size={14} /> 14 replies
              </span>
              <span style={{ color: '#aaa' }}>·</span>
              <span style={{ color: '#888' }}>by sleepy_koala</span>
            </div>
          </article>

          <hr style={{ border: 'none', borderTop: '1px solid #eee', margin: '0' }} />

          <article className="community-post">
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#666', marginBottom: '4px' }}>
              <span className="article-category">Products</span>
              <span>5h ago</span>
            </div>
            <h4 style={{ margin: '4px 0', fontSize: '15px' }}>Thinking about switching to a menstrual cup... advice?</h4>
            <p style={{ margin: '0 0 8px', fontSize: '13px', color: '#555', lineHeight: '1.4' }}>
              I'm a bit nervous about leaks. For those who switched, how long did it take to get used to it?
            </p>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'center', fontSize: '12px', fontWeight: '500' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#888' }}>
                <MessageCircle size={14} /> 32 replies
              </span>
              <span style={{ color: '#aaa' }}>·</span>
              <span style={{ color: '#888' }}>by eco_friendly99</span>
            </div>
          </article>
          
          <button className="outline-button" style={{ marginTop: '4px', width: '100%', justifyContent: 'center' }}>
            See all discussions <ArrowRight size={15} />
          </button>
        </div>
      </section>

      <section>
        <SectionTitle title="Frequently asked" />
        <div className="faq-list health-card">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={faq.question}>
              <button onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <span>{faq.question}</span>
                <ChevronDown size={18} className={openFaq === index ? "rotate" : ""} />
              </button>
              {openFaq === index ? <p>{faq.answer}</p> : null}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}