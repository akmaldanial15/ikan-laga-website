"use client";

import React, { useState, useEffect } from "react";
import styles from "./admin.module.css";
import { mockBettas, BettaFish } from "../../mock/mockData";

export default function AdminDashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState("products"); // 'products' | 'articles'
  const [products, setProducts] = useState<BettaFish[]>([]);
  const [successMessage, setSuccessMessage] = useState("");

  // Product Form State
  const [newFish, setNewFish] = useState({
    name: "",
    scientificName: "",
    origin: "",
    description: "",
    fullStory: "",
    price: "",
    rarity: "Common",
    inStock: "true",
  });

  useEffect(() => {
    // Load initial mock products
    setProducts(mockBettas);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === "admin" && password === "wildbetta123") {
      setIsLoggedIn(true);
      setLoginError("");
    } else {
      setLoginError("Nama pengguna atau kata laluan salah.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newFish.name || !newFish.price) {
      alert("Sila isi Nama dan Harga produk.");
      return;
    }

    const createdFish: BettaFish = {
      id: `betta-${newFish.name.toLowerCase().replace(/\s+/g, "-")}`,
      name: newFish.name,
      scientificName: newFish.scientificName || "Sp. Wild",
      origin: newFish.origin || "Malaysia",
      description: newFish.description,
      fullStory: newFish.fullStory || newFish.description,
      image: "/images/betta_imbellis.png", // Fallback thumbnail
      price: parseFloat(newFish.price),
      inStock: newFish.inStock === "true",
      orderable: newFish.inStock === "true",
      rarity: newFish.rarity as "Common" | "Rare" | "Extremely Rare",
    };

    setProducts([createdFish, ...products]);
    setSuccessMessage(`Berjaya menambah produk "${newFish.name}"!`);
    
    // Clear Form
    setNewFish({
      name: "",
      scientificName: "",
      origin: "",
      description: "",
      fullStory: "",
      price: "",
      rarity: "Common",
      inStock: "true",
    });

    // Clear alert after 3 seconds
    setTimeout(() => {
      setSuccessMessage("");
    }, 4000);
  };

  const handleDeleteProduct = (id: string, name: string) => {
    if (confirm(`Adakah anda pasti mahu memadam produk "${name}"?`)) {
      setProducts(products.filter((p) => p.id !== id));
      setSuccessMessage(`Berjaya memadam produk "${name}"!`);
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className={styles.container}>
        <div className={styles.loginWrapper}>
          <div className={styles.card}>
            <div className={styles.cardHeader}>
              <span className="text-3xl">🛡️</span>
              <h2 className={styles.cardTitle}>Admin Login</h2>
              <p className={styles.cardSubtitle}>Wild Betta Malaysia Dashboard</p>
            </div>
            
            <form onSubmit={handleLogin}>
              <div className={styles.inputGroup}>
                <label className={styles.label}>Nama Pengguna</label>
                <input
                  type="text"
                  className={styles.input}
                  placeholder="Masukkan username (e.g. admin)"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>

              <div className={styles.inputGroup}>
                <label className={styles.label}>Kata Laluan</label>
                <input
                  type="password"
                  className={styles.input}
                  placeholder="Masukkan password (e.g. wildbetta123)"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {loginError && <p className={styles.error}>{loginError}</p>}

              <button type="submit" className={styles.button}>
                Log Masuk
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.dashboardWrapper}>
        
        {/* Dashboard Header */}
        <div className={styles.dashboardHeader}>
          <div>
            <h1 className={styles.dashboardTitle}>Dashboard Admin</h1>
            <p className="text-xs text-zinc-400">Uruskan senarai produk ikan laga dan artikel secara dinamik</p>
          </div>
          <button onClick={handleLogout} className={styles.logoutBtn}>
            Log Keluar 🚪
          </button>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className={styles.successMsg}>
            ✨ {successMessage}
          </div>
        )}

        {/* Tab Navigation */}
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${activeTab === "products" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("products")}
          >
            🐠 Urus Ikan / Produk
          </button>
          <button
            className={`${styles.tab} ${activeTab === "articles" ? styles.tabActive : ""}`}
            onClick={() => setActiveTab("articles")}
          >
            📝 Urus Artikel / Panduan
          </button>
        </div>

        {/* Tab Content: Products */}
        {activeTab === "products" && (
          <div className={styles.grid}>
            
            {/* List Section */}
            <div className={styles.panelCard}>
              <h2 className={styles.panelTitle}>
                <span>Senarai Ikan Liar ({products.length})</span>
                <span className="text-xs text-zinc-400 font-normal">Tarik data dari database</span>
              </h2>

              <div className={styles.itemList}>
                {products.map((item) => (
                  <div key={item.id} className={styles.itemRow}>
                    <div className={styles.itemInfo}>
                      <div className={styles.itemImageMock}>🐟</div>
                      <div>
                        <h4 className={styles.itemName}>{item.name}</h4>
                        <p className={styles.itemCategory}>
                          {item.scientificName} • <span className="text-cyan-400">{item.rarity}</span>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className={styles.itemPrice}>RM {item.price.toFixed(2)}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${item.inStock ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"}`}>
                        {item.inStock ? "Ada Stok" : "Tiada Stok"}
                      </span>
                      <div className={styles.itemActions}>
                        <button
                          onClick={() => handleDeleteProduct(item.id, item.name)}
                          className={`${styles.actionBtn} ${styles.actionBtnDelete}`}
                          title="Padam"
                        >
                          🗑️
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form Section */}
            <div className={styles.panelCard}>
              <h2 className={styles.panelTitle}>Tambah Ikan Baharu</h2>
              
              <form onSubmit={handleAddProduct} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label className={styles.label}>Nama Ikan</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Betta Imbellis (Blue Gold)"
                    value={newFish.name}
                    onChange={(e) => setNewFish({ ...newFish, name: e.target.value })}
                    required
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Nama Saintifik</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Betta imbellis"
                    value={newFish.scientificName}
                    onChange={(e) => setNewFish({ ...newFish, scientificName: e.target.value })}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Lokasi Asal</label>
                  <input
                    type="text"
                    className={styles.input}
                    placeholder="e.g. Perak, Malaysia"
                    value={newFish.origin}
                    onChange={(e) => setNewFish({ ...newFish, origin: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Harga (RM)</label>
                    <input
                      type="number"
                      step="0.01"
                      className={styles.input}
                      placeholder="e.g. 65.00"
                      value={newFish.price}
                      onChange={(e) => setNewFish({ ...newFish, price: e.target.value })}
                      required
                    />
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Tahap Kelangkaan (Rarity)</label>
                    <select
                      className={styles.select}
                      value={newFish.rarity}
                      onChange={(e) => setNewFish({ ...newFish, rarity: e.target.value })}
                    >
                      <option value="Common">Common</option>
                      <option value="Rare">Rare</option>
                      <option value="Extremely Rare">Extremely Rare</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Status Stok</label>
                    <select
                      className={styles.select}
                      value={newFish.inStock}
                      onChange={(e) => setNewFish({ ...newFish, inStock: e.target.value })}
                    >
                      <option value="true">Ada Stok</option>
                      <option value="false">Habis Stok</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label className={styles.label}>Gambar (Mockup)</label>
                    <input
                      type="text"
                      className={styles.input}
                      value="betta_imbellis.png (Auto)"
                      disabled
                    />
                  </div>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.label}>Penerangan Ringkas</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Masukkan deskripsi ringkas tentang ikan..."
                    value={newFish.description}
                    onChange={(e) => setNewFish({ ...newFish, description: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className={styles.button}>
                  Simpan Produk 🐠
                </button>
              </form>
            </div>

          </div>
        )}

        {/* Tab Content: Articles */}
        {activeTab === "articles" && (
          <div className={styles.panelCard}>
            <h2 className={styles.panelTitle}>Pengurusan Artikel & Panduan</h2>
            <div className="text-center py-12 text-zinc-400 bg-black/20 rounded-xl border border-dashed border-zinc-800 space-y-2">
              <span className="text-4xl">📝</span>
              <h3 className="font-bold text-white text-base">Modul Urus Artikel</h3>
              <p className="text-xs max-w-sm mx-auto leading-relaxed">
                Ruangan ini membolehkan Maman menambah artikel / panduan pemeliharaan secara dinamik apabila database siap dipasang kelak.
              </p>
              <div className="pt-4">
                <button disabled className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-600 font-bold text-xs cursor-not-allowed">
                  + Tambah Artikel Baru (Mockup)
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
