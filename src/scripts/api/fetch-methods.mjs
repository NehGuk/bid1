const token = localStorage.getItem("token");
export const fetchMetdhods = {
  registerUser: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  },
  loginUser: {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: "",
  },
  updateAvatarOption: {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: "",
  },
  getProfile: {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  },
};
