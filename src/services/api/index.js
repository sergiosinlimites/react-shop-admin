const API = process.env.API_URL;
const VERSION = process.env.API_VERSION;

const endPoints = {
  auth: {
    login: `${API}/${VERSION}/auth/login`,
    profile: `${API}/${VERSION}/auth/profile`,
  },
  users: {
    getUsers: `${API}/${VERSION}/users`,
    postUser: `${API}/${VERSION}/users`,
    getUser: (id) => `${API}/${VERSION}/users/${id}`,
    updateUser: (id) => `${API}/${VERSION}/users/${id}`,
    deleteUser: (id) => `${API}/${VERSION}/users/${id}`,
    isAvailable: `${API}/${VERSION}/users/is-available`,
  },
  products: {
    getProducts: () => `${API}/${VERSION}/products/`,
    postProduct: `${API}/${VERSION}/products/`,
    getProduct: (id) => `${API}/${VERSION}/products/${id}`,
    updateProduct: (id) => `${API}/${VERSION}/products/${id}`,
    deleteProduct: (id) => `${API}/${VERSION}/products/${id}`,
  },
  categories: {
    getCategories: () => `${API}/${VERSION}/categories/`,
    postCategory: `${API}/${VERSION}/categories/`,
    getCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    updateCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    deleteCategory: (id) => `${API}/${VERSION}/categories/${id}`,
    getProductByCategory: (id) => `${API}/${VERSION}/categories/${id}/products`,
  },
};

export default endPoints;
