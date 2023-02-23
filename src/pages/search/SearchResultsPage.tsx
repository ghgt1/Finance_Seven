import { useState, useEffect, useMemo } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SearchBox from './SearchComponents/SearchBox';
import CategoryTab from './SearchResultsComponents/CategoryTab';
import ResultsTotal from './SearchResultsComponents/ResultsTotal';
import ResultsCard from './SearchResultsComponents/ResultsCard';
import ResultsLoan from './SearchResultsComponents/ResultsLoan';
import ResultsSavings from './SearchResultsComponents/ResultsSavings';
import ResultsSubscription from './SearchResultsComponents/ResultsSubscription';

const SearchResults = () => {
  // 자동 로그아웃
  const navigate = useNavigate();

  useEffect(() => {
    if (!document.cookie) {
      navigate('/intro');
    }
  });

  // 탭 변경
  const [tabIndex, setTabIndex] = useState(0);
  const [category, setCategory] = useState([
    { category: 'total', title: '통합', content: <ResultsTotal setTabIndex={setTabIndex} /> },
    { category: 'card', title: '카드', content: <ResultsCard /> },
    { category: 'loan', title: '대출', content: <ResultsLoan /> },
    { category: 'savings', title: '예적금', content: <ResultsSavings /> },
    { category: 'subscription', title: '청약', content: <ResultsSubscription /> },
  ]);

  return (
    <Container>
      <SearchBox />
      <CategoryTab tabIndex={tabIndex} setTabIndex={setTabIndex} categoryArr={category} isOnAllPage={false} />
      {category
        .filter((list, index) => index === tabIndex)
        .map((list) => (
          <CategoryDesc key={list.title}>{list.content}</CategoryDesc>
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  max-width: 768px;
  box-sizing: border-box;
  margin: 0 auto;
  margin-top: 106px;
`;

const CategoryDesc = styled.div``;

export default SearchResults;
