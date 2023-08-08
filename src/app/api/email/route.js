import emailjs from '@emailjs/browser';

export async function GET(req) {
    const body = await req.json();
    return new Response("Response received!");
}

export async function POST(req) {
    console.log("API handler RUNNING!  ENV:", process.env.EMAIL_SERVICE_KEY);
    const serviceKey = process.env.EMAIL_SERVICE_KEY;
    const body = await req.json();
    let responseText = "empty response";
    console.log("BODY CONTENTS:!!!!!!:!!!:", body);
    emailjs.sendForm(serviceKey, 'template_fbnqjwj', body, '-8Zb6WZ78zgtK80L3')
    .then((result) => {
        console.log(result.text);
        responseText = result.text;
    }, (error) => {
        console.log(error.text);
        responseText = error.text;
    });


    return new Response(JSON.stringify({text: responseText}));
}