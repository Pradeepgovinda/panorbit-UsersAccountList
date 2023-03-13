import React from "react";
import GoogleMapReact from 'google-map-react';
import { useSelector } from "react-redux";



const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Profile = () => {

  const { current_user } = useSelector(state => state)

  // console.log("Get Data", current_user)

  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <>


      <nav id="main-navbar-top" className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <h4 className="navbar-brand">Profile</h4>
        </div>
      </nav>


      <main className="profile">
        <div className="container pt-5 mt-5" >
          <div className="row">

            <div className="company col-4">

              <div className="row mb-3">
                <div className="col" style={{ textAlign: 'center' }}>
                  <img className="profile-pic" alt={current_user.username} src={current_user.profilepicture} />
                  <h3>{current_user.name}</h3>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Username :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.username}</span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">e-mail :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.email} </span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Phone :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.phone}</span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Website :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.website}</span></h4>
                </div>
              </div>
              <hr />

              <div className="row">
                <div className="col">
                  <h4 style={{ textAlign: "center", color:'#999999' }}>Company</h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Name :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.company.name}</span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">catcphrase :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.company.catchPhrase}</span></h4>
                </div>
              </div>

              <div className="row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">bs :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.company.bs}</span></h4>
                </div>
              </div>
            </div>

            <div className="address col-8">
              <div className="row">
                <div className="col">
                  <h4 style={{ textAlign: "start", color:'#999999' }}>Address</h4>
                </div>
              </div>
              <div className="address-list row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Street :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.address.street}</span></h4>
                </div>
              </div>

              <div className="address-list row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Suite :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.address.suite}</span></h4>
                </div>
              </div>

              <div className="address-list row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">City :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.address.city}</span></h4>
                </div>
              </div>

              <div className="address-list row">
                <div className="col">
                  <h4 className="user-list"><span className="tx1">Zipcode :</span></h4>
                </div>
                <div className="col">
                  <h4 className="list-user"><span className="ts">{current_user.address.zipcode}</span></h4>
                </div>
              </div>

              <div style={{ height: '50vh', width: '80%', borderRadius: '1.7rem', overflow: 'hidden' }}>
                <GoogleMapReact className="mapradio"
                  bootstrapURLKeys={{ key: "" }}
                  defaultCenter={defaultProps.center}
                  defaultZoom={defaultProps.zoom}
                >
                  <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </div>
              <div className="lat-long row">
                <div className="col">
                  <h4 className="lat"><span className="tx1">Lat : </span> <span className="lat-geo">{current_user.address.geo.lat}</span></h4>
                </div>
                <div className="col">
                  <h4 className="long"><span className="tx1">Long :</span><span className="long-geo"> {current_user.address.geo.lng}</span></h4>
                </div>
              </div>


            </div>
          </div>
        </div>

      </main>

    </>

  )
};

export default Profile;