import React, {useState, useEffect} from 'react';
import './App.css';
import News from './components/news'

const styles = {
  whiteScheme :{
    backgroundColor: 'white',
    color: '#121212',
  },
  blackScheme: {
    backgroundColor: '#121212',
    color: 'white',
  }
}


const nav:{[index: string]: any} = {
  укр: {
    1: 'Головне',
    2: 'Україна',
    3: 'Війна',
    4: 'Світ',
    5: 'Економіка',
    6: 'Бізнес',
    7: 'Спорт',
  },
  ukr: {
    1: 'Golovne',
    2: 'Ukraina',
    3: 'Voina',
    4: 'Svit',
    5: 'Ekonomica',
    6: 'Bisness',
    7: 'Sport',
  },
};

const firstBlockTitle:{[index: string]: any} = {
  укр: {
    title: 'Контролюй Інформацію',
    button: 'Створити власну стрічку'
  },
  ukr: {
    title: 'Controlirui informachiu',
    button: 'Stvory vlastny stranichky'
  },
}

const exampleNew = [
  {
    title: {
      укр:'1 Новостной заголовок',
      ukr:'1 UKR Новостной заголовок'
    },
    shortContent:{
      укр:'Коротко о 1 новости',
      ukr:'UKR Коротко о 1 новости',
     },
    fullContent:{
      укр:'Полное содержание 1 новости',
      ukr:'UKR Полное содержание 1 новости'
     },
    image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
    newsSource: {
      укр:'канал 3',
      ukr:'UKR канал 3'
    }
  },
  {
    title: {
      укр:'2 Новостной заголовок',
      ukr:'2 UKR Новостной заголовок'
    },
    shortContent:{
      укр:'Коротко о 2 новости',
      ukr:'UKR Коротко о 2 новости',
     },
    fullContent:{
      укр:'Полное содержание 2 новости',
      ukr:'UKR Полное содержание 2 новости'
     },
    image: 'https://funpick.ru/wp-content/uploads/2018/03/krut-kar-dlya-pats-1.jpg',
    newsSource: {
      укр:'канал 2',
      ukr:'UKR канал 2'
    }
  },
  {
    title: {
      укр:'3 Новостной заголовок',
      ukr:'3 UKR Новостной заголовок'
    },
    shortContent:{
      укр:'Коротко о 3 новости',
      ukr:'UKR Коротко о 3 новости',
     },
    fullContent:{
      укр:'Полное содержание 3 новости',
      ukr:'UKR Полное содержание 3 новости'
     },
    image: 'https://omoro.ru/wp-content/uploads/2018/05/obnimashki-kartinki-prikolnie-1.jpg',
    newsSource: {
      укр:'канал 3',
      ukr:'UKR канал 3'
    }
  },
  {
    title: {
      укр:'4 Новостной заголовок',
      ukr:'4 UKR Новостной заголовок'
    },
    shortContent:{
      укр:'Коротко о 4 новости',
      ukr:'UKR Коротко о 4 новости',
     },
    fullContent:{
      укр:'Полное содержание 4 новости',
      ukr:'UKR Полное содержание 4 новости'
     },
    image: 'https://static6.depositphotos.com/1029473/605/i/600/depositphotos_6058054-stock-photo-abstract-3d-image.jpg',
    newsSource: {
      укр:'канал 2',
      ukr:'UKR канал 2'
    }
  },
  {
    title: {
      укр:'5 Новостной заголовок',
      ukr:'5 UKR Новостной заголовок'
    },
    shortContent:{
      укр:'Коротко о 5 новости',
      ukr:'UKR Коротко о 5 новости',
     },
    fullContent:{
      укр:'Полное содержание 5 новости',
      ukr:'UKR Полное содержание 5 новости'
     },
    image: 'https://lifestyle.24tv.ua/resources/photos/news/1200x675_DIR/202104/1611954.jpg?202104150644',
    newsSource: {
      укр:'канал 1',
      ukr:'UKR канал 1'
    }
  },
]



const App: React.FC = () => {
  const [scheme, setScheme] = useState<string>('blackScheme');
  const [lang, setLang] = useState<string>('укр');
  const [category, setCategory] = useState<{[index: number]: boolean;}>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true
  });


useEffect(()=>{

},[]);



  return (
    <div className="App" style={scheme==='whiteScheme' ? styles.whiteScheme : styles.blackScheme}>
      <div className="header" style={scheme==='whiteScheme' ? {boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.04)', background: 'rgba(255, 255, 255, 0.7)'} : {boxShadow: '0px 1px 25px rgba(0, 0, 0, 0.08)', background: 'rgba(18, 18, 18, 0.7)'}}>
        <div className="header__burger">
          <div className="header__burger_plast" style={scheme==='whiteScheme' ? styles.blackScheme : styles.whiteScheme}></div>
          <div className="header__burger_plast" style={scheme==='whiteScheme' ? styles.blackScheme : styles.whiteScheme}></div>
          <div className="header__burger_plast" style={scheme==='whiteScheme' ? styles.blackScheme : styles.whiteScheme}></div>
        </div>
        <div className="header__title">moonam</div>
        <div className="header__nav">
          {category[1]===true && <div><div className="header__nav__item">{nav[lang][1]}</div></div>}
          {category[2]===true && <div><div className="header__nav__item">{nav[lang][2]}</div></div>}
          {category[3]===true && <div><div className="header__nav__item">{nav[lang][3]}</div></div>}
          {category[4]===true && <div><div className="header__nav__item">{nav[lang][4]}</div></div>}
          {category[5]===true && <div><div className="header__nav__item">{nav[lang][5]}</div></div>}
          {category[6]===true && <div><div className="header__nav__item">{nav[lang][6]}</div></div>}
          {category[7]===true && <div><div className="header__nav__item">{nav[lang][7]}</div></div>}
        </div>
      </div>
      <div className="head_cushion"></div>
      {category[1]===true && <>
        <div className="block__1">
          <div className="block__1__title">{firstBlockTitle[lang].title}</div>
          <div className="block__1__button">{firstBlockTitle[lang].button}</div>
        </div>
        </>}
      {category[2]===true && <>
        <div className="block__2">
          <div className="block__2__title">{nav[lang][2]}</div>

        </div>
        </>}
      <div onClick={(e)=>{
        setCategory(category)
      }}></div>
      <div onClick={(e)=>{
        let newLang
        lang === 'укр' ? newLang = 'ukr' : newLang = 'укр'
        setLang(newLang)
      }} style={{width:'200px', cursor:'pointer'}}>Switch lang</div>
      <div onClick={(e)=>{
        let newDesign
        scheme === 'whiteScheme' ? newDesign = 'blackScheme' : newDesign = 'whiteScheme'
        setScheme(newDesign)
      }} style={{width:'200px', cursor:'pointer', margin:'0 0 100px 0'}}>Switch design</div>
      <News lang={lang} content={exampleNew[0]} type={1}/>

    </div>
  );
}

export default App;
