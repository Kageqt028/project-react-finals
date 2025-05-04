import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      {/* <Link href={"about/"}>About Page Link</Link> */}
      <Images />
    </main>
  );
}

function Images() {
  const urls = [
    "https://gloosguykl.ufs.sh/f/epljYf3PWgTFtmUXZUpHsCz1NUf2kuxdaXOvJq496nt3YlTW",
    "https://gloosguykl.ufs.sh/f/epljYf3PWgTFXWrxjVPn18ixTvdmV79bEUD4fMh6LBazcYHA",
    "https://gloosguykl.ufs.sh/f/epljYf3PWgTFdXijL8EfFRXsImthZrcQNfa2wv9HKUgo83ip",
  ];

  const images = urls.map((url, index) => ({
    id: index + 1,
    url,
  }));

  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-4">
      {images.map((image) => (
        <div key={image.id} className="flex w-64 flex-col">
          <div className="relative aspect-video bg-zinc-900">
            <img
              src={image.url}
              alt={image.id.toString()}
              className="h-full w-full object-contain object-top"
            />
          </div>
          <div className="text-center">{image.id}</div>
        </div>
      ))}
    </div>
  );
}
