import data, { Photograph } from '@/data/photographs'

export default async function getPhotographMeta(slug?: string) {
  let photograph: Photograph | undefined

  if (!slug) {
    photograph = data[0]
  } else {
    photograph = data.find((p: Photograph) => p.slug === slug)
  }

  if (!photograph) return null

  const relativePath = `images/thumbnails/${photograph.slug}.jpg`
  const image = await import(`../../public/${relativePath}`)

  return {
    title: `${photograph.title}, ${photograph.year}`,
    image: {
      url: `https://christopherknewton.com/${relativePath}`,
      height: image.height,
      width: image.width
    }
  }
}
