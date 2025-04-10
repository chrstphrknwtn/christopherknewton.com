import data, { Photograph } from '@/data/photographs'

interface PhotographMeta {
  title: string
  image: {
    url: string
    height: string
    width: string
  }
}

export default async function getPhotographMeta(
  slug?: string
): Promise<PhotographMeta> {
  const candidate = data.find((p: Photograph) => p.slug === slug)
  const photograph: Photograph = candidate ? candidate : data[0]

  const imageModule = await import(`/public/images/${photograph.slug}.jpg`)
  const image = imageModule.default

  return {
    title: `${photograph.title}, ${photograph.year}`,
    image: {
      url: image.src,
      height: image.height,
      width: image.width
    }
  }
}
