import { Layout } from '@components/Layout';
import { AppProps } from 'next/app';
import { FC } from 'react';
import { Cormorant } from 'next/font/google';

const cormorant = Cormorant({ subsets: ['cyrillic', 'latin'] });

const App: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${cormorant.style.fontFamily};
          }
        `}
      </style>
      <Layout>
        <Component />
      </Layout>
    </>
  );
};

export default App;
