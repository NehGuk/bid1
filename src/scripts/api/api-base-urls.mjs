// BASE URL
export const API_BASE_URL = `https://api.noroff.dev/api/v1`;

// Get all listings (logged out)
export const allListingsLoggedOutURL = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true`;

// Register user
export const registerUserURL = `${API_BASE_URL}/auction/auth/register`;

// Login user
export const loginUserURL = `${API_BASE_URL}/auction/auth/login`;

// Change user avatar
export function sendAvatarURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}/media`;
}

// Profile
export function getProfileURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}?_listings=true`;
}

// Single listing
export function getListingURL(listingID) {
  return `${API_BASE_URL}/auction/listings/${listingID}?_seller=true&_bids=true`;
}
