import React from 'react';

interface IProps {
  lang: string;
  content: {
    title: {
     [index: string]: string;
    };
    shortContent:{
      [index: string]: string;
    };
    fullContent:{
      [index: string]: string;
    };
    image: string;
    newsSource: {
      [index: string]: string;
    };
  };
  type: number;
}

const News:React.FC<IProps> = ({ lang , content , type}) => {

  return (
    <div>{lang} {content.title[lang]}
      <div>{content.title[lang]}</div>
      <div>{content.shortContent[lang]}</div>
      <div>{content.fullContent[lang]}</div>
      <div>{content.newsSource[lang]}</div>
    </div>
  );
};
export default News;
