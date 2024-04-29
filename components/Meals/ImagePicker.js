'use client';

import { useRef, useState } from 'react';
import styles from './ImagePicker.module.css';
import Image from 'next/image';

export const ImagePicker = ({ label, name }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const imageInputElement = useRef();

  const imageButtonClickHandler = () => {
    imageInputElement.current?.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setSelectedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setSelectedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!selectedImage && <p>No image selected</p>}
          {selectedImage && (
            <Image src={selectedImage} alt="preview uploaded image" fill />
          )}
        </div>
        <input
          ref={imageInputElement}
          className={styles.input}
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={imageButtonClickHandler}
        >
          Pick An Image
        </button>
      </div>
    </div>
  );
};
