import BaseService from "./baseService";

class ApiService extends BaseService {
  // Auth Routes
  login(data) {
    return this.post("/login", data);
  }
  forgotPassword(data) {
    return this.post("/forgot_password", data);
  }
  register(data) {
    return this.post("/register", data);
  }

  // Other Routes
  // profile
  getOwnProfile() {
    return this.get("/profiles/getOwnProfile");
  }
  updateProfile(data) {
    return this.put(`/profiles/${data?._id}`, data);
  }

  // experience
  addExperience(data) {
    return this.post("/experience", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }

  updateExperience(data) {
    return this.put(`/experience/${data?._id}`, data);
  }

  addCommentInExperience(data) {
    return this.put(`/experience/comment/${data?._id}`, data);
  }

  updateCommentInExperience(data) {
    return this.put(
      `/experience/comment/${data?._id}/${data?.comment_id}`,
      data
    );
  }

  updateLikeInExperience(data) {
    return this.put(
      `/experience/like/${data?._id}/${data?.comment_id}?is_liked=${data?.is_liked}`,
      data
    );
  }

  updateLikeOnPostExperience(data) {
    return this.put(
      `/experience/likeOnPost/${data?._id}?is_liked=${data?.is_liked}`,
      data
    );
  }

  deleteCommentInExperience(data) {
    return this.delete(`/experience/comment/${data?._id}/${data?.comment_id}`);
  }

  deleteExperience(data) {
    return this.delete(`/experience/${data?._id}`);
  }

  getExperiences() {
    return this.get("/experience");
  }

  getParticularExperience(id) {
    return this.get(`/experience/${id}`);
  }

  addFile(file) {
    return this.post("/upload", file);
  }

  addRating(data){
    return this.post("/rating",data)
  }

  getMapsLocations() {
    return this.get("/mapLocation");
  }

  getParticularPlace(id) {
    return this.get(`/mapLocation/${id}`);
  }

  updateParticularMapLocation(data) {
    const id = data?.id;
    delete data.id
    return this.put(`/mapLocation/${id}`,data);
  }

  getProvinces() {
    return this.get("/province");
  }

  getCategories() {
    return this.get("/category");
  }
}

export default new ApiService();
