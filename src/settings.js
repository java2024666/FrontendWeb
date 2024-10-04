import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logout } from './api';
import { UserContext } from './context';

function Settings() {

  const [previewSrc, setPreviewSrc] = useState(null);

  // States for handling password match
  const [newPassword, setNewPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(true);

  useEffect(() => {
    setPasswordsMatch(newPassword === retypePassword);
  }, [newPassword, retypePassword]);

  const [formData, setFormData] = useState({
    nickname: '',
    gender: '',
    birth: '',
    phoneNumber: '',
    emailAddress: '',
  });

  const navigate = useNavigate();
  const { avatarUrl } = useContext(UserContext);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewSrc(reader.result); // Set the image source to the preview
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewSrc(null); // Clear the preview if no file is selected
    }
  };

  // Password change handler
  const handlePasswordChange = (e) => {
    const { id, value } = e.target;
    if (id === 'settingsNewPassword') {
      setNewPassword(value);
    } else if (id === 'settingsRetypePassword') {
      setRetypePassword(value);
    }
  };


// Function to handle logout
const handleLogout = async () => {
  await logout();
  alert('登出成功');
  navigate('/sign-in');
};


return (
  <div className="Settings">
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link rel="icon" type="image/png" href="assets/images/logo-16x16.png" />
      {/* The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags */}
      <title>Argon - Social Network</title>
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Major+Mono+Display"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/boxicons@1.9.2/css/boxicons.min.css"
        rel="stylesheet"
      />
      {/* Styles */}
      <link href="assets/css/bootstrap/bootstrap.min.css" rel="stylesheet" />
      <link href="assets/css/style.css" rel="stylesheet" />
      <link href="assets/css/components.css" rel="stylesheet" />
      <link href="assets/css/settings.css" rel="stylesheet" />
      <link href="assets/css/forms.css" rel="stylesheet" />
      <link href="assets/css/media.css" rel="stylesheet" />
      <div className="container-fluid newsfeed d-flex" id="wrapper">
        <div className="row newsfeed-size f-width">
          <div className="col-md-12 message-right-side">

            <div className="row message-right-side-content">
              <div className="col-md-12">
                <div id="message-frame">
                  <div className="message-sidepanel">
                    <div className="message-contacts settings-sidebar">
                      <ul className="conversations">
                        <h6 className="p-3">General Settings</h6>
                        <li className="contact setting-active">
                          <a
                            href="/settings"
                            className="wrap d-flex align-items-center"
                          >
                            <img
                              src="assets/images/icons/settings/account.png"
                              className="settings-icon"
                              alt="Settings left sidebar"
                            />
                            <div className="meta">
                              <p>Personal Information</p>
                            </div>
                          </a>
                        </li>

                        <h6 className="p-3">Security &amp; Login</h6>
                        <li className="contact">
                          <a href="#" className="wrap d-flex align-items-center">
                            <img
                              src="assets/images/icons/settings/security-question.png"
                              className="settings-icon"
                              alt="Settings left sidebar"
                            />
                            <div className="meta">
                              <p>Security Question</p>
                            </div>
                          </a>
                        </li>
                        <li className="contact">
                          <a
                            href="settings-fingerprint.html"
                            className="wrap d-flex align-items-center"
                          >
                            <div className="meta" />
                            <p>
                              <img
                                src="assets/images/icons/settings/fingerprint.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />{" "}
                              Fingerprint Lock
                            </p>
                          </a>
                        </li>
                        <li className="contact">
                          <a
                            href="settings-location.html"
                            className="wrap d-flex align-items-center"
                          >
                            <div className="meta" />
                            <p>
                              <img
                                src="assets/images/icons/settings/location.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />{" "}
                              Location
                            </p>
                          </a>
                        </li>
                        <h6 className="p-3">Billing &amp; Payment</h6>
                        <li className="contact">
                          <a
                            href="settings-billing-method.html"
                            className="wrap d-flex align-items-center"
                          >
                            <div className="meta" />
                            <p>
                              <img
                                src="assets/images/icons/settings/wallet.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />{" "}
                              Billing Method
                            </p>
                          </a>
                        </li>
                        <li className="contact">
                          <a href="#" className="wrap d-flex align-items-center">
                            <div className="meta" />
                            <p>
                              <img
                                src="assets/images/icons/settings/credit-card.png"
                                className="settings-icon"
                                alt="Settings left sidebar"
                              />{" "}
                              Automatic Payments
                            </p>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="content">
                    <div className="settings-form p-4">
                      <h2>Personal Information</h2>
                      <form action="" method="" className="mt-4 settings-form">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-row mb-3 align-items-center">
                              <div className="col">
                                <label htmlFor="settingsUsername">Username</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="settingsUsername"
                                  aria-describedby="usernameHelp"
                                  placeholder="Username"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-row mb-3 align-items-center">
                              <div className="col">
                                <label htmlFor="settingsNickName">NickName</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="settingsNickName"
                                  placeholder="NickName"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsGender">Gender</label>
                              <select
                                className="form-control"
                                id="settingsGender"
                              >
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                              </select>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsBirth">Birth</label>
                              <input
                                type="text"
                                className="form-control"
                                id="settingsBirth"
                                placeholder="1900-01-01"
                              />
                            </div>
                          </div>
                          <div className="col-md-4">

                            <div className="profile-img-upload" />
                            <div className="profile-img-section">
                              <label htmlFor="updateProfilePic" className="upload">
                                <i className="bx bxs-camera" /> Upload image
                                <input
                                  type="file"
                                  id="updateProfilePicInput"
                                  className="text-center upload"
                                  accept="image/*"
                                  onChange={handleImageChange} // Call the function on file change
                                />
                              </label>
                              {/* Image Preview */}
                              {previewSrc && (
                                <div className="image-preview">
                                  <img src={previewSrc} alt="Selected Preview" className="img-thumbnail" />
                                </div>
                              )}
                            </div>

                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsCurrentPassword">
                                Current Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="settingsCurrentPassword"
                                placeholder="Current Password"
                              />
                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsNewPassword">
                                New Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="settingsNewPassword"
                                placeholder="New Password"
                                value={newPassword}
                                onChange={handlePasswordChange}
                              />

                            </div>
                          </div>
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsRetypePassword">
                                Re-type New Password
                              </label>
                              <input
                                type="password"
                                className="form-control"
                                id="settingsRetypePassword"
                                placeholder="Re-type New Password"
                                value={retypePassword}
                                onChange={handlePasswordChange}
                              />
                              {!passwordsMatch && (
                                <small className="text-danger">
                                  <i className="bx bx-x error" /> Passwords do not match
                                </small>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-group">
                              <label htmlFor="settingsPhoneNumber">
                                Phone Number
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                id="settingsPhoneNumber"
                                value={formData.phoneNumber}
                                
                                placeholder="Phone Number"
                              />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="form-row mb-3 align-items-center">
                              <div className="col">
                                <label htmlFor="settingsEmailAddress">
                                  Email Address
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="settingsEmailAddress"
                                  aria-describedby="emailHelp"
                                  defaultValue="emailaddress@gmail.com"
                                  placeholder="Email Address"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 d-flex justify-content-end" style={{ position: "fixed", bottom: "20px", right: "20px" }}>
                          <button type="submit" className="btn btn-primary btn-sm">
                            Save Changes
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Core */}
      {/* Optional */}
    </>

  </div>
);
}

export default Settings;