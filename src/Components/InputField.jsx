export default function InputField({ label, name, type, value, onChange }) {
  return (
    <input className="input-group" type={type} name={name} value={value} onChange={onChange} placeholder={label} required />
  );
}
