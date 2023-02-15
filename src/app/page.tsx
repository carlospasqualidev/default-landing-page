import { About } from "./About/page";
import { Expiriences } from "./Expiriences/page";
import { Home } from "./Home/page";

export default function Root() {
  return (
    <main>
      <section id="#">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="expiriences">
        <Expiriences />
      </section>
    </main>
  );
}
