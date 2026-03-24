import "@/scss/main.scss";

export function DropDownMenu({ title, options, value, onChange }) {
  return (
    <div className="dropdownmenu">
      <span className="dropdownmenu__title">{title}</span>
      <select
        className="dropdownmenu_options"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.name} value={opt.name}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
