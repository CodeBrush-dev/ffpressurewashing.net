// Single-file SEO snippet (CONFIG + META_DATA + LD_DATA + runtime)

(function () {
  "use strict";


  const CONFIG = {
    baseUrlFallback: "https://www.ffpressurewashing.net",
    googleSiteVerification: ""
  };

  // === DATA (from your previous meta-tags.js) ===
  const META_DATA = {"meta_tags_list":[{"page_url":"https://www.ffpressurewashing.net/","title_tag":"Pressure Washing Greenville SC | Founding Fathers Pressure Washing","meta_description":"Licensed exterior cleaners in Greenville, SC offering professional pressure washing, soft washing, roof, gutter, house and concrete cleaning. Free estimates."}],"keywords":["Pressure Washing Greenville","Soft Washing Greenville","Exterior Cleaning Greenville","Concrete Cleaning Greenville","Gutter Cleaning Greenville","House Washing Greenville","Roof Cleaning Greenville","Professional Pressure Washing","Founding Fathers Pressure Washing","Licensed Exterior Cleaners Greenville"]};

  // === DATA (from your previous LD.js) ===
  const LD_DATA = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.ffpressurewashing.net/#localbusiness",
  "name": "Founding Fathers Pressure Washing LLC",
  "url": "https://www.ffpressurewashing.net/",
  "image": [
    "https://static.wixstatic.com/media/072f57_dec4ad7564eb4fe6afa07ade45e30f67%7Emv2.jpeg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/072f57_dec4ad7564eb4fe6afa07ade45e30f67%7Emv2.jpeg",
    "https://static.wixstatic.com/media/072f57_825be0cc71c140a7bd0307751e82d8af~mv2.jpg/v1/fill/w_496,h_351,q_90,enc_avif,quality_auto/072f57_825be0cc71c140a7bd0307751e82d8af~mv2.jpg",
    "https://static.wixstatic.com/media/072f57_cf1554bdac1c4d639e471766707fb2bb~mv2.jpg/v1/fill/w_496,h_351,q_90,enc_avif,quality_auto/072f57_cf1554bdac1c4d639e471766707fb2bb~mv2.jpg",
    "https://static.wixstatic.com/media/53a3ab_1dad92f2ec3d4d6481e42e4d180fb420~mv2.jpg/v1/crop/x_540,y_113,w_813,h_960/fill/w_382,h_452,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/FFPW_01jpg.jpg",
    "https://static.wixstatic.com/media/53a3ab_e6f327fae1f042f58021a5f9c32c9506~mv2.jpg/v1/crop/x_21,y_0,w_1062,h_736/fill/w_327,h_226,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/v9hHzsdL0i.jpg"
  ],
  "logo": "https://static.wixstatic.com/media/072f57_dec4ad7564eb4fe6afa07ade45e30f67%7Emv2.jpeg/v1/fill/w_192%2Ch_192%2Clg_1%2Cusm_0.66_1.00_0.01/072f57_dec4ad7564eb4fe6afa07ade45e30f67%7Emv2.jpeg",
  "description": "Founding Fathers Pressure Washing LLC provides licensed and insured exterior cleaning and soft washing services in Greenville, SC, including houses, concrete, roofs, gutters, fences, dumpsters, decks, exterior windows, and free drone aerial inspections.",
  "telephone": "+1-864-364-7723",
  "email": "Foundingfathers1776ms@gmail.com",
  "areaServed": {
    "@type": "City",
    "name": "Greenville"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Greenville",
    "addressRegion": "SC",
    "addressCountry": "US"
  },
  "sameAs": [],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Exterior Cleaning Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Pressure and Soft Washing",
          "description": "Professional pressure and soft washing for residential and commercial exteriors in Greenville, SC."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "House and Building Washing",
          "description": "Exterior cleaning for homes and buildings, restoring surfaces to their original appearance."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Concrete Cleaning",
          "description": "Cleaning of concrete surfaces such as driveways, walkways, and patios."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof and Gutter Cleaning",
          "description": "Soft washing and cleaning of roofs and gutters, including removal of debris and buildup."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Deck and Fence Cleaning",
          "description": "Exterior cleaning and washing of decks and fencing."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Dumpster and Garbage Can Cleaning",
          "description": "Pressure washing and cleaning of dumpsters and garbage cans."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Exterior Window Cleaning",
          "description": "Cleaning of exterior windows as part of exterior maintenance services."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Drone Aerial Inspections",
          "description": "Free drone aerial inspections for exterior property evaluation."
        }
      }
    ]
  },
  "founder": {
    "@type": "Person",
    "name": "Founding Fathers Pressure Washing LLC"
  },
  "isAccessibleForFree": false,
  "slogan": "Servicing all of your exterior cleaning needs in Greenville, SC.",
  "paymentAccepted": "Contact for details",
  "priceRange": "Contact for quote",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-864-364-7723",
    "contactType": "customer service",
    "areaServed": "US",
    "availableLanguage": "en"
  },
  "potentialAction": [
    {
      "@type": "ContactAction",
      "name": "Call for quote",
      "target": "tel:+1-864-364-7723"
    },
    {
      "@type": "CommunicateAction",
      "name": "Email for complimentary estimate",
      "target": "mailto:Foundingfathers1776ms@gmail.com"
    }
  ]
};

  /* ===== Helpers ===== */
  function clamp(str, max) {
    if (typeof str !== "string") str = String(str ?? "");
    return str.length <= max ? str : str.slice(0, Math.max(0, max - 1)) + "…";
  }

  function stripTrailingSlash(p) {
    if (!p) return "/";
    return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  }

  function normalizePathFromUrl(url) {
    try {
      const u = new URL(url);
      return stripTrailingSlash(u.pathname || "/");
    } catch {
      const m = String(url || "").match(/^https?:\/\/[^/]+(\/[^?#]*)?/i);
      return stripTrailingSlash((m && m[1]) || "/");
    }
  }

  function removeLangPrefix(pathname) {
    const m = String(pathname || "/").match(
      /^\/([a-z]{2}(?:-[A-Z]{2})?)(?=\/|$)(.*)$/
    );
    if (!m) return pathname || "/";
    const rest = stripTrailingSlash(m[2] || "/");
    return rest || "/";
  }

  function currentPagePath() {
    const path = window.location.pathname || "/";
    return stripTrailingSlash(path || "/");
  }

  function currentKeyCandidates() {
    const path = currentPagePath();
    const origin = (window.location.origin || "").replace(/\/$/, "");
    const full = origin + path;

    if (path === "/") {
      return [full, "/"];
    }

    const noLang = removeLangPrefix(path);
    return [full, path, stripTrailingSlash(path), noLang, stripTrailingSlash(noLang)];
  }

  function buildIndex(metaJson) {
    const list = (metaJson && metaJson.meta_tags_list) || [];
    const index = {};
    for (const item of list) {
      const path = normalizePathFromUrl(item.page_url);
      let origin = "";
      try {
        origin = new URL(item.page_url).origin;
      } catch {
        origin = "";
      }
      const full = origin ? origin.replace(/\/$/, "") + path : "";

      const entry = {
        title: item.title_tag || "",
        description: item.meta_description || "",
      };

      index[path] = entry;
      index[stripTrailingSlash(path)] = entry;
      if (full) index[full] = entry;
    }
    return index;
  }

  function _stripQuotes(s) {
    return String(s ?? "")
      .replace(/["'“”‘’„«»]/g, "")
      .replace(/\s+/g, " ")
      .replace(/^[\s\-–—·,;:]+|[\s\-–—·,;:]+$/g, "")
      .trim();
  }

  function normalizeKeywordsList(input, opts) {
    const { maxKeywords = 20 } = opts || {};
    if (input == null) return [];
    let items = Array.isArray(input)
      ? input.slice()
      : typeof input === "string"
      ? input.split(",")
      : [];
    const seen = new Set();
    return items
      .map(_stripQuotes)
      .filter((s) => s && s.length >= 2)
      .filter((s) => {
        const k = s.toLowerCase();
        if (seen.has(k)) return false;
        seen.add(k);
        return true;
      })
      .slice(0, maxKeywords);
  }

  function normalizeKeywords(input, opts) {
    const { maxKeywords = 20, maxLength = 280 } = opts || {};
    const list = normalizeKeywordsList(input, { maxKeywords });
    const content = list.join(", ");
    return content.length > maxLength ? content.slice(0, maxLength) : content;
  }

  function applyAltFallbacks(keywordsPool) {
    if (!Array.isArray(keywordsPool) || keywordsPool.length === 0) return;
    try {
      const images = Array.from(document.querySelectorAll("img"));
      let i = 0;
      images.forEach((img) => {
        const curAlt = (img.getAttribute("alt") || "").trim().toLowerCase();
        const shouldReplace =
          !curAlt ||
          curAlt.endsWith(".jpg") ||
          curAlt.endsWith(".png") ||
          curAlt === "image" ||
          curAlt === "img";
        if (shouldReplace) {
          img.setAttribute("alt", keywordsPool[i % keywordsPool.length]);
          i++;
        }
      });
    } catch {
      /* ignore */
    }
  }

  function optimizeImages() {
    try {
      const images = Array.from(document.querySelectorAll("img"));
      if ("IntersectionObserver" in window) {
        const io = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const img = entry.target;
              io.unobserve(img);
              // hook for tracking / lazy work if needed
            }
          });
        });
        images.forEach((img, index) => {
          if (index > 0) io.observe(img);
        });
      }
    } catch (err) {
      console.error("Image optimization error:", err);
    }
  }

  function upsertMeta(nameOrProperty, content, useProperty) {
    const selector = useProperty
      ? `meta[property="${nameOrProperty}"]`
      : `meta[name="${nameOrProperty}"]`;
    let el = document.head.querySelector(selector);
    if (!el) {
      el = document.createElement("meta");
      if (useProperty) el.setAttribute("property", nameOrProperty);
      else el.setAttribute("name", nameOrProperty);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    let link = document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = document.createElement("link");
      link.setAttribute("rel", rel);
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }

  function injectJsonLd(ldObject) {
    if (!ldObject) return;
    try {
      const existing = Array.from(
        document.head.querySelectorAll('script[type="application/ld+json"]')
      );
      existing.forEach((el) => {
        el.parentNode.removeChild(el);
      });

      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(ldObject);
      document.head.appendChild(script);
    } catch (err) {
      console.error("Error injecting JSON-LD:", err);
    }
  }

  function applyJsonLd() {
    injectJsonLd(LD_DATA);
  }

  function applySeoFromJson() {
    try {
      const metaJson = META_DATA;
      const index = buildIndex(metaJson);

      const path = currentPagePath();
      const isHome = path === "/";

      const fallbackBase =
        (CONFIG && CONFIG.baseUrlFallback) ? CONFIG.baseUrlFallback : "";
      const baseUrl = (window.location.origin || fallbackBase).replace(/\/$/, "");
      const canonicalUrl = baseUrl + path;

      const keys = currentKeyCandidates();
      let entry = null;
      for (const k of keys) {
        if (index[k]) {
          entry = index[k];
          break;
        }
      }

      if (!entry) {
        return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
      }

      const title = clamp(entry.title, 60);
      const desc = clamp(entry.description, 185);

      document.title = title;

      const metaList = [
        { type: "name", key: "description", content: desc },
        { type: "property", key: "og:url", content: canonicalUrl },
        { type: "name", key: "resource-hints", content: "preload" },
        { type: "name", key: "format-detection", content: "telephone=yes" },
        { type: "name", key: "mobile-web-app-capable", content: "yes" },
        { type: "name", key: "apple-mobile-web-app-capable", content: "yes" },
      ];

      // opcjonalnie dodaj google-site-verification, jeśli jest w CONFIG
      if (CONFIG && CONFIG.googleSiteVerification) {
        metaList.push({
          type: "name",
          key: "google-site-verification",
          content: CONFIG.googleSiteVerification
        });
      }

      if (isHome && metaJson && metaJson.keywords) {
        const kwContent = normalizeKeywords(metaJson.keywords, {
          maxKeywords: 25,
          maxLength: 512,
        });
        if (kwContent) {
          metaList.push({ type: "name", key: "keywords", content: kwContent });
        }
      }

      metaList.forEach((m) => {
        upsertMeta(m.key, m.content, m.type === "property");
      });

      upsertLink("canonical", canonicalUrl);

      return normalizeKeywordsList(metaJson.keywords, { maxKeywords: 25 });
    } catch (err) {
      console.error("Error meta settings:", err);
      return [];
    }
  }

  function initSnippetSEO() {
    const keywordsPool = applySeoFromJson();
    const path = currentPagePath();
    if (path === "/") {
      applyJsonLd();
    }
    optimizeImages();
    applyAltFallbacks(keywordsPool);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initSnippetSEO);
  } else {
    initSnippetSEO();
  }
})();
