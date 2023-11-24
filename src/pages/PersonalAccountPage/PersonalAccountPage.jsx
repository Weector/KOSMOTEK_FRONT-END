import { Outlet, useLocation } from 'react-router-dom';

import {
  Button,
  NavWrap,
  Slider,
  UserNavItem,
  UserNavLink,
  UserNavList,
  WrapPage,
} from './PersonalAccountPage.styled';

import Container from '../../components/Container/Container';
import LastReviewed from '../../components/Product/LastReviewed/LastReviewed';
import { useEffect, useState } from 'react';

export function PersonalAccountPage() {
  const location = useLocation();
  const [width, setWidth] = useState('95');
  const [left, setLeft] = useState('245');

  const Slid = geturl => {
    switch (geturl) {
      case `/user/favorite`:
        setWidth('150');
        setLeft('437');

        break;
      case `/user`:
        setWidth('95');
        setLeft('245');
        break;
      case `/user/history`:
        setWidth('150');
        setLeft('0');
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const geturl = location.pathname;
    Slid(geturl);
  });

  return (
    <Container>
      <WrapPage>
        <Button>Wejście</Button>
        <NavWrap
          style={{ width: '587px', marginLeft: 'auto', marginRight: 'auto' }}
        >
          <UserNavList>
            <UserNavItem>
              <UserNavLink to="/user/history">Historia zamówień</UserNavLink>
            </UserNavItem>
            <UserNavItem>
              <UserNavLink to="/user" end>
                Moje dane
              </UserNavLink>
            </UserNavItem>
            <UserNavItem>
              <UserNavLink to="/user/favorite">Ulubione produkty</UserNavLink>
            </UserNavItem>
          </UserNavList>
          <Slider $width={width} $left={left} />
        </NavWrap>
        <Outlet />
      </WrapPage>
      <LastReviewed />
    </Container>
  );
}
