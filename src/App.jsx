import PageAboutMeApp from "Components/Pages/PageAboutMeApp";
import PageStartApp from "Components/Pages/PageStartApp";
import React from "react";

export default function App() {
  return (
    <>
      <section>
        <PageStartApp />
      </section>
      <section>
        <PageAboutMeApp />
      </section>
    </>
  );
}
