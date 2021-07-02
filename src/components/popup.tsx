import React, {useState} from 'react';
import './popup.css';

interface IProps2 {
  value: boolean;
  onChange: () => void;
  scheme: string;
  id:string;
  type: number;
}

const Checkbox:React.FC<IProps2> = ({ value, onChange, scheme , id , type}) => {
  return (
      <label className='popup_label_checkbox'>
        <input type="checkbox" checked={value} onChange={onChange} className='popup_checkbox' id={`checkbox-element-1${id}type${type}`}/>
        <label htmlFor={`checkbox-element-1${id}type${type}`}>
            <span className="indicator" style={scheme==='whiteScheme' ? {border:'1px solid rgba(18, 18, 18, 1)', background: 'rgba(255, 255, 255, 1)'} : {border:'rgba(181, 181, 181, 1)', background: 'rgba(18, 18, 18, 1)'}}></span>
            <span className="indicator2" style={scheme==='whiteScheme' ? {border:'1px solid rgba(18, 18, 18, 1)'} : {border:'1px solid rgba(181, 181, 181, 1)'}}></span>
        </label>
      </label>
  );
};

interface IProps {
  lang: string;
  scheme: string;
  type: number;
  createYourOwnTape?: boolean;
  setScheme: (el:string) => void;
  setLang: (el:string) => void;
  openNews?: {
    title: {
     [index: string]: string;
    };
    text:{
      [index: string]: string;
    };
    image: string;
    newsSource: {
      [index: string]: string;
    };
  }[];
  title?:{[index: string]: string};
}

const Popup:React.FC<IProps> = ({ lang, scheme, type, createYourOwnTape=false , setScheme, setLang , title={
  укр: 'Титульник массива обьектов openNews',
  ukr: 'UKR Титульник массива обьектов openNews',
} , openNews=[{
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
}]}) => {
  const [checked1, setChecked1] = useState<boolean>(true);
  const [checked2, setChecked2] = useState<boolean>(true);
  const [checked3, setChecked3] = useState<boolean>(true);
  const [checked4, setChecked4] = useState<boolean>(true);
  const [checked5, setChecked5] = useState<boolean>(true);
  const [checked6, setChecked6] = useState<boolean>(true);
  const [checked7, setChecked7] = useState<boolean>(true);
  const [checked11, setChecked11] = useState<boolean>(true);
  const [checked22, setChecked22] = useState<boolean>(true);
  const [checked33, setChecked33] = useState<boolean>(true);
  const [checked44, setChecked44] = useState<boolean>(true);
  const [checked55, setChecked55] = useState<boolean>(true);
  const [checked66, setChecked66] = useState<boolean>(true);
  const [checked77, setChecked77] = useState<boolean>(true);

  const handleChange1 = () => {
    setChecked1(!checked1);
  };
  const handleChange2 = () => {
    setChecked2(!checked2);
  };
  const handleChange3 = () => {
    setChecked3(!checked3);
  };
  const handleChange4 = () => {
    setChecked4(!checked4);
  };
  const handleChange5 = () => {
    setChecked5(!checked5);
  };
  const handleChange6 = () => {
    setChecked6(!checked6);
  };
  const handleChange7 = () => {
    setChecked7(!checked7);
  };
  const handleChange11 = () => {
    setChecked11(!checked11);
  };
  const handleChange22 = () => {
    setChecked22(!checked22);
  };
  const handleChange33 = () => {
    setChecked33(!checked33);
  };
  const handleChange44 = () => {
    setChecked44(!checked44);
  };
  const handleChange55 = () => {
    setChecked55(!checked55);
  };
  const handleChange66 = () => {
    setChecked66(!checked66);
  };
  const handleChange77 = () => {
    setChecked77(!checked77);
  };

  function hidden(e:any) {
    const popup:any = document.querySelector('.popup__fon1')
    const container:any = document.querySelector('.popup_wrapper1')
    if (!e.target.closest('#id_popup_container')) {
      popup.style.opacity = '0'
      popup.style.visibility = 'hidden'
      container.style.opacity = '0'
      container.style.transform = 'perspective(600px) translate(0px, -100%) rotateX(45deg)'
    }
  }
  function stvoryStranichku(e:any) {
    const popup:any = document.querySelector('.popup__fon1')
    const container:any = document.querySelector('.popup_wrapper1')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(0px, -100%) rotateX(45deg)'
    const popup2:any = document.querySelector('.popup__fon2')
    const container2:any = document.querySelector('.popup_wrapper2')
    popup2.style.opacity = '1'
    popup2.style.visibility = 'visible'
    container2.style.opacity = '1'
    container2.style.transform = 'perspective(600px) translate(0px, 0%) rotateX(0deg)'
  }
  function hidden2(e:any) {
    const popup:any = document.querySelector('.popup__fon2')
    const container:any = document.querySelector('.popup_wrapper2')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(0px, -100%) rotateX(45deg)'
  }
  function nextChoice(e:any) {
    const popup:any = document.querySelector('.popup__fon2')
    const container:any = document.querySelector('.popup_wrapper2')
    const popup3:any = document.querySelector('.popup__fon3')
    const container3:any = document.querySelector('.popup_wrapper3')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(0px, -100%) rotateX(45deg)'
    popup3.style.opacity = '1'
    popup3.style.visibility = 'visible'
    container3.style.opacity = '1'
    container3.style.transform = 'perspective(600px) translate(0px, 0%) rotateX(0deg)'
  }
  function hidden3(e:any) {
    const popup:any = document.querySelector('.popup__fon3')
    const container:any = document.querySelector('.popup_wrapper3')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(100%, 0px) rotateY(45deg)'
  }
  function final(e:any) {
    const popup:any = document.querySelector('.popup__fon3')
    const container:any = document.querySelector('.popup_wrapper3')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(100%, 0px) rotateY(45deg)'
    const popup4:any = document.querySelector('.popup__fon4')
    const container4:any = document.querySelector('.popup_wrapper4')
    popup4.style.opacity = '1'
    popup4.style.visibility = 'visible'
    container4.style.opacity = '1'
    container4.style.transform = 'perspective(600px) translate(0%, 0px) rotateY(0deg)'
  }
  function backChoice(e:any) {
    const popup2:any = document.querySelector('.popup__fon2')
    const container2:any = document.querySelector('.popup_wrapper2')
    const popup:any = document.querySelector('.popup__fon3')
    const container:any = document.querySelector('.popup_wrapper3')
    popup.style.opacity = '0'
    popup.style.visibility = 'hidden'
    container.style.opacity = '0'
    container.style.transform = 'perspective(600px) translate(100%, 0px) rotateY(45deg)'
    popup2.style.opacity = '1'
    popup2.style.visibility = 'visible'
    container2.style.opacity = '1'
    container2.style.transform = 'perspective(600px) translate(0px, 0%) rotateX(0deg)'
  }

  function hidden4(e:any) {
    const popup:any = document.querySelector('.popup__fon4')
    const container:any = document.querySelector('.popup_wrapper4')
    if (!e.target.closest('#id_popup_container4')) {
      popup.style.opacity = '0'
      popup.style.visibility = 'hidden'
      container.style.opacity = '0'
      container.style.transform = 'perspective(600px) translate(-100%, 0px) rotateY(-45deg)'
    }
  }

  function hidden5(e:any) {
    const popup:any = document.querySelector('.popup__fon5')
    const container:any = document.querySelector('.popup_wrapper5')
    if (!e.target.closest('#id_popup_container4')) {
      popup.style.opacity = '0'
      popup.style.visibility = 'hidden'
      container.style.opacity = '0'
      container.style.transform = 'perspective(600px) translate(0px, 100%) rotateX(-45deg)'
    }
  }

  if ( type === 1 ) {
    return (
      <div className='popup__fon1' onClick={(e)=>{
          hidden(e)
      }}>
        <div className='popup_wrapper1'>
          <div id='id_popup_container' className='popup_container1' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>
            {createYourOwnTape===false && <>
              <div className='popup__title_click' onClick={(e)=>{stvoryStranichku(e)}}>
                <div className='popup__title'>Створити Власну Стрічку</div>
                <div className='popup__title__item'>
                  <div className='popup__title__item1' style={scheme==='whiteScheme' ? {border: '1px solid rgba(18, 18, 18, 1)'} : {border: '1px solid rgba(255, 255, 255, 1)'}}></div>
                  <div className='popup__title__item2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>🖍</div>
                </div>
              </div>
            </>}
            {createYourOwnTape===true && <>
              <div className='popup__title_click' onClick={(e)=>{stvoryStranichku(e)}}>
                <div className='popup__title_true'>Стрічка створена</div>
                <div className='popup__title__item'>
                  <img src={scheme==='whiteScheme' ? './popup_items/ok_black1.webp' : './popup_items/ok_white1.webp'} alt="ok" className='popup__title_item3'/>
                  <div className='popup__title__item4' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>ред.</div>
                </div>
              </div>
            </>}
            <div className='popup__switch_color'>
              <div className='popup__switch_color_container'>
                <img src={scheme==='whiteScheme' ? './popup_items/sun_light.webp' : './popup_items/sun_dark.webp'} alt="sun" className='popup__switch_color_img'/>
                <div id="barrel" className='popup__switch_color_barrel' style={scheme==='whiteScheme' ? {background: 'rgba(120, 120, 128, 0.32)'} : {background: 'rgba(255, 255, 255, 0.32)'}} onClick={()=>{
                  scheme==='whiteScheme' ? setScheme('blackScheme') : setScheme('whiteScheme')
                }}>
                  <div className='popup__switch_color_scroll' style={scheme==='whiteScheme' ? {margin: '2px'} : {margin: '2px 2px 2px 22px'}}></div>
                </div>
                <img src={scheme==='whiteScheme' ? './popup_items/moon_light.webp' : './popup_items/moon_dark.webp'} alt="moon" className='popup__switch_color_img'/>
              </div>
            </div>
            <div className='popup__switch_lang'>
              <div className='popup__switch_color_container'>
                <div className='popup__switch_lang_name'>укр</div>
                <div id="barrel" className='popup__switch_color_barrel' style={scheme==='whiteScheme' ? {background: 'rgba(120, 120, 128, 0.32)'} : {background: 'rgba(255, 255, 255, 0.32)'}} onClick={()=>{
                  lang==='укр' ? setLang('ukr') : setLang('укр')
                }}>
                  <div className='popup__switch_lang_scroll' style={lang==='укр' ? {margin: '2px'} : {margin: '2px 2px 2px 22px'}}></div>
                </div>
                <div className='popup__switch_lang_name'>ukr</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if ( type === 2 ) {
    return (
      <div className='popup__fon2' onClick={(e)=>{
          // hidden(e)
      }}>
        <div className='popup_wrapper2'>
          <div className='popup_container2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>
            {lang==='укр' && <>
              <div className='popup_title2'>Виберіть Категорії</div>
            </>}
            {lang!=='укр' && <>
              <div className='popup_title2'>URK Виберіть Категорії</div>
            </>}
            <div className='popup_close' onClick={(e)=>{
                hidden2(e)
            }}>
              <div className='popup_close_item1' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
              <div className='popup_close_item2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
            </div>
            <div className='popup_flex_container'>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Головне</div>
                <Checkbox
                  value={checked1}
                  onChange={handleChange1}
                  scheme={scheme}
                  id={'1'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Війна</div>
                <Checkbox
                  value={checked2}
                  onChange={handleChange2}
                  scheme={scheme}
                  id={'2'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Бізнес</div>
                <Checkbox
                  value={checked3}
                  onChange={handleChange3}
                  scheme={scheme}
                  id={'3'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Політика України</div>
                <Checkbox
                  value={checked4}
                  onChange={handleChange4}
                  scheme={scheme}
                  id={'4'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Світ</div>
                <Checkbox
                  value={checked5}
                  onChange={handleChange5}
                  scheme={scheme}
                  id={'5'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Економіка</div>
                <Checkbox
                  value={checked6}
                  onChange={handleChange6}
                  scheme={scheme}
                  id={'6'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Спорт</div>
                <Checkbox
                  value={checked7}
                  onChange={handleChange7}
                  scheme={scheme}
                  id={'7'}
                  type={type}
                />
              </div>

            </div>

            <div className='wrapper_next_button'>
              <div className='next_button' onClick={(e)=>{
                  nextChoice(e)
              }} style={scheme==='whiteScheme' ? {color:'rgba(255, 255, 255, 1)'} : {color:'rgba(255, 255, 255, 1)'}}>Далі</div>
            </div>

          </div>
        </div>
      </div>
    )
  }


  if ( type === 3 ) {
    return (
      <div className='popup__fon3' onClick={(e)=>{
          // hidden(e)
      }}>
        <div className='popup_wrapper3'>
          <div className='popup_container2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>
            {lang==='укр' && <>
              <div className='popup_title2'>Виберіть ЗМІ</div>
            </>}
            {lang!=='укр' && <>
              <div className='popup_title2'>URK Виберіть ЗМІ</div>
            </>}
            <div className='popup_close' onClick={(e)=>{
                hidden3(e)
            }}>
              <div className='popup_close_item1' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
              <div className='popup_close_item2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
            </div>
            <div className='popup_flex_container3'>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>5 Канал</div>
                <Checkbox
                  value={checked11}
                  onChange={handleChange11}
                  scheme={scheme}
                  id={'1'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>ТСН</div>
                <Checkbox
                  value={checked22}
                  onChange={handleChange22}
                  scheme={scheme}
                  id={'2'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Еспресо</div>
                <Checkbox
                  value={checked33}
                  onChange={handleChange33}
                  scheme={scheme}
                  id={'3'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Українська Правда</div>
                <Checkbox
                  value={checked44}
                  onChange={handleChange44}
                  scheme={scheme}
                  id={'4'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>UBR</div>
                <Checkbox
                  value={checked55}
                  onChange={handleChange55}
                  scheme={scheme}
                  id={'5'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>Громадське</div>
                <Checkbox
                  value={checked66}
                  onChange={handleChange66}
                  scheme={scheme}
                  id={'6'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>24 Канал</div>
                <Checkbox
                  value={checked77}
                  onChange={handleChange77}
                  scheme={scheme}
                  id={'7'}
                  type={type}
                />
              </div>

              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>24 Канал</div>
                <Checkbox
                  value={checked77}
                  onChange={handleChange77}
                  scheme={scheme}
                  id={'7'}
                  type={type}
                />
              </div>
              <div className='popup_flex_item'>
                <div className='popup_flex_item_title'>24 Канал</div>
                <Checkbox
                  value={checked77}
                  onChange={handleChange77}
                  scheme={scheme}
                  id={'7'}
                  type={type}
                />
              </div>



            </div>

            <div className='wrapper_next_button'>
              <div className='return_button' onClick={(e)=>{
                  backChoice(e)
              }}>Назад</div>
              <div className='next_button' onClick={(e)=>{
                  final(e)
              }}>Завершити</div>
            </div>

          </div>
        </div>
      </div>
    )
  }

  if ( type === 4 ) {
    return (
      <div className='popup__fon4' onClick={(e)=>{
          hidden4(e)
      }}>
        <div className='popup_wrapper4'>
          <div id='id_popup_container4' className='popup_container4' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>

            <div className='popup_title4_container'>
              {lang==='укр' && <>
                <div className='popup_title4'>Власна стрічка створена!</div>
              </>}
              {lang!=='укр' && <>
                <div className='popup_title4'>URK Власна стрічка створена!</div>
              </>}
              <div className='popup_cheсk'><img src='./popup_items/galochka.webp' alt='check'/></div>
            </div>

            <div className='popup_text' style={scheme==='whiteScheme' ? {color:'#12121280'} : {color:'#FFFFFF80'}}>
              {lang==='укр' && <>
                Її можна редагувати у будь-який момент
              </>}
              {lang!=='укр' && <>
                UKR Її можна редагувати у будь-який момент
              </>}
            </div>

          </div>
        </div>
      </div>
    )
  }

  if ( type === 5 ) {
    return (
      <div className='popup__fon5' onClick={(e)=>{
          hidden4(e)
      }}>
        <div className='popup_wrapper5'>
          <div id='id_popup_container5' className='popup_container5' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(255, 255, 255, 1)'} : {backgroundColor:'rgba(18, 18, 18, 1)'}}>

          <div className='popup_close' onClick={(e)=>{
              hidden5(e)
          }}>
            <div className='popup_close_item1' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
            <div className='popup_close_item2' style={scheme==='whiteScheme' ? {backgroundColor:'rgba(18, 18, 18, 1)'} : {backgroundColor:'rgba(255, 255, 255, 1)'}}></div>
          </div>

          <div className='popup_content'>

            <div className='popup_content_news'>
              <img src={openNews[0].image} alt="imageNews" className='content_news_image'/>
              <div className='content_news_image_info' style={scheme==='whiteScheme' ? {color: 'rgba(18, 18, 18, 0.5)'} : {color: 'rgba(255, 255, 255, 0.5)'}}>Дмитро Гордон (Скриншот відео Youtube/Украина 24)</div>
              <div className='content_news_title' style={scheme==='whiteScheme' ? {color:'rgba(18, 18, 18, 1)'} : {color:'rgba(255, 255, 255, 1)'}}>{openNews[0].title[lang]}</div>
              <div className='content_news_dateTime' style={scheme==='whiteScheme' ? {color: 'rgba(18, 18, 18, 0.5)'} : {color: 'rgba(255, 255, 255, 0.5)'}}>14.01.2021, 21:37</div>
              <div className='content_news_text'>{openNews[0].text[lang]}</div>
            </div>

            <div className='popup_content_list'>
              <div className='popup_content_title' style={scheme==='whiteScheme' ? {color:'rgba(18, 18, 18, 0.5)'} : {color:'rgba(255, 255, 255, 0.35)'}}>
                {title[lang]}
              </div>

              <div className='popup_content_list_container'>
                {openNews.map((item)=>(
                  <div key={item.title[lang]} className='list_item_container'>
                    <div className='list_punkt' style={scheme==='whiteScheme' ? {background:'rgba(18, 18, 18, 0.5)'} : {background:'rgba(255, 255, 255, 0.35)'}}></div>
                    <div className='list_title_news' style={scheme==='whiteScheme' ? {color: 'rgba(18, 18, 18, 0.5)'} : {color: 'rgba(255, 255, 255, 0.35)'}}>{item.title[lang]}</div>
                  </div>
                ))}
              </div>

            </div>

          </div>

          </div>
        </div>
      </div>
    )
  }

  return (
    <div></div>
  )

}


export default Popup;
