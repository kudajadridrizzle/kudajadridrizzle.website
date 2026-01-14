import GalleryContent from "./GalleryContent";
import GalleryMasonry from "./GalleryMasonry";
import Wrapper from "../layout/Wrapper";

export default function GallerySection() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col gap-12 sm:gap-20">
          <GalleryContent />
          <GalleryMasonry />
        </div>
      </Wrapper>
    </section>
  );
}
