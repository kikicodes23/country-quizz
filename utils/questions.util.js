const typeOfQuestion = ["capital", "flag"];

const generateOptions = (countries, country) => {
    // create an array that will contain the options for the question
    const options = [];

    // while the length of the options array is less than 3, generate the 3 incorrect options
    while (options.length < 3) {
        // generate a random number between 0 and the length of the countries array that will be used to select a random country for the option
        const randomIndex = Math.floor(Math.random() * countries.length);
        // select the random country based on the random number
        const randomCountry = countries[randomIndex];

        // if the random country for the option is not the same as the country for the question
        if (randomCountry.name.common !== country.name.common) {
            // create an object that represents the option
            const option = {
                text: randomCountry.name.common,
                selected: false,
                correct: false,
            };

            // check if the option is already in the options array
            const found = options.find((opt) => opt.text === option.text);

            // if the option is not in the options array
            if (!found) {
                // add the option to the options array
                options.push(option);
            }
        }
    }

    // create an object that represents the correct option
    const correctOption = {
        text: country.name.common,
        selected: false,
        correct: true,
    };

    // add the correct option to the options array
    options.push(correctOption);

    // shuffle the options array
    options.sort(() => Math.random() - 0.5);

    // return the options array
    return options;
};

export const generateQuestion = (countries) => {

    const question = {};

    // random number between 0 and 1 that will be used to select the type of question
    const typeOfQuestionIndex = Math.floor(Math.random() * typeOfQuestion.length);
    // select the type of question based on the random number
    const type = typeOfQuestion[typeOfQuestionIndex];

    // random number between 0 and the length of the countries array that will be used to select a country for the question
    const countryIndex = Math.floor(Math.random() * countries.length);
    // select the country based on the random number
    const country = countries[countryIndex];

    // if the type of question is capital
    if (type === "capital") {
        // set the text of the question
        question.text = `${country.capital} is the capital of`;
        // set the completed property of the question to false (this property will be used to check if the question has been answered)
        question.completed = false;

        question.name = country.name.common;

        // shuffle the options array
        question.options = generateOptions(countries, country);

        // return an object that represents the question
        return question;
    }

    // if the type of question is flag
    if (type === "flag") {
        // set the text of the question
        question.text = `Which country does this flag belong to?`;
        // set the flag of the country for the question to show in the UI
        question.flag = country.flags.png;
        // set the completed property of the question to false (this property will be used to check if the question has been answered)
        question.completed = false;

        question.name = country.name.common;

        // shuffle the options array
        question.options = generateOptions(countries, country);

        // return an object that represents the question
        return question;
    }
};

export const generateQuestions = (countries, numberOfQuestions) => {
    // array that will contain the questions
    const questions = [];

    // while the length of the questions array is less than the number of questions
    while (questions.length < numberOfQuestions) {
        // generate a question
        const question = generateQuestion(countries);

        // check if the question is already in the questions array
        if (
            !questions.find(
                (currentQuestion) => currentQuestion.text === question.text
            )
        ) {
            questions.push(question);
        }
    }

    // return the questions array
    return questions;
};
