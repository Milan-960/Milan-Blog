import Head from 'next/head';
import { useRouter } from 'next/router';
import { authorName, defaultMetaBackground } from 'core/constants';

import { blogDescription, blogName, blogUrl } from '../../../_config';

interface Props {
  title?: string | undefined;
  description?: string | undefined;
  ogImage?: string | null;
}

function SEO({ title, description, ogImage }: Props) {
  const router = useRouter();

  const TITLE = title ? `${title} - ${authorName}` : `${blogName} - ${authorName}`;
  const DESCRIPTION = description ? description : blogDescription;
  const URL = blogUrl + router.asPath;
  const IMAGE = ogImage ? ogImage : defaultMetaBackground.default.src;

  return (
    <Head>
      <title>{TITLE}</title>

      <meta property="og:site_name" content="Milan Sachani Blog" />
      <meta property="og:url" content="http://blog.milansachani.dev/" />

      <meta name="keywords" content="project, contact, about" />
      <meta name="robots" content="index,follow" />
      <meta name="language" content="english" />
      <meta name="revisit-after" content="1 days" />
      <meta name="image" content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg" />
      <meta name="thumbnail" content="https://i.pinimg.com/1200x/93/cb/a6/93cba608cbd38deb81023c9f0407d9ff.jpg" />

      <link rel="canonical" href={URL} />
      <meta name="description" content={DESCRIPTION} />
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:image" content={IMAGE} />
      <meta property="og:url" content={URL} />

      {/* for twitter */}
      <meta name="twitter:site" content={TITLE} />
      <meta property="twitter:title" content={TITLE} />
      <meta property="twitter:description" content={DESCRIPTION} />
      <meta property="twitter:image" content={IMAGE} />
      <meta name="twitter:creator" content={TITLE} />
    </Head>
  );
}

export default SEO;
