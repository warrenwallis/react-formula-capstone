const Field = (props) => {
  const { field, values, onChange } = props;
  return (
    <div className="flex flex-col w-full">
      <label className="text-slate-400 my-2" htmlFor={field.label}>
        {field.label}
      </label>
      <input
        className="border border-slate-300 bg-slate-50 rounded-lg p-1 focus:outline-emerald-600"
        id={field.label}
        type={field.type}
        value={values[field.label]}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
