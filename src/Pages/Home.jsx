import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import CryptoJS from "crypto-js";
import SkeletonCard from '../Components/SkeletonCard';

function Home() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [temp, setTemp] = useState("")

  const publicKey =  import.meta.env.VITE_MARVEL_PUBLICKEY;
  const privateKey = import.meta.env.VITE_MARVEL_PRIVATEKEY;
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
  const apiUrl = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${name || 'A'}&ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=30`;

  useEffect(() => {
    const fetchHeroes = async () => {
      try {
        setLoading(true);
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setHeroes(data.data.results);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data: ", err.message);
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchHeroes();
  }, [name]);


  const NameChange = () => {
    setName(temp)
  }


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setName(temp)
    }
  };

  return (
    <div className='bg-[#e3dede] min-h-[100dvh] w-full h-full m-0 p-0'>
      <div className='z-10 relative flex flex-col items-center'>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjmHn7hDycWvYvGnj50dxygz2EUz8MBKKCqg&s"
          className='w-44 animate-MainText opacity-0 pt-44 pb-4'
          alt="Marvel Comics"
        />
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center opacity-0 animate-MainText py-10">
        Characters Explorer
        </h1>

        <div className='relative opacity-0 animate-MainText'>
          <input
            type="text"
            id="searchBox"
            onChange={(e) => setTemp(e.target.value)}
            onKeyDown={handleKeyPress} 
            className='w-[350px] h-11 rounded-full mb-36 text-xl text-center bg-[#ffffff72] text-white border border-gray-300 py-1 focus:outline-none placeholder:text-[#ffffffb9]'
            placeholder="Search character by name"
          />
          <button onClick={NameChange} className='absolute top-1 right-1 bg-[#252525] p-2 rounded-full'>
            <svg width="20" height="20" viewBox="0 0 39 44" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.02 3.91886L21.02 42.1007C21.02 42.607 20.862 43.0926 20.5807 43.4506C20.2994 43.8086 19.9178 44.0098 19.52 44.0098C19.1222 44.0098 18.7407 43.8086 18.4594 43.4506C18.1781 43.0926 18.02 42.607 18.02 42.1007L18.02 3.91886C18.02 3.41253 18.1781 2.92695 18.4594 2.56893C18.7407 2.2109 19.1222 2.00977 19.52 2.00977C19.9178 2.00977 20.2994 2.2109 20.5807 2.56893C20.862 2.92695 21.02 3.41253 21.02 3.91886Z" fill="white" />
              <path d="M19.7698 4.61263L4.01696 20.4422C3.66024 20.8006 3.17642 21.002 2.67193 21.002C2.16745 21.002 1.68363 20.8006 1.3269 20.4422C0.97018 20.0839 0.769775 19.5978 0.769775 19.091C0.769775 18.5842 0.97018 18.0981 1.3269 17.7397L18.4247 0.562665C18.6012 0.384927 18.8109 0.243912 19.0417 0.147696C19.2725 0.0514798 19.5199 0.00195313 19.7698 0.00195313C20.0197 0.00195313 20.2671 0.0514798 20.4979 0.147696C20.7287 0.243912 20.9383 0.384927 21.1148 0.562665L38.2126 17.7397C38.5694 18.0981 38.7698 18.5842 38.7698 19.091C38.7698 19.5978 38.5694 20.0839 38.2126 20.4422C37.8559 20.8006 37.3721 21.002 36.8676 21.002C36.3631 21.002 35.8793 20.8006 35.5226 20.4422L19.7698 4.61263Z" fill="white" />
            </svg>

          </button>
        </div>

        {error && <p className="text-red-500 text-xl mb-4">{error}</p>}

        <div className='flex justify-center py-10 gap-8 md:gap-16 max-w-screen-xl flex-wrap animate-MainText main_section opacity-0'>
          {loading ? (
            <>
              <SkeletonCard /><SkeletonCard /><SkeletonCard />
              <SkeletonCard /><SkeletonCard /><SkeletonCard />
            </>
          ) : (
            heroes.map((hero) => (
              <Card
                key={hero.id}
                img={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
                title={hero.name}
                description={hero.description}
                id={hero.id}
              />
            ))
          )}
        </div>
      </div>

      <div className='bg-gradient-to-br from-red-900 to-red-600 h-[0vh] animate-FullScreen w-full absolute bottom-0 z-0'>
      </div>

    </div>
  );
}

export default Home;
