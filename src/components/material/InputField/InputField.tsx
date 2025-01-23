"use client";

import { useRouter } from "next/navigation";
import React, {
  ChangeEvent,
  JSX,
  KeyboardEvent,
  useEffect,
  useRef,
  useState,
} from "react";

type Props = {
  id: string;
  name: string;
  placeholder?: string;
  redirectsTo: string;
  categoryParam?: string;
  defaultValue?: string;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  autoFocus?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
};

export default function InputField({
  id,
  name,
  placeholder = "Digite o texto",
  redirectsTo,
  categoryParam,
  defaultValue,
  icon: Icon,
  autoFocus = false,
}: Props): JSX.Element {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const [searchInput, setSearchInput] = useState<string>("");
  const handleSubmit = (querySearch: string) => {
    let url = `${redirectsTo}?search=${querySearch}`;

    if (categoryParam) {
      url += `&category=${categoryParam}`;
    }

    router.push(url);
  };

  useEffect(() => {
    if (inputRef.current && defaultValue) {
      const input = inputRef.current;
      input.setSelectionRange(input.value.length, input.value.length);
    }
  }, [defaultValue]);

  return (
    <div className="relative">
      {Icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          {" "}
          <Icon />{" "}
        </span>
      )}
      <input
        ref={inputRef}
        id={id}
        name={name}
        type="text"
        defaultValue={defaultValue}
        className={`w-full p-4 ${[
          Icon ? "pl-10" : "p-4",
        ]} border-x border-y rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#5DC04F]`}
        autoFocus={autoFocus}
        placeholder={placeholder}
        onKeyDown={(e) => e.key === "Enter" && handleSubmit(searchInput)}
        onChange={(e) => setSearchInput(e.target.value)}
      />
    </div>
  );
}
