import React from 'react';
import './news.css';

interface IProps {
  lang: string;
  scheme: string;
  textFontSize?: string;
  titleFontSize?: string;
  contentPadding?: string;
  content: {
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
  };
  type: number;
}

const News:React.FC<IProps> = ({ lang , scheme, content , type, textFontSize, titleFontSize, contentPadding}) => {
  if (type===1) {
    return (
      <div className="wrapper" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container" style={{padding: contentPadding || '37px 18px 45px 18px'}}>
          <div className="title" style={{fontSize: titleFontSize || '28px'}}>{content.title[lang]}</div>
          <div className="content" style={scheme==='whiteScheme' ? {color: '#2B2B2BCC', fontSize: textFontSize || '23px'} : {color: '#FFFFFFCC', fontSize: textFontSize || '23px'}}>{content.text[lang]}</div>
          <div className="newsSource" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  if (type===2) {
    return (
      <div className="wrapper2" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container2">
          <img className="img2" src={content.image} alt={content.text[lang]}/>
          <div className="title2" style={{fontSize: titleFontSize || '28px'}}>{content.title[lang]}</div>
          <div className="content2" style={scheme==='whiteScheme' ? {color: '#2B2B2BCC', fontSize: textFontSize || '23px'} : {color: '#FFFFFFCC', fontSize: textFontSize || '23px'}}>{content.text[lang]}</div>
          <div className="newsSource2" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  if (type===3) {
    return (
      <div className="wrapper3" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container3">
          <img className="img3" src={content.image} alt={content.text[lang]}/>
          <div className="title3" style={{fontSize: titleFontSize || '31px'}}>{content.title[lang]}</div>
          <div className="newsSource3" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  if (type===4) {
    return (
      <div className="wrapper4" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container4">
          <div className="title4" style={{fontSize: titleFontSize || '44px'}}>{content.title[lang]}</div>
          <div className="newsSource4" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  if (type===5) {
    return (
      <div className="wrapper5" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container5">
          <div className="title5" style={{fontSize: titleFontSize || '37px'}}>{content.title[lang]}</div>
          <div className="newsSource5" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  if (type===6) {
    return (
      <div className="wrapper6" style={scheme==='whiteScheme' ? {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.12)'} : {boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.25'}}>
        <div className="container6">
          <img className="img6" src={content.image} alt={content.text[lang]}/>
          <div className="title6" style={{fontSize: titleFontSize || '44px'}}>{content.title[lang]}</div>
          <div className="content6" style={scheme==='whiteScheme' ? {color: '#2B2B2BCC', fontSize: textFontSize || '23px'} : {color: '#FFFFFFCC', fontSize: textFontSize || '23px'}}>{content.text[lang]}</div>
          <div className="newsSource6" style={scheme==='whiteScheme' ? {color: '#2B2B2B59'} : {color: '#FFFFFF59'}}>{content.newsSource[lang]}</div>
        </div>
      </div>
    )
  }

  return (
    <div>{lang} {content.title[lang]}
      <div>{content.title[lang]}</div>
      <div>{content.text[lang]}</div>
      <div>{content.newsSource[lang]}</div>
    </div>
  );
};
export default News;
