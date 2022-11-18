import React, { useEffect, useRef, useState } from "react";
import styles from "/styles/form.module.css";
import axios from "axios";

export default function Form() {
  const [nameActive, setNameActive] = useState(false);
  const [emailActive, setEmailActive] = useState(false);
  const [textActive, setTextActive] = useState(false);
  const [sending, setSending] = useState(false);
  const [message, setMessage] = useState(null);

  const nameRef = useRef();
  const emailRef = useRef();
  const textRef = useRef();

  async function sendMessage() {
    try {
      if (
        sending ||
        emailRef.current.value === "" ||
        nameRef.current.value === "" ||
        textRef.current.value === ""
      )
        return;

      setSending(true);
      let res = await axios.post("/api/contact", {
        email: emailRef.current.value,
        name: nameRef.current.value,
        message: textRef.current.value,
      });
      setSending(false);
      emailRef.current.value = "";
      nameRef.current.value = "";
      textRef.current.value = "";
      setEmailActive(false);
      setNameActive(false);
      setTextActive(false);
      setMessage(res.data.message);
      setTimeout(() => setMessage(null), 5000);
    } catch (err) {
      setMessage("Something Went Wrong");
      setTimeout(() => setMessage(null), 5000);
      console.error(err.message);
    }
  }

  function checkActives(e) {
    if (e.target == nameRef.current || nameRef.current?.value)
      setNameActive(true);
    else setNameActive(false);

    if (e.target == emailRef.current || emailRef.current?.value)
      setEmailActive(true);
    else setEmailActive(false);

    if (e.target == textRef.current || textRef.current?.value)
      setTextActive(true);
    else setTextActive(false);
  }

  useEffect(() => {
    window.addEventListener("click", checkActives);
    return () => window.removeEventListener("click", checkActives);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles["input-wrapper"]}>
        <div className={`${styles.name} ${nameActive ? styles.active : ""}`}>
          <input ref={nameRef} type="text" />
          <span className="material-symbols-outlined">person</span>
        </div>
        <div className={`${styles.email} ${emailActive ? styles.active : ""}`}>
          <input ref={emailRef} type="email" />
          <span className="material-symbols-outlined">mail</span>
        </div>
      </div>
      <textarea
        className={textActive ? styles.active : ""}
        ref={textRef}
        placeholder="Message..."
        cols="30"
        rows="10"
      ></textarea>
      <button onClick={sendMessage}>{sending ? "Sending..." : "Send"}</button>
      <div
        className={`${
          message === "Something Went Wrong" ? styles.failure : styles.success
        } ${message !== null ? styles.show : ""} ${styles.display}`}
      >
        <div />
        <p>{message}</p>
      </div>
    </div>
  );
}
