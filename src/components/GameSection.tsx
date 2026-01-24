"use client"

import { useState, useRef } from "react"
import { Play, X } from "lucide-react"

export default function GameSection() {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null)
  const [hoveredColIndex, setHoveredColIndex] = useState<number | null>(null)
  const [activeVideo, setActiveVideo] = useState<{ videoId: string; isVertical: boolean; colIndex: number } | null>(null)
  const sectionRef = useRef<HTMLDivElement>(null)

  // YouTube Dikey Video ID'leri (Shorts - 9:16) - 23 adet
  const verticalVideoIds = [
    "vkOaYVkotkk",
    "n0Fng3sZUsQ",
    "F4NsgDELAZA",
    "tgBvGQuylPg",
    "VXQYDvmZoSk",
    "tvHzFqfIBuE",
    "n-WCTn60q10",
    "KYDxWSuo1QE",
    "fzFwC0vCylU",
    "udkfmtK0SG4",
    "jWt-y4ZFgKg",
    "8IQXAtkZSSw",
    "l9SAJheV-xI",
    "qKKWwHd5Wvg",
    "qDKpwK2CiBM",
    "WNdQAQ_TPjY",
    "sMtee3Zq2ig",
    "tOyXaYiSj48",
    "n9TeQM0C0HU",
    "m68elyDUGTA",
    "tvyjY28y9Sc",
    "7jg1jA6TPn4",
    "6gXgja25MP4",
  ]

  // YouTube Yatay Video ID'leri (16:9) - 10 adet
  const horizontalVideoIds = [
    "bj16XDvjKdY",
    "bBPHhrb3WaI",
    "F-67Bcw1L6I",
    "ynN2N7DVyt0",
    "NegQ6BbVY60",
    "tqfi5nYao2g",
    "owO9MjrbFFY",
    "7HkSsBCokCQ",
    "052KSTrxjh8",
    "sIq3gUXW-h0",
  ]

  // YouTube Thumbnail URL
  const getThumbnailUrl = (videoId: string) => {
    // hqdefault her video için mevcut, maxresdefault sadece HD videolarda var
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
  }

  // YouTube Embed URL
  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0&loop=1&playlist=${videoId}&controls=1&modestbranding=1&rel=0&showinfo=0&vq=hd1080&hd=1`
  }

  // Desktop: 7 sütun yapısı - her sütunda daha fazla video
  const desktopColumns = [
    { direction: "up", videoIds: [0, 1, 2, 3, 4, 5], isVertical: true, width: "flex-1" },
    { direction: "down", videoIds: [0, 1, 2, 3, 4], isVertical: false, width: "flex-[2]" },
    { direction: "up", videoIds: [6, 7, 8, 9, 10, 11], isVertical: true, width: "flex-1" },
    { direction: "down", videoIds: [5, 6, 7, 8, 9], isVertical: false, width: "flex-[2]" },
    { direction: "up", videoIds: [12, 13, 14, 15, 16, 17], isVertical: true, width: "flex-1" },
    { direction: "down", videoIds: [0, 2, 4, 6, 8], isVertical: false, width: "flex-[2]" },
    { direction: "up", videoIds: [18, 19, 20, 21, 22, 0], isVertical: true, width: "flex-1" },
  ]

  // Mobil: 3 sütun - Dikey-Yatay-Dikey
  const mobileColumns = [
    { videoIds: [0, 1, 2, 3, 4, 5, 6, 7], isVertical: true, direction: "down" },
    { videoIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], isVertical: false, direction: "up" },
    { videoIds: [8, 9, 10, 11, 12, 13, 14, 15], isVertical: true, direction: "down" },
  ]

  const getVideoIdFromIndex = (index: number, isVertical: boolean) => {
    if (isVertical) {
      return verticalVideoIds[index % verticalVideoIds.length]
    }
    return horizontalVideoIds[index % horizontalVideoIds.length]
  }

  const handleMouseEnter = (key: string, colIndex: number) => {
    setHoveredIndex(key)
    setHoveredColIndex(colIndex)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setHoveredColIndex(null)
  }

  const handleVideoClick = (videoId: string, isVertical: boolean, colIndex: number, e: React.MouseEvent) => {
    e.stopPropagation()
    setActiveVideo({ videoId, isVertical, colIndex })
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveVideo(null)
    }
  }

  const handleCloseClick = () => {
    setActiveVideo(null)
  }

  const handleSectionClick = () => {
    if (activeVideo) {
      setActiveVideo(null)
    }
  }

  // Sütun animasyonu: hover veya aktif video varsa durdur
  const shouldPauseColumn = (colIndex: number) => {
    if (activeVideo && activeVideo.colIndex === colIndex) return true
    if (hoveredColIndex === colIndex) return true
    return false
  }

  // Video kartı render fonksiyonu
  const renderVideoCard = (
    videoId: string,
    isVertical: boolean,
    colIndex: number,
    idx: number,
    isMobile: boolean = false
  ) => {
    const thumbnailUrl = getThumbnailUrl(videoId)
    const key = `${isMobile ? 'mobile' : 'desktop'}-${colIndex}-${idx}-${videoId}`
    const isHovered = hoveredIndex === key
    const aspectClass = isVertical ? "aspect-[9/16]" : "aspect-[16/9]"

    return (
      <div
        key={key}
        className={`relative w-full ${aspectClass} rounded-xl overflow-hidden bg-gray-800 cursor-pointer flex-shrink-0 transition-all duration-300 ease-out group`}
        onMouseEnter={() => handleMouseEnter(key, colIndex)}
        onMouseLeave={handleMouseLeave}
        onClick={(e) => handleVideoClick(videoId, isVertical, colIndex, e)}
      >
        {/* Thumbnail Image */}
        <img
          src={thumbnailUrl}
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`
          }}
        />
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none" />

        {/* Play Button - Only visible on hover */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`${isMobile ? 'w-10 h-10' : 'w-12 h-12 md:w-16 md:h-16'} rounded-full bg-[#8D6EEA]/35 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:bg-[#8D6EEA]/50`}>
            <Play className={`${isMobile ? 'w-4 h-4' : 'w-5 h-5 md:w-7 md:h-7'} text-white fill-white ml-0.5`} />
          </div>
        </div>
      </div>
    )
  }

  // Videoları 3 kez tekrarla (seamless loop için)
  const tripleVideos = (videoIndexes: number[], isVertical: boolean) => {
    const videos = videoIndexes.map(idx => getVideoIdFromIndex(idx, isVertical))
    return [...videos, ...videos, ...videos]
  }

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-6 md:py-8 bg-gray-900 overflow-hidden scroll-mt-24"
      onClick={handleSectionClick}
    >
      {/* MOBILE LAYOUT - 3 sütun: Dikey-Yatay-Dikey */}
      <div className="md:hidden relative h-[320px]">
        <div className="flex gap-2 h-full px-3">
          {mobileColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`${column.isVertical ? 'flex-1' : 'flex-[1.5]'} overflow-hidden relative`}
            >
              <div
                className="flex flex-col gap-2"
                style={{
                  animation: `${column.direction === "up" ? "mobileScrollUp" : "mobileScrollDown"} ${25 + colIndex * 8}s linear infinite`,
                  animationPlayState: shouldPauseColumn(colIndex) ? "paused" : "running",
                }}
              >
                {tripleVideos(column.videoIds, column.isVertical).map((videoId, idx) =>
                  renderVideoCard(videoId, column.isVertical, colIndex, idx, true)
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* DESKTOP LAYOUT - 7 sütun */}
      <div className="hidden md:block relative h-[650px]">
        <div className="flex gap-3 h-full px-4">
          {desktopColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className={`${column.width} overflow-hidden relative`}
            >
              <div
                className="flex flex-col gap-3"
                style={{
                  animation: `${column.direction === "up" ? "scrollUp" : "scrollDown"} ${22 + colIndex * 4}s linear infinite`,
                  animationPlayState: shouldPauseColumn(colIndex) ? "paused" : "running",
                }}
              >
                {tripleVideos(column.videoIds, column.isVertical).map((videoId, idx) =>
                  renderVideoCard(videoId, column.isVertical, colIndex, idx, false)
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-10" />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10" />
      </div>

      {/* YouTube Video Overlay */}
      {activeVideo && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/90"
          onClick={handleOverlayClick}
        >
          {/* Close Button */}
          <button
            onClick={handleCloseClick}
            className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className={`rounded-2xl overflow-hidden shadow-2xl shadow-violet-500/50 ring-4 ring-violet-500 transition-all duration-300 ease-out ${
              activeVideo.isVertical
                ? "h-[80%] md:h-[85%] aspect-[9/16]"
                : "w-[90%] md:w-[70%] aspect-[16/9]"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={getEmbedUrl(activeVideo.videoId)}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      )}

      {/* CSS Animations - 33.33% for triple videos */}
      <style jsx>{`
        @keyframes scrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
        @keyframes scrollDown {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes mobileScrollDown {
          0% {
            transform: translateY(-33.333%);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes mobileScrollUp {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-33.333%);
          }
        }
      `}</style>
    </section>
  )
}
