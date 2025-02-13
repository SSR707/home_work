import { Header } from "./components/header/header";
import "./components/header/header.css";
import { Hero } from "./components/hero/hero.jsx";
import "./components/hero/hero.css";
import { ManageLi } from "./components/manage/manage.jsx";
import "./components/manage/manage.css";
import { UserCard } from "./components/card/card.jsx";
import "./components/card/card.css";
import cardIcon from "./utils/imgs/card__icon.svg";
import "./utils/css/simplify.css";
import { Footer } from "./components/footer/footer.jsx";
import "./components/footer/footer.css";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="manage">
          <div className="container">
            <div className="manage__block">
              <div className="manage__content">
                <h2 className="manage__title">
                  What’s different about Manage?
                </h2>
                <p className="manage__text">
                  Manage provides all the functionality your team needs, without
                  the complexity. Our software is tailor-made for modern digital
                  product teams.
                </p>
              </div>
              <ul className="manage_list">
                <ManageLi
                  number="01"
                  title="Track company-wide progress"
                  text="See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again."
                />
                <ManageLi
                  number="02"
                  title="Advanced built-in reports"
                  text="Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed."
                />
                <ManageLi
                  number="03"
                  title="Everything you need in one place"
                  text="Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution."
                />
              </ul>
            </div>
          </div>
        </section>
        <section className="card">
          <div className="container">
            <div className="card__block">
              <h2 className="card__title">What they’ve said</h2>
              <ul className="card__list">
                <UserCard
                  classItem="card__item"
                  name="Ali Bravo"
                  text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
                />
                <UserCard
                  classItem="card__item card__item-2"
                  name="Ali Bravo"
                  text="“We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.”"
                />
              </ul>
              <div className="card__img">
                <img src={cardIcon} alt="" />
              </div>
              <button className="card__btn">Get Started</button>
            </div>
          </div>
        </section>
        <section className="simplify">
          <div className="container">
            <div className="simplify__block">
              <h2 className="simplify__title">
                Simplify how your team works today.
              </h2>
              <button className="simplify__btn">Get Started</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
