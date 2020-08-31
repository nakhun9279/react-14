import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';


const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const NewsList = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // async를 사용하는 함수 따로 선언
    const fetchData = async () => {
      setLoading(true);
      try {
        const query = category === 'all' ? '': `&category=${category}`;
        const response = await axios.get('http://newsapi.org/v2/top-headlines?country=kr&apiKey=03285884c7d44ffb90c5522eb1fe467b',);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);
  const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160',
  };
  
  
  
  const NewsList = () => {
    return (
      <NewsListBlock>
        <NewsItem article={sampleArticle} />
        <NewsItem article={sampleArticle} />
        <NewsItem article={sampleArticle} />
        <NewsItem article={sampleArticle} />
        <NewsItem article={sampleArticle} />
        <NewsItem article={sampleArticle} />
      </NewsListBlock>
    );
  };
  
  
  
  
  export default NewsList;
