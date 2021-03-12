## Quiz app built with React

Users can generate their own custom quiz and then play it. They are able to choose the number of questions, category and
difficulty level.

You can check out the LIVE project [**HERE**](https://quiz-app-mr.netlify.app/ 'Completed project').

---

### Motivation

I identified I had to improve my core knowledge in React and JavaScript to feel more comfortable with them. A quiz app seemed
a good option to practice and solidify the fundamental skills. I found [Open Trivia Database API](https://opentdb.com/ 'Trivia  Database homepage') to supply my app with data.

---

### Technologies used:

- **ReactJS**
- **React Router** for routing
- **Framer Motion** for animations
- **SASS** (SCSS modules)

---

### Challenges

One particular tricky situation was when I wished to
simultaneously fetch data and redirect the user to a new page
after a button click. I only managed to make one of the two to successfully work. I
asked for help from a more experienced friend, and the
solution was to use React Router useHistory hook and the push
method. I had to add the state, which included the fetched
questions, as an additional parameter `history.push({ pathname: '/questions', state: { questions } });`.

I had never worked with an animations library before, so getting accustomed to **Framer Motion** was also an interesting learning
experience. I got a bit overwhelmed with all the options
available to me at first. I chose to just start small and not go super crazy with all the possibilites.

---

### Screenshots of the live project:

Homepage:

<p align="center">
<img src="https://i.imgur.com/gjWU4NN.png" alt="Screencapture of the deployed Quiz App project intro section. User can create a custom quiz and then play it." title="Screenshot of the landing page intro"/>
</p>

---

Quiz setup page:

<p align="center">
<img src="https://i.imgur.com/mgtunOj.png" alt="Screencapture of the deployed Quiz App project setup page" title="Screenshot of the quiz setup page"/>
</p>

---

Questions page:

<p align="center">
<img src="https://i.imgur.com/PtShSj2.png" alt="Screencapture of the deployed Quiz App project questions page" title="Screenshot of the questions page"/>
</p>

---

Result page:

<p align="center">
<img src="https://i.imgur.com/X8aMKBB.png" alt="Screencapture of the deployed Quiz App project result page." title="Screenshot of the result page"/>
</p>

---

Modal section:

<p align="center">
<img src="https://i.imgur.com/3bkUCrK.png" alt="Screencapture of the deployed Quiz App project modal component." title="Screenshot of the modal component in result section"/>
</p>
