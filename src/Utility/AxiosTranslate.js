import axios from 'axios';

const apiKey = 'AIzaSyCVkpg8YrSM0-Fe64c_pmCK643v92dFCAY';  // Replace with your Google API key
const translateUrl = 'https://translation.googleapis.com/language/translate/v2';

export async function translatePage(targetLanguage) {
    const elements = document.querySelectorAll('*');
    const textNodes = [];

    // Collect all text nodes
    elements.forEach(element => {
        if (element.childNodes.length > 0) {
            element.childNodes.forEach(child => {
                if (child.nodeType === Node.TEXT_NODE && child.textContent.trim()) {
                    textNodes.push(child);
                }
            });
        }
    });

    // Translate each text node
    for (let textNode of textNodes) {
        const originalText = textNode.textContent.trim();
        if (originalText) {
            try {
                const response = await axios.post(translateUrl, {}, {
                    params: {
                        q: originalText,
                        target: "hi",
                        key: apiKey
                    }
                });
                const translatedText = response.data.data.translations[0].translatedText;
                textNode.textContent = translatedText;
            } catch (error) {
                console.error('Error translating text:', error);
            }
        }
    }
}
