import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AdminRestaurentCard from "../../components/AdminRestaurentCard";
import { getRestaurentApi } from "../../services/allApi";

function ViewRestaurent() {
  const [restaurentDetails, setRestaurentDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const getRestaurent = async () => {
    setLoading(true);
    const result = await getRestaurentApi();
    setRestaurentDetails(result.data);
    console.log(result.data);
    setLoading(false);
  };
  useEffect(() => {
    getRestaurent();
  }, []);

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content content-bg">
          {loading ? (
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "300px" }}
            >
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              <p className="mt-3 fw-semibold text-muted">
                Loading, please wait...
              </p>
            </div>
          ) : (
            <div className="container-fluid">
              <div className="d-flex justify-content-between align-items-center">
                <h3 className="my-4 fw-bolder">Restaurents</h3>
              </div>
              <div className="container-fluid">
                <div className="row">
                  {restaurentDetails.length > 0 ? (
                    restaurentDetails.map((item, index) => (
                      <div
                        key={index}
                        className="col-sm-12 col-md-4 col-lg-3 mb-4"
                      >
                        <AdminRestaurentCard
                          restaurent={item}
                          onDelete={(deletedId) => {
                            setRestaurentDetails((prev) =>
                              prev.filter(
                                (restaurent) => restaurent._id !== deletedId
                              )
                            );
                          }}
                        />
                      </div>
                    ))
                  ) : (
                    <p className="fs-4 mt-5 text-center">
                      No Restaurents Were Added
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default ViewRestaurent;
