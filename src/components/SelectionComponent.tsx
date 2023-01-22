import { useFormContext, useController } from "react-hook-form";

const SelectionComponent = (props:any) => {
  const { control } = useFormContext();
  const { field } = useController({
    name: props.name,
    control: control,
    rules: props.rules,
  });

  return (
    <>
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
      >
        {props.label}
      </label>
      <select
        {...field}
        id={props.name}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {props.options.map((option:any) => {
          return <option value={option}>{option}</option>;
        })}
      </select>
    </>
  );
};

export default SelectionComponent;
