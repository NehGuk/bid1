// BASE URL
export const API_BASE_URL = `https://api.noroff.dev/api/v1`;

// GET ALL LISTINGS LOGGED OUT
export const allListingsLoggedOutURL = `${API_BASE_URL}/auction/listings?_seller=true&_bids=true`;

// Register user
export const registerUserURL = `${API_BASE_URL}/auction/auth/register`;

// Login user
export const loginUserURL = `${API_BASE_URL}/auction/auth/login`;

// Change user avatar
export function sendAvatarURL(name) {
  return `${API_BASE_URL}/auction/profiles/${name}/media`;
}
