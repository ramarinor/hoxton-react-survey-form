import { useState } from "react";
import AnswersList from "./AnswersList";

function Main() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [answersList, setAnswersList] = useState([]);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList answersList={answersList} />
      </section>
      <section className="main__form">
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            const updatedAnswersList = JSON.parse(JSON.stringify(answersList));
            const newAnswersList = {
              bestFeatures: [...e.target.bestFeatures]
                .filter((input) => input.checked)
                .map((input) => input.value),
              worstFeatures: [...e.target.worstFeatures]
                .filter((input) => input.checked)
                .map((input) => input.value),
              consistency: e.target.consistency.value,
              colour: e.target.colour.value,
              logo: e.target.logo.value,
              timeSpent: [...e.target.timeSpent]
                .filter((input) => input.checked)
                .map((input) => input.value),
              review: e.target.review.value,
              username: e.target.username.value,
              email: e.target.email.value
            };
            updatedAnswersList.push(newAnswersList);
            setAnswersList(updatedAnswersList);
            e.target.reset();
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>
          <div className="form__group">
            <h3>
              What would you say that are the best features of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="colour" />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="sound" />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="logo" />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="bestFeatures" type="checkbox" value="size" />
                  Its big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>
              What would you say that are the worst bits of your rubber duck?
            </h3>
            <ul>
              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="colour" />
                  It's yellow!
                </label>
              </li>
              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="sound" />
                  It squeaks!
                </label>
              </li>
              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="logo" />
                  It has a logo!
                </label>
              </li>
              <li>
                <label>
                  <input name="worstFeatures" type="checkbox" value="size" />
                  Its big!
                </label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck consistency?</h3>
            <ul>
              <li>
                <input
                  id="consistency1"
                  type="radio"
                  name="consistency"
                  value="1"
                />
                <label htmlFor="consistency1">1</label>
              </li>
              <li>
                <input
                  id="consistency2"
                  type="radio"
                  name="consistency"
                  value="2"
                />
                <label htmlFor="consistency2">2</label>
              </li>
              <li>
                <input
                  id="consistency3"
                  type="radio"
                  name="consistency"
                  value="3"
                />
                <label htmlFor="consistency3">3</label>
              </li>
              <li>
                <input
                  id="consistency4"
                  type="radio"
                  name="consistency"
                  value="4"
                />
                <label htmlFor="consistency4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck colour?</h3>
            <ul>
              <li>
                <input id="colour1" type="radio" name="colour" value="1" />
                <label htmlFor="colour">1</label>
              </li>
              <li>
                <input id="colour2" type="radio" name="colour" value="2" />
                <label htmlFor="colour2">2</label>
              </li>
              <li>
                <input id="colour3" type="radio" name="colour" value="3" />
                <label htmlFor="colour3">3</label>
              </li>
              <li>
                <input id="colour4" type="radio" name="colour" value="4" />
                <label htmlFor="colour4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group radio">
            <h3>How do you rate your rubber duck logo?</h3>
            <ul>
              <li>
                <input id="logo1" type="radio" name="logo" value="1" />
                <label htmlFor="logo1">1</label>
              </li>
              <li>
                <input id="logo2" type="radio" name="logo" value="2" />
                <label htmlFor="logo2">2</label>
              </li>
              <li>
                <input id="logo3" type="radio" name="logo" value="3" />
                <label htmlFor="logo3">3</label>
              </li>
              <li>
                <input id="logo4" type="radio" name="logo" value="4" />
                <label htmlFor="logo4">4</label>
              </li>
            </ul>
          </div>
          <div className="form__group">
            <h3>How do you like to spend time with your rubber duck</h3>
            <ul>
              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="swimming" />
                  Swimming
                </label>
              </li>
              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="bathing" />
                  Bathing
                </label>
              </li>
              <li>
                <label>
                  <input name="timeSpent" type="checkbox" value="chatting" />
                  Chatting
                </label>
              </li>
              <li>
                <label>
                  <input
                    name="timeSpent"
                    type="checkbox"
                    value="noTime"
                  />
                  I don't like to spend time with it
                </label>
              </li>
            </ul>
          </div>
          <label>
            What else have you got to say about your rubber duck?
            <textarea name="review" cols={30} rows={10}></textarea>
          </label>
          <label>
            Put your name here (if you feel like it):
            <input type="text" name="username" />
          </label>
          <label>
            Leave us your email pretty please??
            <input type="email" name="email" />
          </label>
          <input
            className="form__submit"
            type="submit"
            value="Submit Survey!"
          />
        </form>
      </section>
    </main>
  );
}

export default Main;
