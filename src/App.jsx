import { useState, useEffect } from "react";

const METRIC_LOGO = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAMCAgICAgMCAgIDAwMDBAYEBAQEBAgGBgUGCQgKCgkICQkKDA8MCgsOCwkJDRENDg8QEBEQCgwSExIQEw8QEBD/2wBDAQMDAwQDBAgEBAgQCwkLEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBD/wAARCADIAV8DASIAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAkBBAYHCAUDAv/EAFgQAAEDAwIDBAMJCA4HBwUAAAEAAgMEBQYHEQgSIQkTMUEUIlEVMjhCYXF2gbQZI1JzdJGVshcYMzQ1N1NYYnWhs9PUFldygoOW0iQlJzZWkrFjZnei0f/EABcBAQEBAQAAAAAAAAAAAAAAAAACAQP/xAAdEQEBAAMAAwEBAAAAAAAAAAAAAQIRMSFBQhJR/9oADAMBAAIRAxEAPwCVNERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAVPBVVD4H5kHOupPHdofpXnN20+yiLJTdbLKyGpNLaxLFzOjbIOV3ONxyvHl47rN9CuJPTTiGp7vPp/PcQ+ySRR1cFfS9xKBICWPa3mO7TyuG/taQovuNf4UuoX5fT/ZIFdcFOr40g16stXX1fc2XIiLHdC47NayZw7mU+zkmDDv5Nc9FfnxtMWioOqqiRfl72saXvcGtaNySdgB7V+lz1xz6wHSbQa6x26r7m95STY7dyu2ezvWnv5R/sQh/Xyc5qDG67tJeHChrqmiD8pqPRppIe+gtHNHJyuLeZh7wbtO24O3UELemkGreKa24RTZ/hja5trqpp4IxW0/cy80Tyx27dzsNwduqgxADQGtGwA2A9gUtHZ1fBfsv9Z3T7U9FWSRtzN9WanCr02zxaUZ9kTXQMn9MsdsiqKYcxI5C50zDzjl3I28COqx/9sNW/wA3zV79BU/+ZWG8QNJfp88jfbbflM8PufCOa26p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wdnDcdDuF+kHhZ1cbxaMMvt1x+nM9zo7dUT0kYZzl0rYyWgN+N1A6efgsPwua41F8tdRZMhmuFunpZZK81d9jrjUM5R3c0bG+8dz7A8nKzZxG24bts1WlJabXQTzVNDbaWnlqDzTSRQtY6Q+O7iBufrQXa19m91FZkrMXjrnUL4Ld6e+d99fbWlr5HMHd8jXGVzTGS7f1W8zNwecLYKtay2W64OhfX0FNUup395EZomvMbva3cdD8oQY9pXfrjk+nePX+7zsmrK2gilnlaABI/bYu6ADrtv0AHXoB4LJK6mFZRzUplmiEzCznhkMcjdx4tcOrT8q+rGMjaGRtDWjwAGwX6QYFoZFR0+lmPUlLcKiqkpqCCnqWT1BlfTVEcbWSQnfqwsc0jkO2yzw+C/EcEMLpHxQsY6V3PIWtAL3bAbn2nYAb/Ivog0tYL1lV85Lk27zQZF7tOgmpZ71GynhYypLX0ppPxDTseXncSHh3XdboCtTabW6vF1dbaU1oHKKgwt70D2c+2+31q7QEREGI6kUNkrbdbZLtk0NhnpLnDVW6smMfdira1/K1zZPVeC0vHKSD5tIcARZ4pmd1rcvqsQuFfZbyIKAV3uhaQ5jYd5AwRTxl8gY925c3Z53DH+qNgTmtRTU9XA+mqoI5oZByvjkaHNcPYQehXyt9st1pg9FtdBTUcPMXd3BE2Nu58Ts0AboLpayvldR3DUK/wBiv2d1tmo6GzW+rpoYLk2iEbnvqhLPzdC7YRs3DiWDlG7eq2avAfhloqMguF+uEEVaa+Ckh7iohZJHEaczFr27g+se+PX5Ag+WnN2ut9wWx3e9u562roo5ZZDH3fe7jpJyfF5xs7by5tl6eR3aOw4/c75NDPLHb6OaqdHAAZHhjC4hu/xjt0+VeiiDVOI3q50+eWe2NvsFVR3m0VdXNTx311zAfE6Du5A57AWbiV4JaeR3TZo2BW1laUVptdtDhb7dS0oc4vd3MLWbuPiTsB1Ku0GvsorWVmfx49fcnq7Lam2kVlI2CrNGa2o717Zt5gQ490wRHkBH7tu4HYbZ5Td36PF3UxlZyN5ZC7m5ht0O/nv7V8rhbLddYRTXSgpquIODxHPE2RocPA7OBG/yq5a1rGhjGgNA2AA2ACDF9TrveLDgt2u1i521dPE0iRjQ50MZe0SSgEEbsjL39QR6vUEdF42DuuJyFht14lqrQ+3udUx1V8ZcJDNzs7mWPbdzWub33N1DT6mw6FbCVpQWm12vvBbbdS0neu5pO4hbHzn2nlA3KC7REQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH//2Q==";
const INSTAGRAM = "https://www.instagram.com/metric.architects/";

const GREEN       = "#07381f";
const GREEN_LIGHT = "#e6ede9";
const GREEN_MID   = "#0f5c32";

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

const STEP_META = [
  { icon: "🏗", label: "Project Type" },
  { icon: "🎯", label: "Intent" },
  { icon: "📐", label: "Spaces" },
  { icon: "✨", label: "Style" },
  { icon: "🪨", label: "Materials" },
  { icon: "👤", label: "Contact" },
];

const TOTAL_STEPS = 6;

function chip(active) {
  return {
    padding: "11px 18px",
    borderRadius: "10px",
    border: `${active ? "2px" : "1.5px"} solid ${active ? GREEN : "#d8d8d8"}`,
    background: active ? GREEN : "#fff",
    color: active ? "#fff" : "#444",
    fontWeight: active ? "600" : "400",
    fontSize: "14px",
    cursor: "pointer",
    transition: "all .15s",
    letterSpacing: active ? "0.01em" : "normal",
  };
}

function smChip(active) {
  return {
    ...chip(active),
    fontSize: "13px",
    padding: "9px 14px",
  };
}

function vertBtn(active) {
  return {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 18px",
    borderRadius: "12px",
    border: `${active ? "2px" : "1.5px"} solid ${active ? GREEN : "#d8d8d8"}`,
    background: active ? GREEN : "#fff",
    color: active ? "#fff" : "#333",
    fontWeight: active ? "600" : "400",
    fontSize: "15px",
    cursor: "pointer",
    textAlign: "left",
    transition: "all .15s",
    width: "100%",
  };
}

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
    } catch { setSurveyNum(1); }
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
    setSending(true); setError("");
    const padded = String(surveyNum).padStart(3, "0");
    const date   = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
    const subject = `Survey #${padded} — ${clientName} — ${date}`;
    const body = `METRIC ARCHITECTS — CLIENT BRIEF #${padded}
Submitted: ${date}
${"─".repeat(45)}

CLIENT DETAILS
  Name:   ${clientName}
  Email:  ${email}
  Phone:  ${phone}

PROJECT OVERVIEW
  Category:      ${category}
  Intent:        ${intent}
  No. of Spaces: ${spaceCount}
  Space Types:   ${spaceTypes.length ? spaceTypes.join(", ") : "Not specified"}

DESIGN PREFERENCES
  Style:         ${style}
  Materials:     ${materials || "Not specified"}
  Budget Range:  ${budget || "Not specified"}

ADDITIONAL COMMENTS
  ${comments || "None provided."}

${"─".repeat(45)}
Metric Architects  |  We Create Space`;

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "afc4ed45-72c9-4d67-a284-5457a51454e6",
          subject, name: clientName, email, message: body,
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
      setError("Could not send. Please check your connection.");
    }
    setSending(false);
  }

  /* ── shared styles ── */
  const wrap = {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #f4f7f4 0%, #eef2ee 100%)",
    display: "flex", flexDirection: "column", alignItems: "center",
    padding: "0 16px 80px",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  };
  const card = {
    background: "#fff", borderRadius: "20px",
    padding: "44px 48px", width: "100%", maxWidth: "640px",
    boxShadow: "0 4px 32px rgba(7,56,31,0.08)",
  };
  const btnPrimary = {
    background: GREEN, color: "#fff", border: "none",
    borderRadius: "12px", padding: "15px 32px",
    fontSize: "16px", fontWeight: "600", cursor: "pointer",
    display: "inline-flex", alignItems: "center", gap: "8px",
    letterSpacing: "0.01em",
  };
  const btnSecondary = {
    background: "#fff", color: "#555",
    border: "1.5px solid #d0d0d0", borderRadius: "12px",
    padding: "15px 24px", fontSize: "15px", cursor: "pointer",
  };
  const inputStyle = {
    width: "100%", padding: "14px 18px", fontSize: "15px",
    border: "1.5px solid #d8d8d8", borderRadius: "12px",
    outline: "none", boxSizing: "border-box", color: "#111",
    background: "#fafafa",
  };
  const lbl = {
    fontSize: "12px", fontWeight: "700", color: "#888",
    textTransform: "uppercase", letterSpacing: "0.1em",
    display: "block", marginBottom: "10px",
  };
  const stepTitle = { fontSize: "24px", fontWeight: "700", color: "#111", marginBottom: "8px", lineHeight: "1.3" };
  const stepSub   = { fontSize: "15px", color: "#888", marginBottom: "28px", lineHeight: "1.6" };
  const chipRow   = { display: "flex", flexWrap: "wrap", gap: "10px" };

  /* ── THANK YOU ── */
  if (submitted) return (
    <div style={wrap}>
      <div style={{ paddingTop: "60px", textAlign: "center", maxWidth: "560px", width: "100%" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "100px", objectFit: "contain", marginBottom: "36px", display: "block", margin: "0 auto 36px" }} />

        <div style={{ ...card, textAlign: "center" }}>
          <div style={{ width: "72px", height: "72px", borderRadius: "50%", background: GREEN_LIGHT, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 24px" }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={GREEN} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>

          <div style={{ fontSize: "28px", fontWeight: "700", color: "#111", marginBottom: "12px" }}>
            Thank you, {clientName}!
          </div>
          <div style={{ fontSize: "16px", color: "#666", lineHeight: "1.8", marginBottom: "28px" }}>
            We've received your brief. Our team will review it and get in touch with you shortly to discuss your project.
          </div>

          <div style={{ padding: "14px 20px", background: GREEN_LIGHT, borderRadius: "12px", fontSize: "13px", color: GREEN, fontWeight: "600", marginBottom: "32px", letterSpacing: "0.03em" }}>
            Brief #{String(surveyNum).padStart(3, "0")} · {new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" })}
          </div>

          <div style={{ borderTop: "1px solid #eee", paddingTop: "28px" }}>
            <div style={{ fontSize: "15px", color: "#666", marginBottom: "16px" }}>
              While you wait, explore our work and get inspired.
            </div>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              background: "linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)",
              color: "#fff", textDecoration: "none",
              borderRadius: "12px", padding: "14px 28px",
              fontSize: "15px", fontWeight: "600", letterSpacing: "0.02em",
            }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
              </svg>
              See Our Work on Instagram
            </a>
          </div>
        </div>

        <div style={{ marginTop: "24px", fontSize: "13px", color: "#aaa" }}>Metric Architects · We Create Space</div>
      </div>
    </div>
  );

  /* ── WELCOME ── */
  if (step === 0) return (
    <div style={wrap}>
      <div style={{ paddingTop: "60px", textAlign: "center", maxWidth: "600px", width: "100%" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "100px", objectFit: "contain", marginBottom: "44px", display: "block", margin: "0 auto 44px" }} />

        <div style={{ ...card, textAlign: "left" }}>
          <div style={{ fontSize: "30px", fontWeight: "800", color: "#111", marginBottom: "10px", lineHeight: "1.2" }}>
            Tell Us What You Need
          </div>
          <div style={{ fontSize: "16px", color: "#777", lineHeight: "1.8", marginBottom: "32px" }}>
            Help us understand your vision. This takes about 3 minutes and ensures we come fully prepared to your first consultation.
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "36px" }}>
            {[
              { icon: "🏗", text: "Project type & intent" },
              { icon: "📐", text: "Space requirements" },
              { icon: "✨", text: "Design style & materials" },
              { icon: "👤", text: "Your contact details" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "14px", padding: "12px 16px", background: "#f8faf8", borderRadius: "10px" }}>
                <span style={{ fontSize: "20px" }}>{item.icon}</span>
                <span style={{ fontSize: "15px", color: "#444", fontWeight: "500" }}>{item.text}</span>
              </div>
            ))}
          </div>

          <button onClick={() => setStep(1)} style={{ ...btnPrimary, width: "100%", justifyContent: "center", padding: "18px", fontSize: "17px" }}>
            Get Started
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
            </svg>
          </button>
        </div>

        <div style={{ marginTop: "24px", fontSize: "13px", color: "#bbb" }}>Metric Architects · We Create Space</div>
      </div>
    </div>
  );

  /* ── STEPS ── */
  const progress = (step / TOTAL_STEPS) * 100;

  return (
    <div style={wrap}>
      {/* Header */}
      <div style={{ width: "100%", maxWidth: "640px", display: "flex", flexDirection: "column", alignItems: "center", padding: "28px 0 16px", gap: "10px" }}>
        <img src={METRIC_LOGO} alt="Metric Architects" style={{ height: "60px", objectFit: "contain" }} />
        <span style={{ fontSize: "13px", color: "#aaa", fontWeight: "500" }}>Step {step} of {TOTAL_STEPS}</span>
      </div>

      {/* Progress bar */}
      <div style={{ width: "100%", maxWidth: "640px", marginBottom: "12px" }}>
        <div style={{ height: "5px", background: "#e0e0e0", borderRadius: "10px", overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${progress}%`, background: GREEN, borderRadius: "10px", transition: "width .4s ease" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "8px" }}>
          {STEP_META.map((s, i) => (
            <div key={i} style={{ fontSize: "11px", color: i < step ? GREEN : "#ccc", fontWeight: i < step ? "600" : "400", textAlign: "center", flex: 1 }}>
              <div style={{ fontSize: "14px" }}>{s.icon}</div>
              <div style={{ display: "none" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Card */}
      <div style={card}>

        {/* STEP 1 */}
        {step === 1 && (<>
          <div style={stepTitle}>What type of project is this?</div>
          <div style={stepSub}>Select the category that best describes your project.</div>
          <div style={chipRow}>
            {PROJECT_CATEGORIES.map(c => (
              <button key={c} onClick={() => setCategory(c)} style={chip(category === c)}>{c}</button>
            ))}
          </div>
        </>)}

        {/* STEP 2 */}
        {step === 2 && (<>
          <div style={stepTitle}>What is the intent of your project?</div>
          <div style={stepSub}>Tell us what type of work you are looking for.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {PROJECT_INTENTS.map((item, i) => {
              const icons = ["🏗","🔨","🪑","📐","📋"];
              return (
                <button key={item} onClick={() => setIntent(item)} style={vertBtn(intent === item)}>
                  <span style={{ fontSize: "20px" }}>{icons[i]}</span>
                  <span>{item}</span>
                </button>
              );
            })}
          </div>
        </>)}

        {/* STEP 3 */}
        {step === 3 && (<>
          <div style={stepTitle}>How many spaces are involved?</div>
          <div style={stepSub}>Enter a number and select which spaces apply.</div>
          <div style={{ marginBottom: "24px" }}>
            <span style={lbl}>Number of Spaces</span>
            <input type="number" min="1" value={spaceCount} onChange={e => setSpaceCount(e.target.value)}
              placeholder="e.g. 4" style={{ ...inputStyle, maxWidth: "160px" }} />
          </div>
          <span style={lbl}>Space Types (select all that apply)</span>
          <div style={chipRow}>
            {SPACE_TYPES.map(s => (
              <button key={s} onClick={() => toggleSpaceType(s)} style={smChip(spaceTypes.includes(s))}>{s}</button>
            ))}
          </div>
        </>)}

        {/* STEP 4 */}
        {step === 4 && (<>
          <div style={stepTitle}>What design style appeals to you?</div>
          <div style={stepSub}>Choose the direction that best matches your vision.</div>
          <div style={chipRow}>
            {DESIGN_STYLES.map(s => (
              <button key={s} onClick={() => setStyle(s)} style={chip(style === s)}>{s}</button>
            ))}
          </div>
        </>)}

        {/* STEP 5 */}
        {step === 5 && (<>
          <div style={stepTitle}>Materials & notes</div>
          <div style={stepSub}>Share anything you have in mind — materials, references, or preferences.</div>
          <div style={{ marginBottom: "20px" }}>
            <span style={lbl}>Materials in Mind</span>
            <textarea value={materials} onChange={e => setMaterials(e.target.value)}
              placeholder="e.g. marble, oak wood, brushed brass, concrete..." rows={3}
              style={{ ...inputStyle, resize: "vertical", lineHeight: "1.7" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <span style={lbl}>Budget Range</span>
            <div style={chipRow}>
              {BUDGET_RANGES.map(b => (
                <button key={b} onClick={() => setBudget(b)} style={smChip(budget === b)}>{b}</button>
              ))}
            </div>
          </div>
          <div>
            <span style={lbl}>Additional Comments</span>
            <textarea value={comments} onChange={e => setComments(e.target.value)}
              placeholder="Any special requirements, inspiration, or notes for our team..." rows={4}
              style={{ ...inputStyle, resize: "vertical", lineHeight: "1.7" }} />
          </div>
        </>)}

        {/* STEP 6 */}
        {step === 6 && (<>
          <div style={stepTitle}>Almost there — your details</div>
          <div style={stepSub}>We will use these to follow up with you about your project.</div>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div>
              <span style={lbl}>Full Name *</span>
              <input value={clientName} onChange={e => setClientName(e.target.value)}
                placeholder="e.g. Ahmed Al-Mansour" style={inputStyle} />
            </div>
            <div>
              <span style={lbl}>Email Address *</span>
              <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                placeholder="e.g. ahmed@email.com" style={inputStyle} />
            </div>
            <div>
              <span style={lbl}>Phone Number *</span>
              <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                placeholder="e.g. +965 9999 9999" style={inputStyle} />
            </div>
          </div>
          {error && <div style={{ marginTop: "16px", color: "#cc0000", fontSize: "14px" }}>{error}</div>}
        </>)}

      </div>

      {/* Navigation */}
      <div style={{ width: "100%", maxWidth: "640px", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        <button onClick={() => setStep(s => s - 1)} style={btnSecondary}>← Back</button>
        {step < TOTAL_STEPS
          ? <button onClick={() => setStep(s => s + 1)} disabled={!canProceed()}
              style={{ ...btnPrimary, opacity: canProceed() ? 1 : 0.4 }}>
              Continue →
            </button>
          : <button onClick={submitSurvey} disabled={!canProceed() || sending}
              style={{ ...btnPrimary, opacity: (canProceed() && !sending) ? 1 : 0.4 }}>
              {sending ? "Sending..." : "Submit ✓"}
            </button>
        }
      </div>

      <div style={{ marginTop: "24px", fontSize: "12px", color: "#bbb" }}>Metric Architects · We Create Space</div>
    </div>
  );
}
