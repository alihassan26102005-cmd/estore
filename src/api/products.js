
const API_URL = "https://productserver-production-5c9fd1e6.up.railway.app/products";

// GET: Fetch all products
export const getProducts = async () => {
  const response = await fetch(API_URL);

  if (!response.ok) {
    throw new Error("Unable to fetch products");
  }

  const data = await response.json();

  return data.map((product) => ({
    ...product,
    image: product.imageUrl,
    description: product.desc,
    category: "General",
    oldPrice: product.price
  }));
};

// POST: Add a product
export const addProduct = async (product) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!response.ok) {
    throw new Error("Unable to add product");
  }

  return response.json();
};

// PUT: Update a product
export const updateProduct = async (id, product) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(product)
  });

  if (!response.ok) {
    throw new Error("Unable to update product");
  }

  return response.json();
};

// DELETE: Delete a product
export const deleteProduct = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  });

  if (!response.ok) {
    throw new Error("Unable to delete product");
  }

  return response.json();
};
