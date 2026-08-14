import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";
export function SectionTitle({
  title,
  action,
  onAction
}: {
  title: string;
  action?: string;
  onAction?: () => void;
}) {
  return <div className="section-title-row">
      <h2>{title}</h2>
      {action ? <button className="text-action" onClick={onAction}>
          {action}
          <ChevronRight size={15} />
        </button> : null}
    </div>;
}
export function SettingRow({
  icon,
  title,
  detail,
  action,
  onClick
}: {
  icon: ReactNode;
  title: string;
  detail?: string;
  action?: ReactNode;
  onClick?: () => void;
}) {
  const Tag = onClick ? "button" : "div";
  return;
}
export function Toggle({
  checked,
  onChange,
  label
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
}) {
  return <button type="button" aria-label={label} aria-pressed={checked} className={checked ? "toggle active" : "toggle"} onClick={event => {
    event.stopPropagation();
    onChange();
  }}>
      <span />
    </button>;
}