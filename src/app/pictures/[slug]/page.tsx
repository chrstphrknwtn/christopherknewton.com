import type { Metadata } from 'next'
import type { StaticImageData } from 'next/image'
import PhotographFigure from '@/components/photograph-figure'
import data, { Photograph } from '@/data/photographs'

type Props = {
  params: Promise<{ slug: string }>
}

interface Picture {
  photograph: Photograph
  image: StaticImageData
}

async function importImage(slug: string): Promise<Picture> {
  const photograph = data.find((p: Photograph) => p.slug === slug)
  if (!photograph) {
    throw Error(`Photograph for slug "${slug}" not found`)
  }
  const image = await import(`public/images/${slug}.jpg`)

  return {
    photograph,
    image: image.default
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const { photograph, image } = await importImage(slug)

  return {
    metadataBase: new URL('https://christopherknewton.com'),
    title: photograph.title,
    openGraph: {
      images: [
        {
          url: image.src,
          width: image.height,
          height: image.width
        }
      ]
    }
  }
}

export async function generateStaticParams() {
  return data.map((photograph: Photograph) => ({
    slug: photograph.slug
  }))
}

const PhotographsPage = async ({ params }: Props) => {
  const { slug } = await params
  const { photograph, image } = await importImage(slug)

  return <PhotographFigure photograph={photograph} image={image} />
}

export default PhotographsPage
