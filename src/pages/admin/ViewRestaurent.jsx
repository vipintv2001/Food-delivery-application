import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import AdminRestaurentCard from "../../components/AdminRestaurentCard";
import { getRestaurentApi } from "../../services/allApi";

function ViewRestaurent() {
  const [restaurentDetails, setRestaurentDetails] = useState([]);
  const getRestaurent = async () => {
    const result = await getRestaurentApi();
    setRestaurentDetails(result.data);
    console.log(result.data);
  };
  useEffect(() => {
    getRestaurent();
  }, []);

  return (
    <>
      <div className="dashboard">
        <Sidebar />
        <div className="content content-bg">
          <div className="container-fluid">
            <div className="d-flex justify-content-between align-items-center">
              <h3 className="my-4 fw-bolder">Restaurents</h3>
              <div className="input-icon-wrapper">
                <i class="fa-solid fa-magnifying-glass icon"></i>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
              </div>
            </div>
            <div className="container-fluid">
              <div className="row">
                {restaurentDetails.map((item) => (
                  <div className="col custom-col p-3">
                    <AdminRestaurentCard
                      restaurent={item}
                      onDelete={(deletedId) => {
                        setRestaurentDetails((prev) =>
                          prev.filter((restaurent) => restaurent._id !== deletedId)
                        );
                      }}
                    />
                  </div>
                ))}

                {/* {restaurentDetails.map((item) => (
                  <div className="col custom-col p-3">
                    <AdminRestaurentCard restaurent={item} />
                  </div>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewRestaurent;
