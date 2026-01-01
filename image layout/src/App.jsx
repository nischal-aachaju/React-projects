import MasonryGallery from "./assets/component/img";
const creativeImages = [
  { image: "https://images.unsplash.com/photo-1549880338-65ddcdfd017b" },
  { image: "https://images.unsplash.com/photo-1520975916090-3105956dac38" },
  { image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97" },
  { image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee" },
  { image: "https://images.unsplash.com/photo-1526318472351-c75fcf070305" },
  { image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769" },
  { image: "https://images.unsplash.com/photo-1519681393784-d120267933ba" },
  { image: "https://images.unsplash.com/photo-1520974735194-6c9f60c1b2c0" },
  { image: "https://images.unsplash.com/photo-1518770660439-4636190af475" },
  { image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308" },

  { image: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913" },
  { image: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d" },
  { image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f" },
  { image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f" },
  { image: "https://images.unsplash.com/photo-1520975922181-8c4a3f89b47c" },
  { image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb" },
  { image: "https://images.unsplash.com/photo-1517841905240-472988babdf9" },
  { image: "https://images.unsplash.com/photo-1517423440428-a5a00ad493e8" },
  { image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb" },
  { image: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f" },

  { image: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde" },
  { image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7" },
  { image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085" },
  { image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e" },
  { image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" },
  { image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
  { image: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6" },
  { image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e" },
  { image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470" },
  { image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429" }
];

export default function App() {
  return (
    <div id="parent" style={{ padding: "20px", background: "#0f0f0f" }}>
      <MasonryGallery images={creativeImages} />
    </div>
  );
}
