## Quiz app built with React

Users can generate their own custom quiz and play it. They can choose the number of questions, category and difficulty level. A result screen is shown at the end of the quiz with a chance to review the answers.

You can check out the LIVE project [**HERE**](https://quiz-app-mr.netlify.app/ 'Completed project').

---

### Motivation

Before I started the project I felt like I needed to solidify the fundamental skills in React and JavaScript in general to feel more comfortable with them. A quiz app seemed a good option do to that. It gave me the possibility to use **React Router** for the first time and I also wanted to add animations to my project. I found [Open Trivia Database API](https://opentdb.com/ 'Trivia  Database homepage') to supply my app with data.

---

### Technologies used:

- **ReactJS**
- **React Router** for routing
- **Framer Motion** for animations
- **React Icons** for icons
- **SASS** (SCSS modules)

---

### Special gotchas of this project (problems I faced, unique elements):

One particular challenging part was when I wanted to simultaneously fetch data and redirect the user to a new page after a button click. Initially, I only managed to make one of the two to successfully work. The solution was to use **React Router** useHistory hook and the push method. I had to add the state which included the fetched questions data as an additional parameter `history.push({ pathname: '/questions', state: { questions } });`.

I had never worked with an animations library before, so getting accustomed to **Framer Motion** was also an interesting learning experience. The documentation is quite extensive and there are a lot of options to choose from. It was time consuming to find exactly what I needed. I learned that tweaking animations to just feel right can be a never ending task.

---

### Screenshots of the live project:

Homepage:

<p align="center">
<img src="https://i.imgur.com/QxSe0L0.png" alt="Screencapture of the deployed Quiz App project. User can create a custom quiz and then play it." title="Screenshot of the homepage"/>
</p>

---

Quiz setup page:

<p align="center">
<img src="https://i.imgur.com/mgtunOj.png" alt="Screencapture of the deployed Quiz App project. User can create a custom quiz and then play it." title="Screenshot of the quiz setup page"/>
</p>

---

Questions page:

<p align="center">
<img src="https://i.imgur.com/PtShSj2.png" alt="Screencapture of the deployed Quiz App project." title="Screenshot of the questions page"/>
</p>

---

Result page:

<p align="center">
<img src="https://i.imgur.com/ltcKqtZ.png" alt="Screencapture of the deployed Quiz App project." title="Screenshot of the result page"/>
</p>

---

Modal section:

<p align="center">
<img src="https://i.imgur.com/3bkUCrK.png" alt="Screencapture of the deployed Quiz App project." title="Screenshot of the modal page in result section"/>
</p>
