import { useController, useFormContext } from "react-hook-form";

interface InputType {
  name: string;
  label: string;
  placeholder: string;
  rules: Object;
  type: string;
  className?: string;
  value?: string;
  checked?: boolean;
}

const InputComponent = (props: InputType): JSX.Element => {
  const { control } = useFormContext();
  const {
    field,
    formState: { errors },
  } = useController({
    name: props.name,
    control: control,
    rules: props.rules,
  });

  return (
    <>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={props.name}
      >
        {props.label}
      </label>
      <input
        {...field}
        type={props.type}
        placeholder={props.placeholder ? props.placeholder : undefined}
        value={props.value ? props.value : undefined}
        className={`${props.className} ? ${props.className} : "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"`}
        name={props.name}
      />
      {errors?.[props.name] ? (
        <p className="text-red-500 text-xs italic pl-2">
          {errors?.[props.name].message}
        </p>
      ) : null}
    </>
  );
};

export default InputComponent;
