REACT-JSON-TO-QUIZ
==================

This is a small project to helps you create a quiz.

The format
==========

```
 id: "1",
  title: "Test 01",
  image: "http://knocktemplens.ie/wp-content/uploads/2015/01/quiz.jpg",
  questions: [
    {
      title: "1 + 1 = ?",
      duration: 10,
      alternatives: [
        {title: "3", correct: false},
        {title: "2", correct: true},
        {title: "10", correct: false}
      ]
    },
    {
      title: "40 x 3 = ?",
      duration: 5,
      alternatives: [
        {title: "120", correct: true},
        {title: "20", correct: false},
        {title: "43", correct: false}
      ]
    }
  ]
```
Usage
=====
- Modify the file sample-questions.js with your own data
- npm install
- gulp
