import React, { useState, useRef, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,useMapEvents,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

function AddressSelector({ onSelect, restaurantLocation }) {
  const [show, setShow] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState("");
  const [addressDetails, setAddressDetails] = useState({});
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);

  const mapRef = useRef();

  const restaurantIcon = new L.Icon({
    iconUrl: "/image.png",
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30],
  });
  

  // const restaurantLocation = [9.9816, 76.2999];

  // const calculateDistance = (lat1, lon1, lat2, lon2) => {
  //   const R = 6371; // Earth radius in kilometers
  //   const dLat = ((lat2 - lat1) * Math.PI) / 180;
  //   const dLon = ((lon2 - lon1) * Math.PI) / 180;

  //   const a =
  //     Math.sin(dLat / 2) * Math.sin(dLat / 2) +
  //     Math.cos((lat1 * Math.PI) / 180) *
  //       Math.cos((lat2 * Math.PI) / 180) *
  //       Math.sin(dLon / 2) *
  //       Math.sin(dLon / 2);

  //   const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  //   return (R * c).toFixed(2);
  // };

  const fetchRoadDistanceAndTime = async (from, to) => {
    const apiKey =
      "eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjFkZjhjNmE1MGNlMjQwYTg4ZmViNDU2ZjhhNWY5NGQ5IiwiaCI6Im11cm11cjY0In0=";
    const url = `https://api.openrouteservice.org/v2/directions/driving-car?api_key=${apiKey}&start=${from[1]},${from[0]}&end=${to[1]},${to[0]}`;

    try {
      const res = await fetch(url);
      const data = await res.json();

      const segment = data.features?.[0]?.properties?.segments?.[0];

      return {
        distanceKm: (segment?.distance / 1000).toFixed(2), // km
        durationMin: Math.round(segment?.duration / 60), // minutes
      };
    } catch (error) {
      console.error("OpenRouteService error:", error);
      return { distanceKm: null, durationMin: null };
    }
  };

  const handleMapClick = async (e) => {
    const { lat, lng } = e.latlng;
    setSelectedPosition([lat, lng]);

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=en`
      );
      const data = await res.json();
      const address = data.address || {};

      const details = {
        display_name: data.display_name || "",
        house: address.house_number || address.building || "",
        street: address.road || address.pedestrian || address.path || "",
        postOffice:
          address.suburb ||
          address.village ||
          address.hamlet ||
          address.town ||
          "",
        pincode: address.postcode || "",
        city: address.city || address.town || address.village || "",
        landmark: address.neighbourhood || address.locality || "",
      };

      setSelectedAddress(data.display_name || "Address not found");
      setAddressDetails(details);

      // // Calculate distance from restaurant
      // const dist = calculateDistance(
      //   restaurantLocation[0],
      //   restaurantLocation[1],
      //   lat,
      //   lng
      // );
      // setDistance(dist);

      const { distanceKm, durationMin } = await fetchRoadDistanceAndTime(
        restaurantLocation,
        [lat, lng]
      );

      setDistance(distanceKm);
      setDuration(durationMin);
      setShow(false);
      if (onSelect) onSelect(details, distanceKm, durationMin);
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
      {/* <label className="form-label fw-semibold">Delivery Location</label> */}

      <div className="border rounded p-3 bg-light d-flex justify-content-between align-items-center">
        <div className="flex-grow-1 pe-3">
          {selectedAddress ? (
            <div>
              <strong>
                {selectedAddress.split(",").slice(0, 2).join(", ")}
              </strong>
              <br />
              <small className="text-muted">{selectedAddress}</small>
              {distance && (
                <>
                  <div className="mt-1 text-success">
                    📍 {distance} km from restaurant
                  </div>
                  <div className="mt-1 text-success">
                    🕐 {duration} Mintes to Reach
                  </div>
                </>
              )}
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
            center={restaurantLocation || [9.9816, 76.2999]}
            zoom={13}
            style={{ height: "100%", width: "100%" }}
            whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {selectedPosition && <Marker position={selectedPosition} />}
            {restaurantLocation && (
              <Marker position={restaurantLocation} icon={restaurantIcon}>
                <Popup>Restaurant</Popup>
              </Marker>
            )}
            <MapClickHandler />
          </MapContainer>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default AddressSelector;
