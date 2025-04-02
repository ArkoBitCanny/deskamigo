
// Imports the Google Cloud client library
const {Translate} = require('@google-cloud/translate').v2;

// Get The Project Id
const projectId=process.env.PROJECT_ID;

// Instantiates a client
const translate = new Translate({projectId:470216860058});


   module.exports=(req,res)=>{
        const {name}=req.body;
        console.log(name);
        quickStart();
       return res.status(200).json({success:true,name:name});
    }

    async function quickStart() {
        // The text to translate
        const text = 'Hello, world!';
      
        // The target language
        const target = 'ru';
      
        // Translates some text into Russian
        const [translation] = await translate.translate(text, target);
        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
      }




    