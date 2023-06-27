// const { Configuration, OpenAIApi } = require('openai') ;
// let express = require('express')
// let app = express();

// let bodyParser = require('body-parser')
// app.use('/static', express.static('static'))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended:false}))
// app.set('view engine', 'ejs');


// const config = new Configuration(
//     {
//         apiKey: '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'
//     }
// )
// const openai = new OpenAIApi(config)



// app.get('/', (req, res) => {
// res.render('index.ejs')
// });
// app.post('/get', async (req, res) => {
//     const prompt = req.body.prompt;
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt: prompt,
//       max_tokens: 2048,
//       temperature: 1,
//     });
    
//     const responseData = response.data.choices[0].text.trim();
//     console.log(responseData);
//     res.send(responseData);
//   });
  
// app.listen(8081);
const { Configuration, OpenAIApi } = require('openai');
let express = require('express');
let app = express();

let bodyParser = require('body-parser');
app.use('/static', express.static('static'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const config = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(config);

app.get('/', (req, res) => {
  res.render('index.ejs');
});

app.post('/get', async (req, res) => {
  const prompt = req.body.prompt;
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });

  const responseData = response.data.choices[0].text.trim();
  res.render('response.ejs', { answer: responseData });
});

app.listen(8081);
