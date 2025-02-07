# HSC Words

## Description
<img src="https://github.com/t4sn33m-s4h4t/HSC-Words/blob/main/ss.png" />
**HSC Words** is a web application designed to help Bangladeshi HSC students learn vocabulary from NCTB books. The application provides letterwise vocabulary along with synonyms and antonyms, making exam preparation easier and more effective.

## Table of Contents

- [Features](#features)
- [Routes](#routes)
- [Usage](#usage)
- [JSON Data Route](#json-data-route)
- [Technologies Used](#technologies-used)
- [Live Demo](#live-demo)

## Features

- 📖 **Letterwise learning** of vocabulary  
- 🔄 **Synonyms and antonyms** for each word  
- 🎨 **User-friendly interface**  
- 📱 **Responsive design**  

## Routes

The application includes the following routes:

- `/` - **Home Page**: Displays letter cards for easy navigation  
- `/about` - **About Page**: Explains the purpose and usage of the application  
- `/words/:letter` - **Words Page**: Displays words along with their synonyms and antonyms for the selected letter  

## Usage

- On the **Home Page (`/`)**, select a letter to view words starting with that letter.  
- On the **Words Page (`/words/:letter`)**, you will see a list of words along with their synonyms and antonyms.  
- The **About Page (`/about`)** provides details about the application's purpose.

## JSON Data Route

The vocabulary data is stored in a `words.json` file. Each entry follows this structure:

```json
{
  "A": [
    {
      "word": "Abandon",
      "synonyms": ["Desert", "Leave", "Forsake"],
      "antonyms": ["Retain", "Keep", "Hold"]
    },
    {
      "word": "Accomplish",
      "synonyms": ["Achieve", "Fulfill", "Complete"],
      "antonyms": ["Fail", "Neglect", "Lose"]
    }
  ]
}
```
Each letter has an array of words with their respective synonyms and antonyms.

## Technologies Used

### Frontend:
- **React**
- **React Router**
- **Tailwind CSS**
- **Swiper**
- **React Quizlet Flashcard**

### Build Tools:
- **Vite**

### Linting:
- **ESLint**
- **eslint-plugin-react**
- **eslint-plugin-react-hooks**
- **eslint-plugin-react-refresh**

## Live Demo

🚀 [Live Demo](https://hsc-word.surge.sh)
