import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import {
  FaPlus,
  FaTrashAlt,
  FaBoxOpen,
  FaTags,
  FaCheckCircle,
  FaArrowLeft,
  FaSearch,
  FaEye,
  FaLayerGroup,
  FaCloudUploadAlt,
  FaFileImage,
  FaSignOutAlt,
  FaShieldAlt,
} from "react-icons/fa";
import {
  fetchProducts,
  addNewProduct,
  removeProduct,
} from "../../redux/features/productSlice";

const CATEGORIES = [
  { id: "cafe", name: "Cafe & Beverages", icon: "☕" },
  { id: "fresh", name: "Fresh Fruits & Veggies", icon: "🍎" },
  { id: "toys", name: "Toys & Games", icon: "🧸" },
  { id: "electronics", name: "Electronics", icon: "🎧" },
  { id: "mobile", name: "Mobiles & Accessories", icon: "📱" },
  { id: "beauty", name: "Beauty & Personal Care", icon: "💄" },
  { id: "fashion", name: "Fashion & Apparel", icon: "👕" },
  { id: "home-item", name: "Home & Kitchen", icon: "🏠" },
  { id: "laundry", name: "Laundry & Household", icon: "🧼" },
];

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items: products } = useSelector((state) => state.products);

  const [currentAdmin, setCurrentAdmin] = useState(null);
  const [activeTab, setActiveTab] = useState("add"); // 'add' or 'manage'
  const [adminSearch, setAdminSearch] = useState("");
  const [filterCategory, setFilterCategory] = useState("all");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Check admin authorization
  useEffect(() => {
    try {
      const user = JSON.parse(localStorage.getItem("LoggedInUsers"));
      if (!user || user.role !== "admin") {
        toast.error("Please login as Admin to access the Admin Panel");
        navigate("/admin/login");
        return;
      }
      {setCurrentAdmin}(user);
    } catch {
      navigate("/admin/login");
    }
  }, [navigate]);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    category: "cafe",
    price: "",
    oldPrice: "",
    brand: "",
    description: "",
    inStock: true,
  });

  // Multer Image Upload State
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    dispatch(fetchProducts({ category: "", search: "" }));
  }, [dispatch]);

  const handleAdminLogout = () => {
    localStorage.removeItem("LoggedInUsers");
    localStorage.removeItem("authToken");
    window.dispatchEvent(new Event("authChange"));
    toast.success("Admin logged out successfully");
    navigate("/admin/login");
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        toast.error("Please upload a valid image file (PNG, JPG, WEBP, etc.)");
        return;
      }
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("Please enter a product name");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!imageFile) {
      toast.error("Please select a product image to upload via Multer");
      return;
    }

    const priceNum = Number(formData.price);
    const oldPriceNum = Number(formData.oldPrice) || priceNum;
    const discount =
      oldPriceNum > priceNum ? `₹${oldPriceNum - priceNum} OFF` : "";

    // Build multipart FormData for Multer backend
    const submitData = new FormData();
    submitData.append("name", formData.name.trim());
    submitData.append("category", formData.category);
    submitData.append("price", priceNum);
    submitData.append("oldPrice", oldPriceNum);
    if (discount) submitData.append("offer", discount);
    submitData.append("brand", formData.brand.trim() || "Zepto");
    submitData.append("description", formData.description.trim());
    submitData.append("inStock", formData.inStock);
    submitData.append("image", imageFile);

    setIsSubmitting(true);
    try {
      await dispatch(addNewProduct(submitData)).unwrap();
      toast.success(
        `🎉 "${formData.name}" added to ${formData.category} category!`
      );
      // Reset form
      setFormData({
        name: "",
        category: formData.category,
        price: "",
        oldPrice: "",
        brand: "",
        description: "",
        inStock: true,
      });
      handleRemoveImage();
      setActiveTab("manage");
    } catch (err) {
      toast.error("Failed to add product: " + err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to delete "${name}"?`)) {
      try {
        await dispatch(removeProduct(id)).unwrap();
        toast.success(`Deleted "${name}"`);
      } catch (err) {
        toast.error("Delete failed: " + err);
      }
    }
  };

  // Filter products for the admin table
  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      filterCategory === "all" || item.category === filterCategory;
    const matchesSearch =
      adminSearch.trim() === "" ||
      item.name?.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.brand?.toLowerCase().includes(adminSearch.toLowerCase()) ||
      item.category?.toLowerCase().includes(adminSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Category counts
  const categoryCounts = products.reduce((acc, curr) => {
    acc[curr.category] = (acc[curr.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-purple-50/40 pb-16">
      {/* Top Navbar */}
      <div className="bg-white border-b sticky top-0 z-30 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Zepto_Logo.svg/1280px-Zepto_Logo.svg.png"
                alt="Zepto Logo"
                className="h-7 sm:h-8"
              />
            </Link>
            <span className="bg-purple-600 text-white font-bold text-xs uppercase px-2.5 py-1 rounded-md tracking-wider">
              Admin Portal
            </span>
          </div>

          <div className="flex items-center gap-3">
            {currentAdmin && (
              <div className="hidden sm:flex items-center gap-2 bg-purple-50 text-purple-800 px-3 py-1.5 rounded-xl border border-purple-200 text-xs font-semibold">
                <FaShieldAlt className="text-purple-600" />
                <span>{currentAdmin.name || "Administrator"}</span>
              </div>
            )}
            <Link
              to="/"
              className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium px-4 py-2 rounded-xl text-sm transition"
            >
              <FaArrowLeft className="text-xs" />
              <span>Back to Store</span>
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-95 text-white font-medium px-4 py-2 rounded-xl text-sm transition shadow-sm"
            >
              <FaEye className="text-xs" />
              <span>Customer View</span>
            </Link>
            <button
              onClick={handleAdminLogout}
              className="flex items-center gap-2 bg-red-50 hover:bg-red-100 text-red-600 font-medium px-4 py-2 rounded-xl text-sm transition cursor-pointer"
            >
              <FaSignOutAlt className="text-xs" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
      {/* slider */}

      <div className="">
        <div>
        
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8">
        {/* Header Hero */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Catalog & Inventory Management
          </h1>
          <p className="text-gray-600 text-sm sm:text-base mt-1">
            Add new products with direct Multer image upload. Published items appear immediately in customer category pages and search results.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center text-xl shrink-0">
              <FaBoxOpen />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Total Products
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {products.length}
              </h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-pink-100 text-pink-600 flex items-center justify-center text-xl shrink-0">
              <FaTags />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Categories
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {CATEGORIES.length}
              </h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-green-100 text-green-600 flex items-center justify-center text-xl shrink-0">
              <FaCheckCircle />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                In Stock
              </p>
              <h3 className="text-2xl font-bold text-gray-900">
                {products.filter((p) => p.inStock !== false).length}
              </h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-xs flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center text-xl shrink-0">
              <FaLayerGroup />
            </div>
            <div>
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                Top Category
              </p>
              <h3 className="text-base sm:text-lg font-bold text-gray-900 truncate">
                {CATEGORIES.find(
                  (c) => c.id === Object.keys(categoryCounts)[0]
                )?.name || "Cafe"}
              </h3>
            </div>
          </div>
        </div>

        {/* Tab Toggle Navigation */}
        <div className="flex border-b border-gray-200 mb-6 gap-2">
          <button
            onClick={() => setActiveTab("add")}
            className={`pb-3 px-5 font-semibold text-sm sm:text-base flex items-center gap-2 border-b-2 transition cursor-pointer ${
              activeTab === "add"
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <FaPlus className="text-xs" />
            Add Product as per Category
          </button>
          <button
            onClick={() => setActiveTab("manage")}
            className={`pb-3 px-5 font-semibold text-sm sm:text-base flex items-center gap-2 border-b-2 transition cursor-pointer ${
              activeTab === "manage"
                ? "border-purple-600 text-purple-600"
                : "border-transparent text-gray-500 hover:text-gray-800"
            }`}
          >
            <FaBoxOpen className="text-xs" />
            Manage Inventory ({products.length})
          </button>
        </div>

        {/* TAB 1: ADD PRODUCT FORM */}
        {activeTab === "add" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
            <div className="max-w-4xl">
              <h2 className="text-xl font-bold text-gray-900 mb-1">
                Add New Product
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Choose category, enter price, and upload the product image directly via Multer.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Category Selection with Radio Pills */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Select Product Category *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {CATEGORIES.map((cat) => (
                      <button
                        type="button"
                        key={cat.id}
                        onClick={() =>
                          setFormData({ ...formData, category: cat.id })
                        }
                        className={`flex items-center gap-2 p-3 rounded-xl border text-sm font-medium transition text-left cursor-pointer ${
                          formData.category === cat.id
                            ? "border-purple-600 bg-purple-50/70 text-purple-700 font-semibold shadow-xs ring-1 ring-purple-500"
                            : "border-gray-200 hover:border-gray-300 text-gray-700 bg-white"
                        }`}
                      >
                        <span className="text-lg">{cat.icon}</span>
                        <span className="truncate">{cat.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Name & Brand */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Product Name / Title *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Zepto Special Hazelnut Cold Coffee"
                      required
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Brand
                    </label>
                    <input
                      type="text"
                      name="brand"
                      value={formData.brand}
                      onChange={handleInputChange}
                      placeholder="e.g. Zepto Cafe"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                    />
                  </div>
                </div>

                {/* Pricing: Selling Price & MRP */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Selling Price (₹) *
                    </label>
                    <input
                      type="number"
                      name="price"
                      value={formData.price}
                      onChange={handleInputChange}
                      placeholder="e.g. 149"
                      required
                      min="0"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Original / MRP Price (₹)
                    </label>
                    <input
                      type="number"
                      name="oldPrice"
                      value={formData.oldPrice}
                      onChange={handleInputChange}
                      placeholder="e.g. 199"
                      min="0"
                      className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                    />
                    {formData.oldPrice &&
                      formData.price &&
                      Number(formData.oldPrice) > Number(formData.price) && (
                        <p className="text-xs text-green-600 font-semibold mt-1">
                          Offer: ₹
                          {Number(formData.oldPrice) - Number(formData.price)} OFF (
                          {Math.round(
                            ((Number(formData.oldPrice) -
                              Number(formData.price)) /
                              Number(formData.oldPrice)) *
                              100
                          )}
                          % discount)
                        </p>
                      )}
                  </div>
                </div>

                {/* Product Image Upload via Multer */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                    Product Image (File Upload) *
                  </label>

                  <input
                    type="file"
                    ref={fileInputRef}
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="multer-product-image"
                  />

                  {!imagePreview ? (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        const file = e.dataTransfer.files?.[0];
                        if (file) {
                          if (!file.type.startsWith("image/")) {
                            toast.error("Please upload an image file");
                            return;
                          }
                          setImageFile(file);
                          setImagePreview(URL.createObjectURL(file));
                        }
                      }}
                      className="border-2 border-dashed border-purple-300 hover:border-purple-500 bg-purple-50/30 hover:bg-purple-50/60 rounded-2xl p-8 flex flex-col items-center justify-center cursor-pointer transition text-center group"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center text-2xl mb-3 group-hover:scale-110 transition-transform shadow-xs">
                        <FaCloudUploadAlt />
                      </div>
                      <p className="text-sm font-bold text-gray-800">
                        Click or drag & drop to choose an image
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Supports JPG, PNG, WEBP, GIF, SVG (Up to 10MB) • Uploaded securely via Multer
                      </p>
                    </div>
                  ) : (
                    <div className="p-4 bg-purple-50/50 border border-purple-200 rounded-2xl flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-20 h-20 object-contain rounded-xl bg-white border border-gray-200 p-1 shadow-xs"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <FaFileImage className="text-purple-600 text-sm" />
                            <p className="text-sm font-bold text-gray-900 truncate max-w-xs sm:max-w-sm">
                              {imageFile?.name || "Uploaded Image"}
                            </p>
                          </div>
                          <p className="text-xs text-gray-500 mt-0.5">
                            {imageFile?.size
                              ? (imageFile.size / 1024).toFixed(1) + " KB"
                              : ""}{" "}
                            • Selected for Multer upload
                          </p>
                          <span className="inline-block mt-1 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                            ✓ Image Ready
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => fileInputRef.current?.click()}
                          className="text-xs bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer"
                        >
                          Change File
                        </button>
                        <button
                          type="button"
                          onClick={handleRemoveImage}
                          className="text-xs bg-red-50 hover:bg-red-100 text-red-600 font-semibold px-3.5 py-2 rounded-xl transition cursor-pointer flex items-center gap-1.5"
                        >
                          <FaTrashAlt className="text-[10px]" />
                          Remove
                        </button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-1">
                    Description (Optional)
                  </label>
                  <textarea
                    rows="2"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Brief highlights or description for customer display..."
                    className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none text-sm"
                  ></textarea>
                </div>

                {/* In Stock Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="inStock"
                    name="inStock"
                    checked={formData.inStock}
                    onChange={handleInputChange}
                    className="h-4 w-4 text-purple-600 rounded focus:ring-purple-500 cursor-pointer"
                  />
                  <label
                    htmlFor="inStock"
                    className="text-sm font-medium text-gray-700 cursor-pointer"
                  >
                    Available in Stock (Visible for instant delivery)
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-3.5 px-8 rounded-xl shadow-md transition duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting
                      ? "Uploading with Multer..."
                      : "🚀 Publish Product to Store"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* TAB 2: MANAGE PRODUCTS INVENTORY */}
        {activeTab === "manage" && (
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-xs">
            {/* Filter & Search Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
              <div className="relative w-full md:w-80">
                <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                <input
                  type="text"
                  placeholder="Search products in inventory..."
                  value={adminSearch}
                  onChange={(e) => setAdminSearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-purple-500 focus:outline-none"
                />
              </div>

              {/* Category Filter Pill Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-2 md:pb-0 scrollbar-hide">
                <button
                  onClick={() => setFilterCategory("all")}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                    filterCategory === "all"
                      ? "bg-purple-600 text-white shadow-xs"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  All ({products.length})
                </button>
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setFilterCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition cursor-pointer flex items-center gap-1.5 ${
                      filterCategory === cat.id
                        ? "bg-purple-600 text-white shadow-xs"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                    <span className="opacity-70">
                      ({products.filter((p) => p.category === cat.id).length})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Product Table */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-16">
                <div className="text-5xl mb-3">📦</div>
                <h3 className="text-lg font-bold text-gray-800">
                  No products found
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Try adjusting your search or category filter, or add a new product above.
                </p>
                <button
                  onClick={() => setActiveTab("add")}
                  className="mt-4 bg-purple-600 text-white px-5 py-2 rounded-xl text-sm font-semibold hover:bg-purple-700 transition cursor-pointer"
                >
                  Add Product
                </button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-200 text-xs font-bold uppercase text-gray-500 tracking-wider">
                      <th className="pb-3 pl-2">Product</th>
                      <th className="pb-3">Category</th>
                      <th className="pb-3">Price</th>
                      <th className="pb-3">Status</th>
                      <th className="pb-3 text-right pr-2">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm">
                    {filteredProducts.map((item) => {
                      const id = item._id || item.id;
                      return (
                        <tr
                          key={id}
                          className="hover:bg-purple-50/30 transition"
                        >
                          <td className="py-3.5 pl-2">
                            <div className="flex items-center gap-3">
                              <img
                                src={item.image}
                                alt={item.name}
                                className="w-12 h-12 rounded-lg object-contain bg-gray-50 border p-1 shrink-0"
                                onError={(e) => {
                                  e.target.src =
                                    "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500";
                                }}
                              />
                              <div>
                                <h4 className="font-semibold text-gray-900 line-clamp-1">
                                  {item.name}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  {item.brand || "Zepto"}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5">
                            <span className="bg-purple-100 text-purple-700 text-xs font-semibold px-2.5 py-1 rounded-md capitalize">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-3.5">
                            <div className="font-bold text-gray-900">
                              ₹{item.price}
                            </div>
                            {item.oldPrice && item.oldPrice > item.price && (
                              <div className="text-xs line-through text-gray-400">
                                ₹{item.oldPrice}
                              </div>
                            )}
                          </td>
                          <td className="py-3.5">
                            <span
                              className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                                item.inStock !== false
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {item.inStock !== false
                                ? "In Stock"
                                : "Out of Stock"}
                            </span>
                          </td>
                          <td className="py-3.5 text-right pr-2">
                            <button
                              onClick={() => handleDelete(id, item.name)}
                              title="Delete Product"
                              className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition cursor-pointer"
                            >
                              <FaTrashAlt />
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
