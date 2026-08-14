import { useMemo, useState } from "react";
import { Activity, BellRing, ChevronLeft, ChevronRight, Droplets, Egg, History, Plus, Sparkles } from "lucide-react";
import { SectionTitle, Toggle } from "@/components/app/Ui";
const weekdays = ["M", "T", "W", "T", "F", "S", "S"];
const calendarDays = Array.from({
  length: 35
}, (_, index) => index - 2);
export default function Track() {
  const [selectedDay, setSelectedDay] = useState(20);
  const [reminders, setReminders] = useState(true);
  const dayLabel = useMemo(() => selectedDay === 20 ? "Today, August 20" : `August ${selectedDay}`, [selectedDay]);
  return <div className="page-stack track-page">
      <section className="cycle-summary">
        <div className="cycle-ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle cx="60" cy="60" r="49" className="ring-track" />
            <circle cx="60" cy="60" r="49" className="ring-progress" />
          </svg>
          <div>
            <span>Day</span>
            <strong>23</strong>
            <small>of 28</small>
          </div>
        </div>
        <div className="cycle-summary-copy">
          <span className="status-chip">Luteal phase</span>
          <h2>5 days until your period</h2>
          <p>Your recent cycles range from 27–29 days.You have 1 painkiller left.</p>
        </div>
      </section>

      <section className="calendar-card health-card">
        <div className="calendar-heading">
          <button aria-label="Previous month">
            <ChevronLeft size={19} />
          </button>
          <div>
            <strong>August 2026</strong>
            <span>Cycle day 23</span>
          </div>
          <button aria-label="Next month">
            <ChevronRight size={19} />
          </button>
        </div>
        <div className="calendar-grid weekday-row">
          {weekdays.map((day, index) => <span key={`${day}-${index}`}>{day}</span>)}
        </div>
        <div className="calendar-grid">
          {calendarDays.map((day, index) => {
          const isPeriod = day >= 14 && day <= 18;
          const isFertile = day >= 24 && day <= 29;
          const isOutside = day < 1 || day > 31;
          const isSelected = day === selectedDay;
          return <button key={`${day}-${index}`} disabled={isOutside} className={["calendar-day", isPeriod ? "period-window" : "", isFertile ? "fertile-window" : "", isSelected ? "selected" : ""].join(" ")} onClick={() => setSelectedDay(day)}>
                {isOutside ? "" : day}
                {day === 27 ? <span className="ovulation-dot" /> : null}
              </button>;
        })}
        </div>
        <div className="calendar-legend">
          <span><i className="legend-period" /> Period</span>
          <span><i className="legend-fertile" /> Fertile window</span>
          <span><i className="legend-ovulation" /> Ovulation</span>
        </div>
      </section>

      <section>
        <SectionTitle title={dayLabel} action="Add log" />
        <div className="daily-log-grid">
          <button className="log-tile">
            <span className="log-icon coral"><Activity size={19} /></span>
            <strong>Symptoms</strong>
            <small>Mild cramps</small>
            <Plus size={16} />
          </button>
          <button className="log-tile">
            <span className="log-icon blue"><Droplets size={19} /></span>
            <strong>Flow</strong>
            <small>No flow</small>
            <Plus size={16} />
          </button>
          <button className="log-tile">
            <span className="log-icon yellow"><Sparkles size={19} /></span>
            <strong>Mood</strong>
            <small>Calm</small>
            <Plus size={16} />
          </button>
        </div>
      </section>

      <section>
        <SectionTitle title="Cycle insights" />
        <div className="insight-list health-card">
          <div className="insight-row">
            <span className="insight-icon mint"><Egg size={20} className="lucide lucide-egg mt-2.5 mb-2.5" /></span>
            <div>
              <strong>Ovulation predicted</strong>
              <span>August 27 · in 18 days</span>
            </div>
            <ChevronRight size={18} />
          </div>
          <div className="insight-row">
            <span className="insight-icon lilac"><History size={20} className="lucide lucide-history mt-2.5 mb-2.5" /></span>
            <div>
              <strong>Cycle history</strong>
              <span>Average cycle: 28 days</span>
            </div>
            <ChevronRight size={18} />
          </div>
          <div className="insight-row pr-3.5 pl-3.5">
            <span className="insight-icon teal"><BellRing size={20} className="lucide lucide-bell-ring mt-2.5 mb-2.5" /></span>
            <div>
              <strong>Period reminders</strong>
              <span>Notify me 3 days before</span>
            </div>
            <Toggle checked={reminders} onChange={() => setReminders(value => !value)} label="Toggle period reminders" />
          </div>
        </div>
      </section>
    </div>;
}