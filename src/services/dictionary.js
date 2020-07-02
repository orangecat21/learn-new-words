const API_KEY = process.env.REACT_APP_API_KEY_TRANSLATE;

const getTranslateWord = async (text, lang = 'en-ru') => {

    try{
        const res = await fetch(`https://reactmarathon-api.netlify.app/api/translate?text=${ text }&lang=${ lang }`, {
            headers: {
                'Authorization': API_KEY,
            }
        });
        
        if (res.status === 200) {
            const body = await res.json();
        
            return body.translate;
        } else {
            throw new Error('Bad request');
        }
    } catch(err) {
        console.error(err);
    }
}

export default getTranslateWord;