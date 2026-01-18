export default async () => {
  const images = {
    imageCompareLeavesTabs: createTabs({
      width: 2623,
      height: 3456,
      name: 'leaves',
    }),
    imageCompareWorkHarderTabs: createTabs({
      width: 4240,
      height: 2384,
      name: 'workharder',
    }),
    imageCompareFlowersTabs: createTabs({
      width: 2267,
      height: 4032,
      name: 'flowers',
    }),
    imageCompareCoffeeTabs: createTabs({
      width: 2047,
      height: 2559,
      name: 'coffee',
    }),
  }

  return {
    images,
  }
}

const compressors = [
  'abraia',
  'compressorio',
  'imageoptim',
  'jpegtran',
  'mozjpeg',
  'mozjpeg-medium',
  'recompress-low',
  'recompress-medium',
  'tinyjpg',
]

const createTabs = ({
  width,
  height,
  name,
}: {
  width: number
  height: number
  name: string
}) => {
  return compressors.map((compressor) => ({
    content: compressor,
    id: `compare-${name}-${compressor}`,
    width,
    height,
    left: createOriginalFilename(name),
    right: createFilename(name, compressor),
  }))
}

const createOriginalFilename = (name: string): string =>
  `/images/posts/image-compressors-compared/compressed/images/[original].${name}.jpg`

const createFilename = (name: string, compressor: string): string =>
  `/images/posts/image-compressors-compared/compressed/${compressor}/${name}.[${compressor}].jpg`
