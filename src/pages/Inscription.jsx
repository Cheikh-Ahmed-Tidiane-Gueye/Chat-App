import React from "react";

import user from "../assets/icons/user.png";
import email from "../assets/icons/email.png";
import password from "../assets/icons/password.png";
import logo from "../assets/logo/chat-app-icon-1.png";
import add from "../assets/icons/image.png";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";

import toast, { Toaster } from "react-hot-toast";

export default function Inscription() {
  // Recuperer la valeur des inputs
  async function handleSubmit(e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        (error) => {
          console.error(error.code, error.message);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
          });
        }
      );
    } catch (error) {
      console.error(error.code, error.message);
    }
  }

  return (
    <div className="formContainer">
      <Toaster />
      <div className="formWrapper">
        <span className="logo d-flex flex-column justify-content-center">
          <img src={logo} alt="" className="mylogo" />
        </span>
        <span className="title">Inscription</span>
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <span className="input-group-text bg-glass">
              <img src={user} alt="User" className="img-fluid icon2" />
            </span>
            <input
              type="text"
              aria-label="Prenom"
              name="prenom"
              placeholder="Prenom & Nom"
              id="prenom"
              className="form-control"
              autoComplete="off"
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={email} alt="" className="icon2" />
            </span>
            <input
              type="email"
              className="form-control"
              placeholder="dresse email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Mot de passe"
              aria-label="mot de passe"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <input
              type="password"
              className="form-control"
              placeholder="Confirmer mot de passe"
              aria-label="Confirmer mot de passe"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3 input-group-add-prof">
            <input
              type="file"
              className="form-control"
              aria-describedby="basic-addon1"
              id="file"
              style={{ display: "none" }}
            />
            <label htmlFor="file" className="pointer">
              <img src={add} alt="" className="icon2" />
              <span>Ajouter une photo profile</span>
            </label>
          </div>
          <button type="submit">S'inscrire</button>
        </form>
        <p>
          Vous avez déjà un compte ?
          <span className="text-span"> connecter-vous</span>
        </p>
      </div>
    </div>
  );
}
