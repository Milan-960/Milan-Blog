import Document, { Head, Html, Main, NextScript } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import { Footer, GlobalStyle, Layout } from 'core';
import { authorName, blogGAID, blogHotjarID, favicon } from 'core/constants';

function isValid(value: any) {
  if (typeof value === 'string' && value.length > 0) return true;
  return false;
}

export default class BlogDocument extends Document {
  render() {
    return (
      <Html lang="ko">
        <Head>
          {/* for NextUI */}
          {CssBaseline.flush()}
          <title>Milan Sachani Blog</title>
          <link rel="icon" href={favicon.default.src} />
          <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
          <meta httpEquiv="x-ua-compatible" content="personal website" />
          <meta name="robots" content="index,follow" />
          <meta name="language" content="english" />
          <meta name="author" content="Milan Sachani" />
          <meta name="revisit-after" content="1 days" />
          <meta property="og:type" content="blog" />
          <meta property="og:locale" content="ko_KR" />
          <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
          <link rel="canonical" href="https://blog.milansachani.dev" />
          <meta name="keywords" content="blog, development, developer, frontend" />
          <meta name="twitter:creator" content={authorName} />

          {/* for google analytics */}
          {isValid(blogGAID) && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${blogGAID}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${blogGAID}');`,
                }}
              />
            </>
          )}

          {/* for hotjar */}
          {isValid(blogHotjarID) && (
            <script
              dangerouslySetInnerHTML={{
                __html: `(function(h,o,t,j,a,r){
              h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
              h._hjSettings={hjid:${blogHotjarID},hjsv:6};
              a=o.getElementsByTagName('head')[0];
              r=o.createElement('script');r.async=1;
              r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
              a.appendChild(r);
          })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');`,
              }}
            ></script>
          )}

          <GlobalStyle />
        </Head>

        <body>
          <Layout>
            <Main />
            <Footer />
          </Layout>
          <NextScript />
        </body>
      </Html>
    );
  }
}
