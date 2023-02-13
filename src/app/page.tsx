import { About } from "./About/page";
import { Home } from "./Home/page";

export default function Root() {
  return (
    <main>
      <section id="#">
        <Home />
      </section>

      <section id="about">
        <Home />
      </section>

      {/* <section id="about">
        <Home />
      </section> */}
    </main>
  );
}
