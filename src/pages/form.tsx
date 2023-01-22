'use client'

import { useForm, FormProvider } from "react-hook-form";
import InputComponent from "../components/InputComponent";
import SelectionComponent from "../components/SelectionComponent";

interface FormType {
  fullname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  gender: string;
  city: string;
}

export default function form() {
  const method = useForm<FormType>({
    defaultValues: {
      fullname: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      gender: "",
      city: "",
    },
  });

  const { handleSubmit, setError } = method;

  const onSubmit = (data) => {
    if (data.password.valueOf() === data.confirmPassword.valueOf())
      console.log(data);
    else {
      setError("password", {
        message: "Password didn't matched by confirmPassword",
      });
    }
  };

  return (
    <div className="flex justify-center pt-5 pb-5">
      <FormProvider {...method}>
        <form className="w-full max-w-lg" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
              <InputComponent
                name="username"
                label="username *"
                placeholder="@frontendDev"
                rules={{
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                }}
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputComponent
                name="password"
                label="password *"
                placeholder="0000"
                rules={{
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                  min: {
                    value: 4,
                    message: "Your password is less than 4 character!",
                  },
                }}
                type="password"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputComponent
                name="confirmPassword"
                label="confirm password *"
                placeholder="repeat"
                rules={{
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                }}
                type="password"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputComponent
                rules={{
                  required: false,
                  pattern: {
                    value: /(\+?98|098|0|0098)?(9\d{9})/i,
                    message: "Phone is not valid!",
                  },
                }}
                name="phone"
                placeholder="phone number: 123456789"
                label="phone"
                type="tel"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <InputComponent
                rules={{
                  required: false,
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Email not valid!",
                  },
                }}
                name="email"
                placeholder="example@example.com"
                label="email"
                type="email"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 flex flex-row items-baseline">
              <div className="w-inherit">
                <InputComponent
                  rules={{
                    required: {
                      value: true,
                      message: "This is required.",
                    },
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  name="gender"
                  placeholder=""
                  label="male *"
                  type="radio"
                  value="male"
                  checked
                />
              </div>
              <div className="w-inherit ml-3">
                <InputComponent
                  rules={{
                    required: {
                      value: true,
                      message: "This is required.",
                    },
                  }}
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  name="gender"
                  placeholder=""
                  label="female"
                  type="radio"
                  value="female"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 ">
              <SelectionComponent
                name="city"
                label="city"
                rules={{
                  required: false,
                }}
                options={[
                  "tehran",
                  "shiraz",
                  "esfahan",
                  "tabriz",
                  "talesh",
                  "semnan",
                ]}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
              <InputComponent
                name="fullname"
                label="fullname *"
                placeholder="mohammad nazari"
                rules={{
                  required: {
                    value: true,
                    message: "This is required.",
                  },
                }}
                type="text"
              />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 mt-5">
              <button
                type="submit"
                className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
