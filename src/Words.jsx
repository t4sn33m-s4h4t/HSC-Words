import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCards } from 'swiper/modules';
import { Flashcard } from 'react-quizlet-flashcard';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"; 

export default function Words() {
  const { letter } = useParams();
  const [words, setWords] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New state for loading status

  useEffect(() => {
    fetch('/words.json')
      .then(response => response.json())
      .then(data => {
        const words = data.find(item => item["Letter"] === letter.toUpperCase());
        setWords(words ? words["Words"] : []);
        setIsLoading(false); // Set loading to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching words:', error);
        setIsLoading(false); // Set loading to false in case of error
      });
  }, [letter]);

  if (isLoading) {
    return <p className='mt-12 text-xl md:text-2xl lg:text-3xl text-center text-gray-700'>Loading...</p>;
  }

  return (
    words.length ? 
    (
      <div className='md:py-44 py-36 lg:py-56'>
        <Swiper
          className=''
          effect={'cards'}
          grabCursor={true}
          modules={[EffectCards]}
        >
          {
            words.map((word, index) => {
              return (
                <SwiperSlide key={index}>
                  <Flashcard
                    className="custom-w border-2 rounded-2xl m-auto border-gray-200"
                    frontHTML={
                      <div className='rounded-2xl text-wrap border-2 flex justify-center items-center h-[calc(100%-40px)] border-purple-200 m-5'>
                        <h1 className='mx-10 my-5 text-3xl md:text-4xl'>{word.word}</h1>
                      </div>
                    }
                    backHTML={
                      <div className='rounded-2xl text-wrap border-2 flex flex-col justify-center md:flex-row md:justify-around items-center h-[calc(100%-40px)] border-purple-200 m-5 p-5'>
                        <div className="text-center">
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold underline mb-5">Synonyms</h2>
                          <ul className="text-lg md:text-xl lg:text-2xl">
                            {word.synonyms.map((synonym, index) => (
                              <li key={index}>{synonym}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="text-center mt-5 md:mt-0">
                          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold underline mb-5">Antonyms</h2>
                          <ul className="text-lg md:text-xl lg:text-2xl">
                            {word.antonyms.map((antonym, index) => (
                              <li key={index}>{antonym}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    }
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </div>
    )
    :
    <p className='mt-12 text-xl md:text-2xl lg:text-3xl text-center text-gray-700'>No Words Found For letter: {letter.toUpperCase()}</p>
  );
}