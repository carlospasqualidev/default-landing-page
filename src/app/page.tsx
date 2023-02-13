import { About } from "./About/page";
import { Home } from "./Home/page";

export default function Root() {
  return (
    <main className="pt-48">
      <section>
        <Home />
      </section>

      <section id="about">
        <Home />
      </section>
    </main>
  );
}
