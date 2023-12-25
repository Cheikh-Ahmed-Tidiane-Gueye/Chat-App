import React, { useState, useEffect } from "react";

import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../firebase";

import toast, { Toaster } from "react-hot-toast";

import { InputText } from "primereact/inputtext";
import { Password } from "primereact/password";

import userIcon from "../assets/icons/user.png";
import emailIcon from "../assets/icons/email.png";
import passwordIcon from "../assets/icons/password.png";
import logo from "../assets/logo/chat-app-icon-1.png";
import add from "../assets/icons/image.png";
import { Link, useNavigate } from "react-router-dom";

export default function Inscription() {
  const navigate = useNavigate();
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Recuperer la valeur des inputs
  async function handleSubmit(e) {
    e.preventDefault();
    const file = e.target[4].files[0]; //Pour l'image de profil

    // Expression régulière pour valider une adresse e-mail
    const isValidEmail = (email) => {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-z.-]+\.[a-z]{3}$/;
      return emailRegex.test(email);
    };

    if (!isValidEmail(email)) {
      toast.error(`L'adresse e-mail n'est pas valide`);
      return;
    }

    if (password !== confirmPassword) {
      // Afficher un toast si les mots de passe ne correspondent pas
      toast.error("Les mots de passe ne correspondent pas");
      return; // Arrêter le processus d'inscription
    }
    if (password.length < 6 || confirmPassword.lenght < 6) {
      toast.error("Les mots de passe doivent au moin contenir 6 caracteres");
      return;
    }

    try {
      // Vérifier si l'e-mail existe déjà dans la base de données
      const checkExistingUser = await getDoc(doc(db, "users", email));
      if (checkExistingUser.exists()) {
        // Afficher un toast si l'e-mail existe déjà
        toast.error("L'email existe déjà");
        return; // Arrêter le processus d'inscription
      }

      // Création d'un utilisateur avec l'email et le mot de passe fournis
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      toast.success("Inscription reussis");

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

            await setDoc(doc(db, "userChats", res.user.uid), {});

            // Réinitialise les valeurs des champs après une inscription réussie
            setDisplayName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            e.target[4].value = null; // Champ de fichier

            navigate("/");
          });
        }
      );
    } catch (error) {
      console.error(error.code, error.message);
      if (error.code === "auth/email-already-in-use") {
        toast.error("L'email existe déjà");
      }
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
              <img src={userIcon} alt="User" className="img-fluid icon2" />
            </span>
            <InputText
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Prenom & Nom"
              id="username"
              aria-describedby="username-help"
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={emailIcon} alt="" className="icon2" />
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control me-4"
              placeholder="dresse email"
              aria-label="email"
              aria-describedby="basic-addon1"
              required
            />
          </div>

          <div className="input-group mb-3 d-flex justify-content-center align items-center">
            <span className="input-group-text" id="basic-addon1">
              <img src={passwordIcon} alt="" className="icon2" />
            </span>
            <Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Mot de passe"
              toggleMask
              required
            />
          </div>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <img src={passwordIcon} alt="" className="icon2" />
            </span>
            <Password
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirmer mot de passe"
              toggleMask
              required
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
          <Link to="/connexion" style={{ textDecoration: "none" }}>
            <span className="text-span"> connecter-vous</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
