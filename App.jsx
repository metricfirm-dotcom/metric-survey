import { useState, useEffect } from "react";

const METRIC_LOGO = "data:image/jpeg;base64,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";

const GREEN       = "#07381f";
const GREEN_LIGHT = "#e6ede9";
const GREEN_TEXT  = "#07381f";

const PROJECT_CATEGORIES = [
  "Residential","Commercial","Healthcare",
  "Hospitality","Mixed-Use","Educational","Other",
];
const PROJECT_INTENTS = [
  "New Build","Renovation / Refurbishment",
  "Interior Fit-Out","Space Planning Only","Feasibility Study",
];
const SPACE_TYPES = [
  "Living Room","Master Bedroom","Bedroom","Kitchen","Dining Room",
  "Bathroom","Office / Study","Reception","Waiting Area",
  "Meeting Room","Lobby","Retail Floor","Clinic Room","Other",
];
const DESIGN_STYLES = [
  "Contemporary Luxury","Modern Minimalist","Classic Traditional",
  "Industrial Chic","Biophilic","Art Deco","Scandinavian",
  "Mid-Century Modern","Islamic Contemporary","Japandi",
  "Organic Modern","Not Sure Yet",
];
const BUDGET_RANGES = [
  "Under $50K","$50K – $150K","$150K – $500K",
  "$500K – $1M","Above $1M","Prefer not to say",
];

const TOTAL_STEPS = 6;

const chip = (active) => ({
  padding: "10px 16px",
  borderRadius: "8px",
  border: `${active ? "2px" : "1px"} solid ${active ? GREEN : "#d0d0d0"}`,
  background: active ? GREEN_LIGHT : "#fff",
  color: active ? GREEN_TEXT : "#444",
  fontWeight: active ? "600" : "400",
  fontSize: "14px",
  cursor: "pointer",
  transition: "all .15s",
});

const multiChip = (active) => ({
  ...chip(active),
  fontSize: "13px",
  padding: "8px 14px",
});

export default function MetricSurvey() {
  const [step, setStep]           = useState(0);
  const [surveyNum, setSurveyNum] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending]     = useState(false);
  const [error, setError]         = useState("");

  const [category,   setCategory]   = useState("");
  const [intent,     setIntent]     = useState("");
  const [spaceCount, setSpaceCount] = useState("");
  const [spaceTypes, setSpaceTypes] = useState([]);
  const [style,      setStyle]      = useState("");
  const [materials,  setMaterials]  = useState("");
  const [budget,     setBudget]     = useState("");
  const [comments,   setComments]   = useState("");
  const [clientName, setClientName] = useState("");
  const [email,      setEmail]      = useState("");
  const [phone,      setPhone]      = useState("");

  useEffect(() => {
    try {
      const count = localStorage.getItem("metric_survey_count");
      setSurveyNum(count ? parseInt(count) + 1 : 1);
    } catch {
      setSurveyNum(1);
    }
  }, []);

  function toggleSpaceType(s) {
    setSpaceTypes(prev =>
      prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]
    );
  }

  function canProceed() {
    if (step === 1) return !!category;
    if (step === 2) return !!intent;
    if (step === 3) return !!spaceCount;
    if (step === 4) return !!style;
    if (step === 5) return true;
    if (step === 6) return clientName.trim() && email.trim() && phone.trim();
    return true;
  }

  async function submitSurvey() {
    setSending(true);
    setError("");
    const padded = String(surveyNum).padStart(3, "0");
    const date   = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const subject = `Survey #${padded} — ${clientName} — ${date}`;

    const body = `METRIC ARCHITECTS — CLIENT SURVEY #${padded}
Submitted: ${date}
${"─".repeat(45)}

CLIENT DETAILS
  Name:   ${clientName}
  Email:  ${email}
  Phone:  ${phone}

PROJECT OVERVIEW
  Category:        ${category}
  Intent:          ${intent}
  No. of Spaces:   ${spaceCount}
  Space Types:     ${spaceTypes.length ? spaceTypes.join(", ") : "Not specified"}

DESIGN PREFERENCES
  Style:           ${style}
  Materials:       ${materials || "Not specified"}
  Budget Range:    ${budget || "Not specified"}

ADDITIONAL COMMENTS
  ${comments || "None provided."}

${"─".repeat(45)}
Metric Architects  |  We Create Space
metric.firm@gmail.com`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "afc4ed45-72c9-4d67-a284-5457a51454e6",
          subject: subject,
          name: clientName,
          email: email,
          message: body,
        }),
      });
      const data = await res.json();
      if (data.success) {
        try { localStorage.setItem("metric_survey_count", surveyNum.toString()); } catch {}
        setSubmitted(true);
      } else {
        setError("Submission failed. Please try again.");
      }
    } catch {
      setError("Could not send. Please check your connection and try again.");
    }
    setSending(false);
  }

  /* ─── STYLES ─── */
  const wrap = {
    minHeight: "100vh",
    background: "#f7f8f6",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0 16px 60px",
    fontFamily: "-apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, sans-serif",
  };

  const card = {
    background: "#fff",
    borderRadius: "16px",
    padding: "40px 44px",
    width: "100%",
    maxWidth: "620px",
    boxShadow: "0 2px 24px rgba(0,0,0,0.07)",
  };

  const progressBar = {
    width: "100%",
    maxWidth: "620px",
    marginBottom: "24px",
  };

  const btnPrimary = {
    background: GREEN,
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    padding: "14px 32px",
    fontSize: "15px",
    fontWeight: "600",
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
  };

  const btnSecondary = {
    background: "#fff",
    color: "#555",
    border: "1px solid #d0d0d0",
    borderRadius: "10px",
    padding: "14px 24px",
    fontSize: "15px",
    cursor: "pointer",
  };

  const inputStyle = {
    width: "100%",
    padding: "12px 16px",
    fontSize: "15px",
    border: "1px solid #d0d0d0",
    borderRadius: "10px",
    outline: "none",
    boxSizing: "border-box",
  };

  const label = {
    fontSize: "13px",
    fontWeight: "600",
    color: "#555",
    textTransform: "uppercase",
    letterSpacing: "0.08em",
    display: "block",
    marginBottom: "8px",
  };

  const stepTitle = {
    fontSize: "22px",
    fontWeight: "700",
    color: "#111",
    marginBottom: "6px",
  };

  const stepSub = {
    fontSize: "14px",
    color: "#777",
    marginBottom: "28px",
  };

  const chipRow = {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
  };

  /* ─── THANK YOU ─── */
  if (submitted) return (
    <div style={wrap}>
      <div style={{ paddingTop: "60px", textAlign: "center", maxWidth: "520px" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "52px", objectFit: "contain", marginBottom: "32px" }} />
        <div style={{ width: "64px", height: "64px", borderRadius: "50%", background: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
        </div>
        <div style={{ fontSize: "26px", fontWeight: "700", color: "#111", marginBottom: "12px" }}>Thank you, {clientName}!</div>
        <div style={{ fontSize: "15px", color: "#666", lineHeight: "1.7" }}>
          Your project brief has been submitted successfully.<br/>
          Our team at Metric Architects will be in touch with you shortly.
        </div>
        <div style={{ marginTop: "32px", padding: "16px 24px", background: GREEN_LIGHT, borderRadius: "10px", fontSize: "13px", color: GREEN_TEXT, fontWeight: "500" }}>
          Survey #{String(surveyNum).padStart(3, "0")} recorded ·{" "}
          {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
        </div>
      </div>
    </div>
  );

  /* ─── WELCOME ─── */
  if (step === 0) return (
    <div style={wrap}>
      <div style={{ paddingTop: "60px", textAlign: "center", maxWidth: "540px", width: "100%" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "56px", objectFit: "contain", marginBottom: "40px" }} />
        <div style={{ ...card, textAlign: "left" }}>
          <div style={{ fontSize: "26px", fontWeight: "700", color: "#111", marginBottom: "10px" }}>Client Project Survey</div>
          <div style={{ fontSize: "15px", color: "#666", lineHeight: "1.7", marginBottom: "28px" }}>
            Help us understand your project vision. This survey takes about 3 minutes and ensures our team is fully prepared before our first consultation.
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
            {["Project type & intent","Space requirements","Design style & materials","Your contact details"].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: "700", color: GREEN, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: "14px", color: "#444" }}>{item}</span>
              </div>
            ))}
          </div>
          <button onClick={() => setStep(1)} style={{ ...btnPrimary, width: "100%", justifyContent: "center", padding: "16px" }}>
            Start Survey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </button>
        </div>
      </div>
    </div>
  );

  /* ─── STEPS 1–6 ─── */
  const progress = ((step) / TOTAL_STEPS) * 100;

  return (
    <div style={wrap}>
      {/* Header */}
      <div style={{ width: "100%", maxWidth: "620px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "24px 0 20px" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "36px", objectFit: "contain" }} />
        <span style={{ fontSize: "13px", color: "#999" }}>Step {step} of {TOTAL_STEPS}</span>
      </div>

      {/* Progress */}
      <div style={progressBar}>
        <div style={{ height: "4px", background: "#e8e8e8", borderRadius: "4px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: GREEN, borderRadius: "4px", transition: "width .4s ease" }} />
        </div>
      </div>

      {/* Card */}
      <div style={card}>

        {/* STEP 1 — Project Category */}
        {step === 1 && (<>
          <div style={stepTitle}>What type of project is this?</div>
          <div style={stepSub}>Select the category that best describes your project.</div>
          <div style={chipRow}>
            {PROJECT_CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)} style={chip(category === c)}>{c}</button>
            ))}
          </div>
        </>)}

        {/* STEP 2 — Intent */}
        {step === 2 && (<>
          <div style={stepTitle}>What is the intent of your project?</div>
          <div style={stepSub}>Tell us what stage or type of work you are looking for.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {PROJECT_INTENTS.map(i => (
              <button key={i} onClick={() => setIntent(i)} style={{
                ...chip(intent === i),
                textAlign: "left",
                padding: "14px 18px",
                borderRadius: "10px",
              }}>{i}</button>
            ))}
          </div>
        </>)}

        {/* STEP 3 — Spaces */}
        {step === 3 && (<>
          <div style={stepTitle}>How many spaces are involved?</div>
          <div style={stepSub}>Enter the number of spaces and select which ones apply.</div>
          <div style={{ marginBottom: "24px" }}>
            <span style={label}>Number of Spaces</span>
            <input
              type="number"
              min="1"
              value={spaceCount}
              onChange={e => setSpaceCount(e.target.value)}
              placeholder="e.g. 4"
              style={{ ...inputStyle, maxWidth: "160px" }}
            />
          </div>
          <span style={label}>Space Types (select all that apply)</span>
          <div style={chipRow}>
            {SPACE_TYPES.map(s => (
              <button key={s} onClick={() => toggleSpaceType(s)} style={multiChip(spaceTypes.includes(s))}>{s}</button>
            ))}
          </div>
        </>)}

        {/* STEP 4 — Style */}
        {step === 4 && (<>
          <div style={stepTitle}>What design style appeals to you?</div>
          <div style={stepSub}>Choose the architectural and interior style direction.</div>
          <div style={chipRow}>
            {DESIGN_STYLES.map(s => (
              <button key={s} onClick={() => setStyle(s)} style={chip(style === s)}>{s}</button>
            ))}
          </div>
        </>)}

        {/* STEP 5 — Materials & Comments */}
        {step === 5 && (<>
          <div style={stepTitle}>Materials & additional notes</div>
          <div style={stepSub}>Share any materials, finishes, or preferences you have in mind.</div>

          <div style={{ marginBottom: "20px" }}>
            <span style={label}>Materials in Mind</span>
            <textarea
              value={materials}
              onChange={e => setMaterials(e.target.value)}
              placeholder="e.g. marble, oak wood, brushed brass, concrete panels..."
              rows={3}
              style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <span style={label}>Budget Range</span>
            <div style={chipRow}>
              {BUDGET_RANGES.map(b => (
                <button key={b} onClick={() => setBudget(b)} style={multiChip(budget === b)}>{b}</button>
              ))}
            </div>
          </div>

          <div>
            <span style={label}>Additional Comments</span>
            <textarea
              value={comments}
              onChange={e => setComments(e.target.value)}
              placeholder="Any special requirements, references, or notes for our team..."
              rows={4}
              style={{ ...inputStyle, resize: "vertical", lineHeight: "1.6" }}
            />
          </div>
        </>)}

        {/* STEP 6 — Contact */}
        {step === 6 && (<>
          <div style={stepTitle}>Your contact details</div>
          <div style={stepSub}>We will use these to follow up with you about your project.</div>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <span style={label}>Full Name *</span>
              <input value={clientName} onChange={e => setClientName(e.target.value)} placeholder="e.g. Ahmed Al-Mansour" style={inputStyle} />
            </div>
            <div>
              <span style={label}>Email Address *</span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="e.g. ahmed@email.com" style={inputStyle} />
            </div>
            <div>
              <span style={label}>Phone Number *</span>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="e.g. +965 9999 9999" style={inputStyle} />
            </div>
          </div>

          {error && <div style={{ marginTop: "16px", color: "#cc0000", fontSize: "13px" }}>{error}</div>}
        </>)}

      </div>

      {/* Navigation */}
      <div style={{ width: "100%", maxWidth: "620px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={() => setStep(s => s - 1)} style={btnSecondary}>← Back</button>
        {step < TOTAL_STEPS
          ? <button onClick={() => setStep(s => s + 1)} disabled={!canProceed()} style={{ ...btnPrimary, opacity: canProceed() ? 1 : 0.45 }}>
              Next →
            </button>
          : <button onClick={submitSurvey} disabled={!canProceed() || sending} style={{ ...btnPrimary, opacity: (canProceed() && !sending) ? 1 : 0.45 }}>
              {sending ? "Sending..." : "Submit Survey ✓"}
            </button>
        }
      </div>

      <div style={{ marginTop: "20px", fontSize: "12px", color: "#bbb" }}>Metric Architects · We Create Space</div>
    </div>
  );
}
