/**

 * This is where you will create routes for our

 * questions API

 * Base url: /api/questions

 * We have imported express and router and

 * exported the router.

 *

 * Your task is to fill in the router with appropriate

 * routes and implement the functionality of getting

 * data from mongodb and return appropriate results

 */

const express = require("express");

const router = express.Router();

const Questions = require("../../models/questions-data.json");

// Hint: get a bonus task here

const shuffleArray = require("../../utils/shuffle");

function removeKey() {
  const result = Questions.map(({ answer, ...obj }) => obj);
  return result;
}

router.get("/", (req, res) => {
  res.json(removeKey());
});

/**

 * Route details

 * api GET /api/questions/count

 * Description: This will get the count of the questions

 * from the database and return it

 * Structure of the return JSON:

 * {

 *  count: 4

 * }

 */

function countNum() {
  var length = 0;
  for (var key in removeKey()) {
    if (Questions.hasOwnProperty(key)) {
      ++length;
    }
  }
  return length;
}

router.get("/count", (req, res) => {
  // removeKey is the function that is being called for the copy of the Questions data
  //this returns 4 but is not currently showin on the client side

  res.json({
    count: countNum(),
  });
});

/**

 * Route details

 * api GET /api/questions/:qId

 * Description: This will get one question given the question ID

 * Structure of the return JSON:

 * {

 *    question: 'sample question',

 *    options: [

 *      'option1',

 *      'option2'

 *    ],

 *    id: '1234'

 * }

 */
function findID(id) {
  return id === req.params.qId;
}

router.get("/:qId", (req, res) => {
  let index = removeKey().findIndex((element) => element.id === req.params.qId);
  console.log(index);
  console.log(removeKey()[index]);

  res.json({
    question: removeKey()[index].question,
    options: removeKey()[index].options,
    id: removeKey()[index].id,
  });
});

/**

 * Route details

 * api POST /api/questions/result

 * Description: This will receive a body with user

 * entered answers and will return the results.

 * Calculation of the result will happen here and you

 * would only send the results.

 *

 * Structure of body JSON:

 * {

 *    'questionID': 'user-answer',

 *    'questionID': 'user-answer'

 * }

 *

 * Structure of the return JSON:

 * {

 *    summary: 'passed OR failed',

 *    score: (how many answers were correct),

 *    total: (how many questions were there)

 * }

 */

router.post("/result", (req, res) => {
  // res.send(req.body);
  res.json({
    summary: "passed OR failed",

    score: "how many answers were correct",

    total: countNum();
  });
});

module.exports = router;
