"use server";
import { createWriteStream } from "fs";
import { InputCourse, addCourse } from "../api";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { app } from "../firebase";
const handleUpload = (photo: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const storage = getStorage(app);
    const storageRef = ref(storage, "images/" + Date.now() + ".jpg");
    const uploadTask = uploadBytesResumable(storageRef, photo);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        reject(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};
export const handleAdd = async (data: FormData) => {
  const photo = data.get("cover") as File;
  if (photo) {
    const url = await handleUpload(photo);

    let course: InputCourse = {
      name: data.get("name") as string,
      price: +(data.get("price") as string),
      duration: +(data.get("duration") as string),
      cover: url,
    };
    revalidatePath("/");
    addCourse(course);
    redirect("/");
  }
};
