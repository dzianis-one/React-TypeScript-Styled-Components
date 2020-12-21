import * as React from 'react';
/* tslint:disable-next-line */
import { useEffect } from 'react';
import { Main, MainWrapper, BodyWrapper } from '../utils/constant/styles';

import Header from '../components/Header';

const LayoutContainer = () => {
  useEffect(() => {
    console.log('Hello');
  }, []);

  // const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log('Hello Click', e)
  // };

  return <BodyWrapper>
    <MainWrapper>
      {/* <Header onChange={onChange} /> */}
      <Header />
      <Main>
          Hello
      </Main>
      </MainWrapper>
  </BodyWrapper>;
};

export default LayoutContainer;
