import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage/HomePage';
import RootLayout from './RootLayout';

export const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      handle: { crumb: () => 'KOSMOTEK' },
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'login',
          async lazy() {
            let { LoginPage } = await import(
              '../pages/AuthPage/LoginPage/LoginPage'
            );
            return { Component: LoginPage };
          },
        },
        {
          path: 'register',
          async lazy() {
            let { RegistrationPage } = await import(
              '../pages/AuthPage/RegistrationPage/RegistrationPage'
            );
            return { Component: RegistrationPage };
          },
        },
        {
          path: 'recovering',
          async lazy() {
            let { RecoveringPage } = await import(
              '../pages/AuthPage/RecoveringPage/RecoveringPage'
            );
            return { Component: RecoveringPage };
          },
        },
        {
          path: 'user',
          async lazy() {
            let { PersonalAccountPage } = await import(
              '../pages/PersonalAccountPage/PersonalAccountPage'
            );
            return { Component: PersonalAccountPage };
          },
          children: [
            {
              index: true,
              async lazy() {
                let { PersonalData } = await import(
                  '../components/PersonalAccount/PersonalData/PersonalData'
                );
                return { Component: PersonalData };
              },
            },
            {
              path: 'history',
              async lazy() {
                let { OrderHistory } = await import(
                  '../components/PersonalAccount/OrderHistory/OrderHistory'
                );
                return { Component: OrderHistory };
              },
            },
            {
              path: 'favorite',
              async lazy() {
                let { FavoriteProducts } = await import(
                  '../components/PersonalAccount/FavoriteProducts/FavoriteProducts'
                );
                return { Component: FavoriteProducts };
              },
            },
          ],
        },
        {
          path: 'categorys',
          handle: { crumb: () => 'Kategory' },
          children: [
            {
              index: true,
              async lazy() {
                let { ProductGroupPage } = await import(
                  '../pages/ProductGroupPage/ProductGroupPage'
                );
                return { Component: ProductGroupPage };
              },
            },
            {
              path: ':group',
              handle: { crumb: () => 'Groop' },
              children: [
                {
                  index: true,
                  async lazy() {
                    let { ProductGroupPage } = await import(
                      '../pages/ProductGroupPage/ProductGroupPage'
                    );
                    return { Component: ProductGroupPage };
                  },
                },
                {
                  path: ':id',
                  handle: { crumb: () => 'Product' },
                  async lazy() {
                    let { ProductPage } = await import(
                      '../pages/ProductGroupPage/ProductPage/ProductPage'
                    );
                    return { Component: ProductPage };
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
