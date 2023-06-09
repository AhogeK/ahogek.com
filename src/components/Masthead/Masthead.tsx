import React, { useEffect, useState } from 'react'
import Hls from 'hls.js'
import { FiVolume2, FiVolumeX } from 'react-icons/fi'

const Masthead: React.FC = () => {

  const [muted, setMuted] = useState(true)
  const [hovered, setHovered] = useState(false)
  const [showControls, setShowControls] = useState(false)
  const [timer, setTimer] = useState<number | undefined>(undefined)

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)

  useEffect(() => {
    const video = document
      .getElementById('video') as HTMLVideoElement
    if (video) {
      video.volume = 0.5
      if (Hls.isSupported()) {
        const hls = new Hls()
        hls.loadSource(
          'https://ahogek.com/uploads/rtmp/one-more-time/one-more-time.m3u8'
        )
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch((e) => {
            console.error('视频播放失败', e)
          })
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src =
          'https://ahogek.com/uploads/rtmp/one-more-time/one-more-time.m3u8'
        video.addEventListener('loadedmetadata', () => {
          video.play().catch((e) => {
            console.error('视频播放失败', e)
          })
        })
      }
    }

    if (isMobile) {
      setShowControls(true)
      setTimer(setTimeout(() => {
        setShowControls(false)
      }, 3000))
    }
  }, [isMobile])

  const handleVideoClick = () => {
    if (isMobile) setShowControls(!showControls)
    if (!showControls) {
      if (timer != undefined) clearTimeout(timer)
      setTimer(setTimeout(() => {
        setShowControls(false)
      }, 3000))
    }
    if (showControls && timer != undefined) {
      clearTimeout(timer)
      setTimer(undefined)
    }
  }

  const handleVolumeClick = (event: React.MouseEvent) => {
    if (!isMobile || showControls) {
      event.stopPropagation()

      const video = document
        .getElementById('video') as HTMLVideoElement
      if (video) {
        video.muted = !video.muted
        setMuted(video.muted)
      }

      // 重置timer
      if (timer != undefined) clearTimeout(timer)
      setTimer(setTimeout(() => {
        setShowControls(false)
      }, 3000))
    }
  }

  return (
    <section
      className='relative mb-6 h-80 flex justify-center items-center'
      onMouseEnter={() => !isMobile && setHovered(true)}
      onMouseLeave={() => !isMobile && setHovered(false)}
      onClick={() => isMobile && handleVideoClick()}
    >
      <div className='absolute w-full h-full overflow-hidden'>
        <div className='uppercase text-sm mb-4'>
          <video
            id='video'
            className='absolute h-auto left-1/2 top-1/2 min-w-full min-h-full
            object-cover -translate-x-1/2 -translate-y-1/2 opacity-30'
            autoPlay
            loop
            muted={muted}
            playsInline
            preload='auto'
          />
        </div>
      </div>
      <div className='z-10 text-center px-8 drop-shadow-lg shadow-black'>
        <div className='uppercase text-sm mb-4'>Welcome to</div>
        <div className='text-4xl font-mplus font-medium'>
          AhogeK 的 <span className='text-orange-500'>个人博客</span>
        </div>
      </div>
      <div
        className={`absolute bottom-4 right-4 z-30 cursor-pointer text-2xl 
            transition-opacity duration-500 
            ${hovered || showControls ? 'opacity-100' : 'opacity-0'}`}
        onClick={(event) => handleVolumeClick(event)}>
        {muted ? <FiVolumeX /> : <FiVolume2 />}
      </div>
    </section>
  )
}

export default Masthead