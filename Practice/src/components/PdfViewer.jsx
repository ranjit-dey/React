import React, { useCallback, useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FileDown, ChevronLeft, ChevronRight, Printer, Moon, ZoomIn, ZoomOut } from "lucide-react"; // optional icon pack

// PDF worker setup
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

/**
 * PdfViewer component
 * - Drop into App.jsx and ensure Tailwind is available.
 */
export default function PdfViewer() {
  const pdfUrl = "/Resume.pdf"; // public folder

  // document/page state
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // zooming: baseScale is applied to the PDF render (causes canvas re-render).
  // cssScale is applied via CSS transform for smooth pinch gestures.
  const [baseScale, setBaseScale] = useState(1); // affects Page scale prop
  const [cssScale, setCssScale] = useState(1); // smooth scaling on top of baseScale from touch
  const [isDark, setIsDark] = useState(false);

  // refs for pinch handling
  const viewerRef = useRef(null);
  const lastTouchDistanceRef = useRef(null);
  const lastTouchCenterRef = useRef(null);
  const lastTapRef = useRef(0);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  // navigation
  const prevPage = () => setPageNumber((p) => Math.max(1, p - 1));
  const nextPage = () => setPageNumber((p) => Math.min(numPages || p, p + 1));

  // zoom buttons update baseScale (re-rendered)
  const zoomIn = () => {
    setBaseScale((s) => Number((s + 0.25).toFixed(2)));
    setCssScale(1);
  };
  const zoomOut = () => {
    setBaseScale((s) => Number(Math.max(0.25, s - 0.25).toFixed(2)));
    setCssScale(1);
  };
  const resetZoom = () => {
    setBaseScale(1);
    setCssScale(1);
  };

  // Print
  const handlePrint = () => {
    window.open(pdfUrl, "_blank")?.print?.();
  };

  // Download
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = pdfUrl.split("/").pop() || "download.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // Double-tap / double-click to reset zoom
  const handleTap = () => {
    const now = Date.now();
    if (now - lastTapRef.current < 300) {
      // double tap
      resetZoom();
    }
    lastTapRef.current = now;
  };

  // Touch helpers: distance between two touches
  const distanceBetweenTouches = (t0, t1) => {
    const dx = t1.clientX - t0.clientX;
    const dy = t1.clientY - t0.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  // Pinch handlers
  const onTouchStart = (e) => {
    if (e.touches && e.touches.length === 2) {
      const d = distanceBetweenTouches(e.touches[0], e.touches[1]);
      lastTouchDistanceRef.current = d;
      // center point (not used for panning here, but could)
      lastTouchCenterRef.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
    }
  };

  const onTouchMove = (e) => {
    if (e.touches && e.touches.length === 2) {
      e.preventDefault(); // prevent page scroll while pinching
      const d = distanceBetweenTouches(e.touches[0], e.touches[1]);
      const last = lastTouchDistanceRef.current || d;
      const delta = d / last; // multiplier
      lastTouchDistanceRef.current = d;

      // update cssScale multiplicatively, clamp between 0.4 and 4
      setCssScale((s) => {
        const next = s * delta;
        return Math.min(4, Math.max(0.4, next));
      });
    }
  };

  const onTouchEnd = (e) => {
    if (!e.touches || e.touches.length < 2) {
      // commit cssScale into baseScale when pinch ends for better canvas resolution
      setBaseScale((b) => {
        // combine base scale and cssScale, clamp
        const combined = Number(Math.min(4, Math.max(0.25, b * cssScale)).toFixed(2));
        return combined;
      });
      setCssScale(1);
      lastTouchDistanceRef.current = null;
      lastTouchCenterRef.current = null;
    }
  };

  // For desktop: handle wheel + ctrl for zoom (optional)
  // If user presses Ctrl/Cmd + wheel - zoom; otherwise page scroll.
  const onWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY;
      if (delta > 0) {
        // zoom out
        setBaseScale((s) => Number(Math.max(0.25, s - 0.1).toFixed(2)));
      } else {
        setBaseScale((s) => Number(Math.min(4, s + 0.1).toFixed(2)));
      }
      setCssScale(1);
    }
  };

  // Keep viewer responsive: prevent text-selection while dragging
  useEffect(() => {
    const v = viewerRef.current;
    if (!v) return;
    v.addEventListener("wheel", onWheel, { passive: false });
    return () => v?.removeEventListener("wheel", onWheel);
  }, []);

  // small helper to display safe page count
  const totalPagesDisplay = numPages ?? "--";

  return (
    <div className={`w-full max-w-4xl mx-auto p-4 sm:p-6 ${isDark ? "bg-slate-900" : "bg-white"} rounded-2xl shadow-lg`}>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
            Resume
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">Preview + controls</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark((s) => !s)}
            title="Toggle background"
            className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition"
          >
            <Moon className="w-4 h-4" />
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-3 py-2 bg-amber-600/80 text-white rounded-lg hover:bg-amber-700 transition"
          >
            <FileDown className="w-4 h-4" />
            <span className="text-sm">Download</span>
          </button>
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={prevPage}
            className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
            disabled={pageNumber <= 1}
            title="Previous page"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="px-3 py-2 rounded-lg bg-gray-50 border">
            <span className="text-sm">{pageNumber}</span>
            <span className="text-sm text-gray-400"> / {totalPagesDisplay}</span>
          </div>

          <button
            onClick={nextPage}
            disabled={numPages ? pageNumber >= numPages : false}
            className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition disabled:opacity-50"
            title="Next page"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button onClick={zoomOut} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <ZoomOut className="w-4 h-4" />
          </button>

          <button onClick={resetZoom} className="px-3 py-2 rounded-lg bg-gray-50 border">
            Reset
          </button>

          <button onClick={zoomIn} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200">
            <ZoomIn className="w-4 h-4" />
          </button>

          <button onClick={handlePrint} className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200" title="Open in new tab to print">
            <Printer className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Viewer */}
      <div
        ref={viewerRef}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onDoubleClick={resetZoom}
        onClick={handleTap}
        className={`w-full h-[70vh] sm:h-[600px] rounded-xl overflow-auto border ${isDark ? "border-slate-700 bg-slate-800/40" : "border-gray-200 bg-white"} p-3`}
      >
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="relative transform-gpu"
            style={{
              transform: `scale(${cssScale})`,
              transformOrigin: "center center",
              transition: cssScale === 1 ? "transform 120ms ease-out" : "transform 0s", // smooth when reset
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div style={{ maxWidth: "100%", width: "100%" }}>
              <object file={pdfUrl} loading={<div className="p-6 text-center">Loading PDF…</div>}>

              </object>
            </div>
          </div>
        </div>
      </div>

      {/* Footer (mobile friendly) */}
      <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
        <div>Tip: use two-finger pinch to zoom on mobile. Double-tap resets zoom.</div>
        <div>{numPages ? `${numPages} page${numPages>1 ? "s":""}` : ""}</div>
      </div>
    </div>
  );
}
