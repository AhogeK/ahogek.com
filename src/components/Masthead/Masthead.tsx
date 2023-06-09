import React, { useEffect } from 'react'
import Hls from 'hls.js'

const Masthead: React.FC = () => {

  useEffect(() => {
    const video = document
      .getElementById('video') as HTMLVideoElement
    if (video) {
      if (Hls.isSupported()) {

        const hls = new Hls()
        hls.loadSource(
          'https://ahogek.com/uploads/rtmp/one-more-time/one-more-time.m3u8'
        )
        hls.attachMedia(video)
        hls.on(Hls.Events.MANIFEST_PARSED, () => {
          video.play().catch(() => {
            console.error('视频播放失败')
          })
        })
      } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src =
          'https://ahogek.com/uploads/rtmp/one-more-time/one-more-time.m3u8'
        video.addEventListener('loadedmetadata', () => {
          video.play().catch(() => {
            console.error('视频播放失败')
          })
        })
      }
    }
  }, [])


  return (
    <section className='relative mb-6 h-80 flex justify-center items-center'>
      <div className='absolute w-full h-full overflow-hidden'>
        <div className='uppercase text-sm mb-4'>
          <video
            id='video'
            className='absolute h-auto left-1/2 top-1/2 min-w-full min-h-full
            object-cover -translate-x-1/2 -translate-y-1/2 opacity-30'
            autoPlay
            loop
            muted
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
    </section>
  )
}

export default Masthead