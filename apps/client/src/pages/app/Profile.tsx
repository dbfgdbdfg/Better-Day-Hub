import { useState } from "react";
import { Bell, CalendarRange, ChevronRight, Globe2, HeartHandshake, Languages, LockKeyhole, LogOut, MoonStar, ShieldCheck, UserRound } from "lucide-react";
import { SettingRow, Toggle } from "@/components/app/Ui";
export default function Profile() {
  const [notifications, setNotifications] = useState(true);
  const [wellnessTips, setWellnessTips] = useState(true);
  return <div className="page-stack profile-page">
      <section className="profile-card">
        <div className="profile-avatar">M</div>
        <div>
          <h2>Maya Chen</h2>
          <p>Tracking since March 2025</p>
          <span className="profile-status">
            <ShieldCheck size={13} /> Health data protected
          </span>
        </div>
        <button aria-label="Edit profile"><ChevronRight size={20} /></button>
      </section>

      <section className="profile-highlight health-card">
        <span className="highlight-icon mt-0 mb-0 ml-2.5 text-center pt-[3px] pb-[3px]"><HeartHandshake size={23} className="lucide lucide-heart-handshake lucide lucide-heart-handshake pt-0 pb-0 mt-[7px] mb-[7px]" /></span>
        <div>
          <strong>Your Better Day streak</strong>
          <span>7 days of mindful check-ins</span>
        </div>
        <strong className="streak-count">7</strong>
      </section>

      <section>
        <h2 className="settings-heading">Cycle & reminders</h2>
        <div className="settings-group health-card">
          <SettingRow icon={<CalendarRange size={19} />} title="Cycle preferences" detail="28-day average · 5-day period" onClick={() => undefined} />
          <SettingRow icon={<Bell size={19} />} title="Cycle notifications" detail="Periods, fertile window, logging" action={<Toggle checked={notifications} onChange={() => setNotifications(value => !value)} label="Toggle cycle notifications" />} />
          <SettingRow icon={<MoonStar size={19} />} title="Wellness tips" detail="Gentle daily guidance" action={<Toggle checked={wellnessTips} onChange={() => setWellnessTips(value => !value)} label="Toggle wellness tips" />} />
        </div>
      </section>

      <section>
        <h2 className="settings-heading">Preferences</h2>
        <div className="settings-group health-card">
          <SettingRow icon={<Languages size={19} />} title="Language" detail="English" onClick={() => undefined} />
          <SettingRow icon={<Globe2 size={19} />} title="Region" detail="Singapore" onClick={() => undefined} />
          <SettingRow icon={<UserRound size={19} />} title="Personal information" detail="Name, birthday, health profile" onClick={() => undefined} />
        </div>
      </section>

      <section>
        <h2 className="settings-heading">Privacy & support</h2>
        <div className="settings-group health-card">
          <SettingRow icon={<LockKeyhole size={19} />} title="Privacy controls" detail="Data, consent, app lock" onClick={() => undefined} />
          <SettingRow icon={<ShieldCheck size={19} />} title="Health data & security" detail="How Better Day protects you" onClick={() => undefined} />
        </div>
      </section>

      <button className="sign-out-button">
        <LogOut size={18} />
        Sign out
      </button>
      <p className="app-version">Better Day Hub · Version 1.0 prototype</p>
    </div>;
}