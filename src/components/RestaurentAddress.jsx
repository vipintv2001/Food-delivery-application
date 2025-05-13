import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet default icon issue
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function RestaurentAddress({ onSelect }) {
  const [show, setShow] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const mapRef = useRef();

  const restaurantLocation = [9.9312, 76.2673]; // Default center (e.g., Kochi)

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPosition([lat, lng]);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`
      );
      const data = await res.json();
      const address = data.display_name || "Address not found";

      setSelectedAddress(address);
      setShow(false);

      // Send both lat & lng to parent
      if (onSelect) onSelect({ lat, lng });
    } catch (error) {
      console.error("Geocoding error:", error);
    }
  };

  const MapClickHandler = () => {
    useMapEvents({ click: handleMapClick });
    return null;
  };

  useEffect(() => {
    if (show && mapRef.current) {
      setTimeout(() => {
        mapRef.current.invalidateSize();
      }, 300);
    }
  }, [show]);

  return (
    <div className="mb-4">
      <div className="border rounded p-3 bg-light d-flex justify-content-between align-items-center">
        <div className="flex-grow-1 pe-3">
          {selectedAddress ? (
            <div>
              <strong>
                {selectedAddress.split(",").slice(0, 2).join(", ")}
              </strong>
              <br />
              <small className="text-muted">{selectedAddress}</small>
              <div className="mt-1 text-success">
                {selectedPosition?.join(", ")}
              </div>
            </div>
          ) : (
            <span className="text-muted">No location selected</span>
          )}
        </div>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => setShow(true)}
        >
          <i className="bi bi-geo-alt-fill me-1"></i> Select Location
        </Button>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        centered
        dialogClassName="map-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Location on Map</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ height: "400px", padding: 0 }}>
          <MapContainer
            center={restaurantLocation}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            <MapClickHandler />
            {selectedPosition && <Marker position={selectedPosition} />}
          </MapContainer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default RestaurentAddress;
