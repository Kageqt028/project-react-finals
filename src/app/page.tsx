import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { UploadImagesButton } from "./_components/upload-image-button";

export const dynamic = "force-dynamic";

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
    <div>
      <UploadImagesButton />
      <div className="flex flex-wrap items-center justify-center gap-6 p-4">
        {images.map((image) => (
          <div key={image.id} className="flex w-64 flex-col">
            <div className="relative aspect-video rounded-md bg-zinc-900">
              <img
                src={image.url}
                alt={image.id.toString()}
                className="h-full w-full rounded-md object-contain object-top"
              />
            </div>
            <div className="text-center">{image.id}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="">
      {/* <Link href={"about/"}>About Page Link</Link> */}
      <SignedOut>
        <div className="h-full w-full text-center text-2xl">
          Please Sign in to view the images
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
