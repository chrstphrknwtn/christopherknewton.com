import type { Metadata } from 'next'
import PhotographFigure from '@/components/photograph-figure'
import photographs, { Photograph } from '@/data/photographs'
import getPhotographMeta from '@/lib/getPhotographMeta'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const photographMeta = await getPhotographMeta(slug)

  return {
    metadataBase: new URL('https://christopherknewton.com'),
    title: photographMeta?.title,
    openGraph: {
      images: [
        {
          url: photographMeta.image.url,
          width: photographMeta.image.height,
          height: photographMeta.image.width
        }
      ]
    }
  }
}

export async function generateStaticParams() {
  return photographs.map((photograph: Photograph) => ({
    slug: photograph.slug
  }))
}

const PhotographsPage = async ({ params }: Props) => {
  const { slug } = await params
  const photograph = photographs.find((p: Photograph) => p.slug === slug)
  if (!photograph) {
    throw Error(`Photograph for slug "${slug}" not found`)
  }

  const image = await import(`public/images/${slug}.jpg`)

  return <PhotographFigure photograph={photograph} image={image.default} />
}

export default PhotographsPage
