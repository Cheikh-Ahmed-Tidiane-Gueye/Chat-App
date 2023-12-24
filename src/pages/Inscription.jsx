import React, { useState, useEffect } from "react";

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

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

export default function Inscription() {
  // Recuperer la valeur des inputs
  async function handleSubmit(e) {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const confirmPassword = e.target[3].value;
    const file = e.target[4].files[0];

    if (password !== confirmPassword) {
      // Afficher un toast si les mots de passe ne correspondent pas
      toast.error("Les mots de passe ne correspondent pas");
      return; // Arrêter le processus d'inscription
    }

    try {
      // Création d'un utilisateur avec l'email et le mot de passe fournis
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      // Référence au stockage Firebase pour l'image de profil de l'utilisateur
      const storageRef = ref(storage, displayName);
      // Début du téléchargement de l'image vers le stockage Firebase
      const uploadTask = uploadBytesResumable(storageRef, file);
      // Écouteur d'événement pour la fin du téléchargement de l'image
      uploadTask.on(
        (error) => {
          console.error(error.code, error.message);
        },
        () => {
          // Récupération de l'URL de téléchargement de l'image
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            // Mise à jour du profil utilisateur avec le nom et l'URL de l'image
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });

            // Création d'un document utilisateur dans Firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });
            toast.success("Inscription reussis");
            // Réinitialiser les valeurs des champs après une inscription réussie
            e.target[0].value = ""; // Champ Prenom & Nom
            e.target[1].value = ""; // Champ Email
            e.target[2].value = ""; // Champ Mot de passe
            e.target[3].value = ""; // Champ Confirmer mot de passe
            e.target[4].value = null; // Champ de fichier
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
            <InputText
              placeholder="Prenom & Nom"
              id="username"
              aria-describedby="username-help"
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={email} alt="" className="icon2" />
            </span>
            <input
              type="email"
              className="form-control me-4"
              placeholder="dresse email"
              aria-label="email"
              aria-describedby="basic-addon1"
            />
          </div>

          <div className="input-group mb-3 d-flex justify-content-center align items-center">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <Password placeholder="Mot de passe" toggleMask />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={password} alt="" className="icon2" />
            </span>
            <Password placeholder="Confirmer mot de passe" toggleMask />
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
