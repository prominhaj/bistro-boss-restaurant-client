import React from "react";
import { Helmet } from "react-helmet";

const Profile = () => {
  return (
    <>
      {/* Helmet */}
      <Helmet>
        <title>Bistro Boss | Profile</title>
      </Helmet>

      <div className="container mx-auto px-5 py-32">
        <h1>This Profile Page</h1>
      </div>
    </>
  );
};

export default Profile;
