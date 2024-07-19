import PhotographFigure from '../../../components/photograph-figure';
import photographs, { Photograph } from '../../../data/photographs';
import getPhotographMeta from '../../../lib/getPhotographMeta';

type MetaProps = {
  params: { slug: string };
};

export async function generateMetadata({ params }: MetaProps) {
  const photograph = photographs.find(
    (p: Photograph) => p.slug === params.slug
  );

  const photographMeta = await getPhotographMeta(photograph?.slug);

  return {
    metadataBase: new URL('https://christopherknewton.com'),
    title: photographMeta?.title,
    openGraph: {
      images: [
        {
          url: photographMeta?.image.url,
          width: photographMeta?.image.height,
          height: photographMeta?.image.width
        }
      ]
    }
  };
}

export async function generateStaticParams() {
  return photographs.map((photograph: Photograph) => ({
    slug: photograph.slug
  }));
}

interface Props {
  params: { slug: string };
}

const PhotographsPage = ({ params }: Props) => {
  const photograph = photographs.find(
    (p: Photograph) => p.slug === params.slug
  );
  return photograph ? <PhotographFigure photograph={photograph} /> : null;
};

export default PhotographsPage;
