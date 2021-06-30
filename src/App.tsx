import React, {useState, useEffect} from 'react';
import './App.css';
import News from './components/news'

const styles = {
  whiteScheme :{
    backgroundColor: 'white',
    color: 'rgba(18, 18, 18, 1)',
  },
  blackScheme: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
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
      укр:'Зять Медведчука очолив велику компанію в Росії - Інтерфакс',
      ukr:'UKR Зять Медведчука очолив велику компанію в Росії - Інтерфакс'
    },
    text:{
      укр:'Андрій Рюмін - зять глави політради партії Опозиційна платформа - За життя Віктора Медведчука зять глави політради партії Опозиційна платформа - За життя Віктора Медведчука...',
      ukr:'UKR Андрій Рюмін - зять глави політради партії Опозиційна платформа - За життя Віктора Медведчука зять глави політради партії Опозиційна платформа - За життя Віктора Медведчука...'
     },
    image: 'https://klike.net/uploads/posts/2019-05/1556708032_1.jpg',
    newsSource: {
      укр:'Новина вiд: Униан',
      ukr:'UKR Новина вiд: Униан'
    }
  },
  {
    title: {
      укр:'Малюська: Судами Крим ми не повернемо, але Росія повинна понести максимального збитку максимального збитку максимального збитку',
      ukr:'UKR Малюська: Судами Крим ми не повернемо, але Росія повинна понести максимального збитку максимального збитку максимального збитку'
    },
    text:{
      укр:'Україна не має особливих надій на виконання Росією будь-яких судових рішень. Зокрема - і майбутнього Україна не має особливих надій на виконання Росією будь-яких судових рішень. Зокрем ',
      ukr:'UKR Україна не має особливих надій на виконання Росією будь-яких судових рішень. Зокрема - і майбутнього Україна не має особливих надій на виконання Росією будь-яких судових рішень. Зокрем ',
     },
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ffullhdoboi.ru%2Fwp-content%2Fuploads%2F_ph%2F6%2F286000904.jpg&f=1&nofb=1',
    newsSource: {
      укр:'Новина вiд: Факти ICTV',
      ukr:'UKR Новина вiд: Факти ICTV'
    }
  },
  {
    title: {
      укр:"Гордон заявив, що Зеленський заздалегідь знав про записи інтерв'ю Гордон заявив, що Зеленський заздалегідь знав",
      ukr:"UKR Гордон заявив, що Зеленський заздалегідь знав про записи інтерв'ю Гордон заявив, що Зеленський заздалегідь знав"
    },
    text:{
      укр:'Президент Владимир Зеленский заранее знал о том, что журналист Дмитрий Гордон планирует Президент Владимир Зеленский заранее знал о том, что журналист Дмитрий Гордон ',
      ukr:'UKR Президент Владимир Зеленский заранее знал о том, что журналист Дмитрий Гордон планирует Президент Владимир Зеленский заранее знал о том, что журналист Дмитрий Гордон ',
     },
    image: 'https://omoro.ru/wp-content/uploads/2018/05/obnimashki-kartinki-prikolnie-1.jpg',
    newsSource: {
      укр:'Новина вiд: 24 Канал',
      ukr:'UKR Новина вiд: 24 Канал'
    }
  },
  {
    title: {
      укр:'Нацрада перевірить NewsOne через заяви про необхідність захищати Нацрада перевірить NewsOne через заяви про',
      ukr:'UKR Нацрада перевірить NewsOne через заяви про необхідність захищати Нацрада перевірить NewsOne через заяви про'
    },
    text:{
      укр:'Национальный совет по вопросам телевидения и радиовещания назначил Национальный совет по вопросам телевидения и радиовещания',
      ukr:'UKR Национальный совет по вопросам телевидения и радиовещания назначил Национальный совет по вопросам телевидения и радиовещания',
     },
    image: 'https://static6.depositphotos.com/1029473/605/i/600/depositphotos_6058054-stock-photo-abstract-3d-image.jpg',
    newsSource: {
      укр:'Новина вiд: Радіо Свобода',
      ukr:'UKR Новина вiд: Радіо Свобода'
    }
  },
  {
    title: {
      укр:'5 Новостной заголовок',
      ukr:'5 UKR Новостной заголовок'
    },
    text:{
      укр:'Коротко о 5 новости',
      ukr:'UKR Коротко о 5 новости',
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
          {category[1]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav1`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][1]}</div></div>}
          {category[2]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav2`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][2]}</div></div>}
          {category[3]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav3`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][3]}</div></div>}
          {category[4]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav4`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][4]}</div></div>}
          {category[5]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav5`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][5]}</div></div>}
          {category[6]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav6`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][6]}</div></div>}
          {category[7]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav7`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][7]}</div></div>}
        </div>
      </div>
      <div className="head_cushion"></div>

      {category[1]===true && <>
        <div className="block__1" id="nav1">
          <div className="block__1__title">{firstBlockTitle[lang].title}</div>
          <div className="block__1__button">{firstBlockTitle[lang].button}</div>
          <hr className="block__1__hr" style={scheme==='whiteScheme' ? styles.whiteScheme : styles.blackScheme}/>
        </div>
      </>}

      {category[2]===true && <>
        <div className="block__2" id="nav2">
          <div className="block__2__title">{nav[lang][2]}</div>
          <div className="block__2__greed1">
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={1} />
          </div>
          <div className="block__2__greed2">
            <div style={{gridArea: 'first'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[0]} type={3} />
            </div>
            <div style={{ gridArea: 'second'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[1]} type={4} />
            </div>
            <div style={{gridArea: 'third'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[2]} type={5} />
            </div>
            <div style={{gridArea: 'fourth'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[3]} type={5} />
            </div>
          </div>
        </div>
      </>}

      {category[4]===true && <>
        <div className="block__4" id="nav4">
          <div className="block__4__title">{nav[lang][4]}</div>
          <div className="block__2__greed2">
            <div style={{gridArea: 'first'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[4]} type={3} />
            </div>
            <div style={{ gridArea: 'second'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[3]} type={4} />
            </div>
            <div style={{gridArea: 'third'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[2]} type={5} />
            </div>
            <div style={{gridArea: 'fourth'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[1]} type={5} />
            </div>
          </div>
          <div className="block__4__greed1">
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={1} />
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={1} />
          </div>
        </div>
      </>}

      {category[3]===true && <>
        <div className="block__3" id="nav3">
          <div className="block__3__title">{nav[lang][3]}</div>
          <div className="block__3__greed1">
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={2} />
          </div>
        </div>
      </>}

      {category[5]===true && <>
        <div className="block__5" id="nav5">
          <div className="block__5__title">{nav[lang][5]}</div>
          <div className="block__5__greed1">
            <div style={{gridArea: 'first'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[1]} type={6} />
            </div>
            <div style={{gridArea: 'second'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[3]} type={1} textFontSize={'25px'} titleFontSize={'30px'} contentPadding={'37px 88px 113px 88px'}/>
            </div>
            <div style={{gridArea: 'third'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[2]} type={1} textFontSize={'25px'} titleFontSize={'30px'} contentPadding={'37px 88px 113px 88px'}/>
            </div>
            <div style={{gridArea: 'fourth'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[1]} type={1} textFontSize={'25px'} titleFontSize={'30px'} contentPadding={'37px 88px 113px 88px'}/>
            </div>
            <div style={{gridArea: 'fifth'}}>
              <News lang={lang} scheme={scheme} content={exampleNew[0]} type={1} textFontSize={'25px'} titleFontSize={'30px'} contentPadding={'37px 88px 113px 88px'}/>
            </div>
          </div>
        </div>
      </>}

      {category[6]===true && <>
        <div className="block__6" id="nav6">
          <div className="block__6__title">{nav[lang][6]}</div>
          <div className="block__6__greed1" style={{margin: '0 0 58px 0'}}>
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={1} contentPadding={'37px 22px 124px 22px'}/>
          </div>
          <div className="block__6__greed1">
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={1} contentPadding={'37px 22px 124px 22px'}/>
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={1} contentPadding={'37px 22px 124px 22px'}/>
          </div>
        </div>
      </>}

      {category[7]===true && <>
        <div className="block__7" id="nav7">
          <div className="block__7__title">{nav[lang][7]}</div>
          <div className="block__3__greed1">
            <News lang={lang} scheme={scheme} content={exampleNew[1]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[2]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[3]} type={2} />
            <News lang={lang} scheme={scheme} content={exampleNew[0]} type={2} />
          </div>
        </div>
      </>}

      {category[1]===true && <>
        <div className="block__1">
          <div className="block__1__title">{firstBlockTitle[lang].title}</div>
          <div className="block__1__button">{firstBlockTitle[lang].button}</div>
          <div className="block__1__containerForHr"><hr className="block__1__hr"/></div>
        </div>
      </>}

      <div>
        <div className="nav_foot">
          {category[1]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav1`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][1]}</div></div>}
          {category[2]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav2`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][2]}</div></div>}
          {category[3]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav3`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][3]}</div></div>}
          {category[4]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav4`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][4]}</div></div>}
          {category[5]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav5`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][5]}</div></div>}
          {category[6]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav6`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][6]}</div></div>}
          {category[7]===true && <div><div className="header__nav__item" onClick={(e)=>{
            const element = document.querySelector(`#nav7`);
            if (element) {
              const c = element.getBoundingClientRect();
              const y = c.top + window.pageYOffset - 190
              window.scrollTo({
                  top: y,
                  behavior: 'smooth'
              })
            }
          }}>{nav[lang][7]}</div></div>}
        </div>
        <div className="block__1__containerForHr"><hr className="block__1__hr"/></div>
      </div>

      <div className="footer">
        <div className="copyright">copyright © 2021 moonam. Outside the News</div>
        <div className="telegram">
          <a href="https://t.me/moonam_contact" style={scheme==='whiteScheme' ? styles.whiteScheme : styles.blackScheme} target="_blank" rel="noreferrer">
            Telegram<div className="contact_name">@moonam_contact</div>
          </a>
        </div>
      </div>




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


    </div>
  );
}

export default App;
