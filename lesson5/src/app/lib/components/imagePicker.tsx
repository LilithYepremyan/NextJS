"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const ImagePicker = () => {
  const photo = useRef<HTMLInputElement>(null);
  const [url, setUrl] = useState<string>("");

  const handleChange = () => {
    let file = photo.current?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setUrl(reader.result as string);
      };
    }
  };

  return (
    <>
      <input
        type="file"
        className="input is-dark is-hidden"
        ref={photo}
        name="cover"
        onChange={handleChange}
      />
      <button
        onClick={() => photo.current?.click()}
        type="button"
        className="button is-light"
      >
        Pick
      </button>
      {url && (
        <div className="box has-background-light">
          <Image src={url} width={150} height={150} alt="Course photo" />
        </div>
      )}
    </>
  );
};

export default ImagePicker;
