import React from "react";
import styles from "../../Styles/linguages.module.css";

export default function Linguages() {
  return (
    <>
      <div className={styles.linguages}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.cod}>
          <path
            d="M22.25 12.5L22.5074 12.7574C24.5074 14.7573 25.5074 15.7574 25.5074 17C25.5074 18.2426 24.5074 19.2426 22.5074 21.2426L22.25 21.5"
            stroke="#00E833"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M18.9409 9.75562L16.9997 17L15.0586 24.2446"
            stroke="#00E833"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            d="M11.7495 12.5L11.4922 12.7574C9.49219 14.7573 8.49219 15.7574 8.49219 17C8.49219 18.2426 9.49219 19.2426 11.4922 21.2426L11.7495 21.5"
            stroke="#00E833"
            stroke-width="3"
            stroke-linecap="round"
          />
          <path
            opacity="0.5"
            d="M2 17C2 9.92893 2 6.39339 4.1967 4.1967C6.39339 2 9.92893 2 17 2C24.071 2 27.6066 2 29.8032 4.1967C32 6.39339 32 9.92893 32 17C32 24.071 32 27.6066 29.8032 29.8032C27.6066 32 24.071 32 17 32C9.92893 32 6.39339 32 4.1967 29.8032C2 27.6066 2 24.071 2 17Z"
            stroke="#00E833"
            stroke-width="4"
          />
        </svg>
        <h1 className={styles.trabalho}>Uso no Trabalho</h1>
        <div className={styles.effect}>
          <div className={styles.linguages__ling}>
            <h5>MySQL</h5>
            <h5>Oracle</h5>
            <h5>Firebird</h5>
          </div>
          <div className={styles.linguages__ling2}>
            <h5>Python</h5>
            <h5>Pentaho</h5>
          </div>
        </div>
      </div>

      <div className={styles.fun}>
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.fun__icon}>
          <path
            d="M19.9032 16.7588C20.5491 17.0169 20.8735 17.7603 20.4865 18.3383C20.0451 18.9975 19.4749 19.5663 18.8058 20.0079C17.784 20.6822 16.5804 21.0278 15.3565 20.9982C14.1327 20.9688 12.9472 20.5656 11.959 19.8431C11.3118 19.3697 10.7697 18.7742 10.3605 18.0944C10.0017 17.4984 10.3616 16.7715 11.0192 16.5449C11.6768 16.3182 12.3797 16.6911 12.8245 17.2259C13.006 17.4441 13.2144 17.6405 13.446 17.8098C14.0193 18.2291 14.7072 18.4631 15.4171 18.4802C16.1272 18.4973 16.8255 18.2967 17.4183 17.9055C17.6578 17.7474 17.8755 17.5614 18.0672 17.3522C18.5371 16.8393 19.2573 16.5008 19.9032 16.7588Z"
            fill="#00E833"
          />
          <path
            d="M12.5 10.5C12.5 9.67158 11.8284 9 11 9C10.1716 9 9.5 9.67158 9.5 10.5V12C9.5 12.8284 10.1716 13.5 11 13.5C11.8284 13.5 12.5 12.8284 12.5 12V10.5Z"
            fill="#00E833"
          />
          <path
            d="M21.5 10.5C21.5 9.67158 20.8284 9 20 9C19.1716 9 18.5 9.67158 18.5 10.5V12C18.5 12.8284 19.1716 13.5 20 13.5C20.8284 13.5 21.5 12.8284 21.5 12V10.5Z"
            fill="#00E833"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.5 15C0.5 6.71572 7.21572 0 15.5 0C23.7842 0 30.5 6.71572 30.5 15C30.5 23.2842 23.7842 30 15.5 30C7.21572 30 0.5 23.2842 0.5 15ZM15.5 3C8.87258 3 3.5 8.37258 3.5 15C3.5 21.6275 8.87258 27 15.5 27C22.1275 27 27.5 21.6275 27.5 15C27.5 8.37258 22.1275 3 15.5 3Z"
            fill="#00E833"
          />
        </svg>
        <h1 className={styles.fun__hob}>Uso por Diversão</h1>
        <div className={styles.linguages__fun}>
          <h5>React</h5>
          <h5>Java</h5>
          <h5>Js</h5>
        </div>
        <div className={styles.linguages__fun2}>
          <h5>HTML</h5>
          <h5>CSS</h5>
          <h5>NodeJS</h5>
        </div>
      </div>
    </>
  );
}
