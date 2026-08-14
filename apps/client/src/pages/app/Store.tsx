import { useMemo, useState } from "react";
import { ArrowUpRight, CheckCircle2, Clock3, LocateFixed, MapPin, Navigation, Search } from "lucide-react";

// 자카르타 기준으로 약국 데이터 수정
const stores = [{
  name: "Guardian Pharmacy · Grand Indonesia", // 실제 있는 약국
  address: "Grand Indonesia, Jl. M.H. Thamrin No.1",
  distance: "0.5 km",
  closing: "Open until 10 PM",
  city: "Jakarta"
}, {
  name: "Century Healthcare · Sudirman", // 가상 데이터
  address: "Jl. Jend. Sudirman Kav. 52-53",
  distance: "1.2 km",
  closing: "Open until 9 PM",
  city: "Jakarta"
}, {
  name: "Kimia Farma · Kemang", // 가상 데이터
  address: "Jl. Kemang Raya No. 45",
  distance: "3.5 km",
  closing: "Open 24 Hours",
  city: "South Jakarta"
}];

export default function Store() {
  const [query, setQuery] = useState("");
  const [locationMessage, setLocationMessage] = useState("");
  
  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return stores;
    return stores.filter(store => `${store.name} ${store.address} ${store.city}`.toLowerCase().includes(normalized));
  }, [query]);

  const openDirections = (storeName: string) => {
    const destination = encodeURIComponent(storeName);
    window.open(`https://www.google.com/maps/search/?api=1&query=${destination}`, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="page-stack store-page">
      <section className="store-search">
        <label>
          <Search size={18} />
          <input 
            value={query} 
            onChange={event => setQuery(event.target.value)} 
            placeholder="Search city or pharmacy" 
            aria-label="Search city or pharmacy" 
          />
        </label>
        <button 
          aria-label="Use current location" 
          onClick={() => setLocationMessage("Location updated · Thamrin, Jakarta")} // 자카르타 위치로 변경
        >
          <LocateFixed size={20} />
        </button>
      </section>
      
      {locationMessage ? (
        <div className="location-message">
          <CheckCircle2 size={15} />
          {locationMessage}
        </div>
      ) : null}

      <section className="store-map health-card" aria-label="Interactive map preview">
        <span className="map-road store-road-one" />
        <span className="map-road store-road-two" />
        <span className="map-road store-road-three" />
        <span className="map-block store-block-one" />
        <span className="map-block store-block-two" />
        <span className="map-block store-block-three" />
        <span className="map-block store-block-four" />
        <span className="store-pin pin-a"><MapPin size={19} fill="currentColor" /></span>
        <span className="store-pin pin-b"><MapPin size={17} fill="currentColor" /></span>
        <span className="store-pin pin-c"><MapPin size={17} fill="currentColor" /></span>
        <div className="map-user"><Navigation size={14} fill="currentColor" /></div>
        <div className="map-callout">
          <span className="brand-mark">  E</span>
          <div>
            <strong>3 Better Day Points</strong>
            <span>within 3 km</span>
          </div>
        </div>
      </section>

      <section className="store-results">
        <div className="results-heading">
          <div>
            <h2>Nearby pharmacies</h2>
            <span>{filtered.length} official retailers</span>
          </div>
          <button>Map filters</button>
        </div>

        <div className="store-list">
          {filtered.length ? filtered.map((store, index) => (
            <article className="store-card health-card" key={store.name}>
                <div className="store-number">{index + 1}</div>
                <div className="store-info">
                  <div className="official-label">
                    <CheckCircle2 size={13} />
                    Official EZN6 Eve retailer
                  </div>
                  <h3>{store.name}</h3>
                  <p>{store.address}</p>
                  <div className="store-meta">
                    <span><MapPin size={13} /> {store.distance}</span>
                    <span><Clock3 size={13} /> {store.closing}</span>
                  </div>
                  <button onClick={() => openDirections(store.name)}>
                    Get directions <ArrowUpRight size={15} />
                  </button>
                </div>
            </article>
          )) : (
            <div className="empty-state health-card">
              <Search size={23} />
              <h3>No nearby matches</h3>
              <p>Try another city, district, or pharmacy name.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}