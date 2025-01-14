import { cormorant, Layout } from '@components/Layout';
import { AppProps } from 'next/app';
import { FC } from 'react';

const App: FC<AppProps> = ({ Component }) => {
  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${cormorant.style.fontFamily};
          }
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
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
