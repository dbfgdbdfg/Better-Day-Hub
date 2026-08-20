import { useState } from "react";
import { ArrowRight, CalendarDays, Check, ChevronRight, LocateFixed, MapPin, Sparkles, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { SectionTitle } from "@/components/app/Ui";
import { IMAGES } from "@/assets/images";
type Symptom = "Pain" | "Bloating" | "Both";
const symptoms: Array<{
  label: Symptom;
  detail: string;
  accent: string;
}> = [{
  label: "Pain",
  detail: "Cramps or aches",
  accent: "coral"
}, {
  label: "Bloating",
  detail: "Full or swollen",
  accent: "mint"
}, {
  label: "Both",
  detail: "Pain + bloating",
  accent: "teal"
}];
export default function Home() {
  const navigate = useNavigate();
  const [selectedSymptom, setSelectedSymptom] = useState<Symptom | null>(null);
  const [assessmentStep, setAssessmentStep] = useState<"question" | "result">("question");
  const [severity, setSeverity] = useState("Moderate");
  const closeAssessment = () => {
    setSelectedSymptom(null);
    setAssessmentStep("question");
    setSeverity("Moderate");
  };
  return <div className="page-stack home-page">
      <section className="hero-card">
        <div className="hero-copy">
          <span className="brand-pill">
            <span className="brand-mark">E</span>
            EZN6 Eve
          </span>
          <h2>
            Fast Relief.
            <br />
            Less Bloating.
            <br />
            <em>A Better Day.</em>
          </h2>
          <p>Dual-action menstrual relief, thoughtfully made for your day.</p>
          <button className="hero-link" onClick={() => navigate("/learn")}>
            Discover how it helps <ArrowRight size={15} />
          </button>
        </div>
        <div className="hero-art">
          <img src={IMAGES.HOME_DOT_HERO_UND_WOMAN} alt="Illustration of a woman managing menstrual discomfort with calm confidence." />
        </div>
        <span className="hero-orbit orbit-one" />
        <span className="hero-orbit orbit-two" />
      </section>

      <section>
        <SectionTitle title="Quick Symptom Check" action="View history" />
        <div className="symptom-card health-card">
          <div className="card-kicker">
            <span className="pulse-dot" />
            <span>How are you feeling today?</span>
          </div>
          <div className="symptom-options">
            {symptoms.map(symptom => <button key={symptom.label} className="symptom-option" onClick={() => setSelectedSymptom(symptom.label)}>
                <span className={`symptom-circle ${symptom.accent}`}>
                  {symptom.label === "Pain" ? <span className="pain-wave">⚡︎</span> : symptom.label === "Bloating" ? <span className="bloat-rings" /> : <span className="both-symbol">+</span>}
                </span>
                <strong>{symptom.label}</strong>
                <small>{symptom.detail}</small>
              </button>)}
          </div>
          <p className="micro-note">
            Takes less than 30 seconds · Private by design
          </p>
        </div>
      </section>

      <section>
        <SectionTitle title="Your cycle" action="Full tracker" onAction={() => navigate("/track")} />
        <button className="period-card health-card" onClick={() => navigate("/track")}>
          <div className="period-visual">
            <CalendarDays size={21} />
            <div className="date-tile">
              <span>AUG</span>
              <strong>25</strong>
            </div>
          </div>
          <div className="period-copy">
            <span>Estimated in</span>
            <strong>5 days</strong>
            <small>Period window · Aug 25–29</small>
          </div>
          <span className="prepare-button">
            Prepare now
            <ChevronRight size={15} />
          </span>
        </button>
      </section>

      <section>
        <SectionTitle title="Nearby Better Day Points" />
        <div className="nearby-card health-card">
          <div className="mini-map" aria-label="Map preview">
            <span className="map-road road-one" />
            <span className="map-road road-two" />
            <span className="map-block block-one" />
            <span className="map-block block-two" />
            <span className="map-block block-three" />
            <span className="map-pin pin-main">
              <MapPin size={19} fill="currentColor" />
            </span>
            <span className="map-pin pin-small">
              <MapPin size={14} fill="currentColor" />
            </span>
          </div>
          <div className="nearby-copy">
            <div>
              <span className="distance-chip">
                <LocateFixed size={12} /> 0.8 km away
              </span>
              <h3>Relief is closer than you think.</h3>
              <p>3 Better day Points near you.</p>
            </div>
            <button className="primary-button compact" onClick={() => navigate("/store")}>
              Find now <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <aside className="support-strip">
        <Sparkles size={18} />
        <div>
          <strong>Small steps count.</strong>
          <span>Hydrate, rest, and listen to your body today.</span>
        </div>
      </aside>

      {selectedSymptom ? <div className="modal-backdrop" role="presentation">
          <section className="assessment-sheet" role="dialog" aria-modal="true" aria-labelledby="assessment-title">
            <div className="sheet-handle" />
            <button className="close-button" onClick={closeAssessment} aria-label="Close">
              <X size={20} />
            </button>

            {assessmentStep === "question" ? <>
                <span className="sheet-step">1 of 1 · {selectedSymptom}</span>
                <h2 id="assessment-title">How intense does it feel?</h2>
                <p>This helps us tailor supportive next steps.</p>
                <div className="severity-options">
                  {["Mild", "Moderate", "Severe"].map(item => <button key={item} className={severity === item ? "severity active" : "severity"} onClick={() => setSeverity(item)}>
                      <span>{item}</span>
                      {severity === item ? <Check size={17} /> : null}
                    </button>)}
                </div>
                <button className="primary-button full" onClick={() => setAssessmentStep("result")}>
                  See my next steps <ArrowRight size={16} />
                </button>
              </> : <div className="result-state">
                <span className="result-icon">
                  <Check size={25} />
                </span>
                <span className="sheet-step">Supportive recommendation</span>
                <h2 id="assessment-title">Let’s make today gentler.</h2>
                <p>
                  For {severity.toLowerCase()} {selectedSymptom.toLowerCase()},
                  consider rest, gentle heat, hydration, and an appropriate OTC
                  option such as EZN6 Eve.
                </p>
                <div className="recommendation-card">
                  <span className="brand-mark large">E</span>
                  <div>
                    <strong>EZN6 Eve</strong>
                    <span>Dual-action menstrual symptom relief</span>
                  </div>
                  <ChevronRight size={18} />
                </div>
                <p className="medical-note">
                  Always read the label. Seek medical advice for severe, unusual,
                  or persistent symptoms.
                </p>
                <div className="sheet-actions">
                  <button className="secondary-button" onClick={() => navigate("/learn")}>
                    Learn more
                  </button>
                  <button className="primary-button" onClick={() => navigate("/store")}>
                    Find nearby
                  </button>
                </div>
              </div>}
          </section>
        </div> : null}
    </div>;
}