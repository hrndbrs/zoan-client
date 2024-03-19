type ProductVideoContainerPropType = {
  videoUrl: string;
};

export default function ProductVideoContainer({ videoUrl }: ProductVideoContainerPropType) {
  return (
    <section className="px-5">
      <div className="inner-container">
        <iframe className="w-full aspect-video" src={videoUrl} allowFullScreen></iframe>
      </div>
    </section>
  );
}
