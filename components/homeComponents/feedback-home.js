'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const FeedbackCloudContent = ({
    index,
    activeIndex,
    artist,
    comment,
    spotify,
    makro,
  }) => {
    return (
      <div
        className={
          "transition duration-300 top-0 " +
          (index !== activeIndex ? "opacity-0 h-0" : "")
        }
      >
        <div className="flex items-center mb-4">
          <h5 className="text-lg font-bold">{artist}</h5>
        </div>
        <p className='font-normal'>{comment}</p>
      </div>
    )
  }
  
  const FeedbackArtistCard = ({ name, img, title }) => {
    return (
      <div className="md:block hidden relative">
        <div className="flex items-center">
          <Image
            className="rounded-full cursor-pointer"
            height={56}
            width={56}
            src={img}
            alt={name}
          />
          <div className="text-black ml-2 artist-title">
            <h5 className="font-bold">{name}</h5>
            <p className='font-normal'>{title}</p>
          </div>
        </div>
      </div>
    )
  }
  
export const FeedbackHome = () => {
    const cardDeckRef = useRef(null)
    const cloudRef = useRef(null)
    const cloudArrowRef = useRef(null)
    const [activeIndex, setActiveIndex] = useState(0)
  
    const comments = [
      { artist: "artist0Name", img: '/images/eylul.jpg', comment: "artist0Fb" },
      { artist: "artist1Name", img: '/images/xir.jpg', comment: "artist1Fb" },
      { artist: "artist2Name", img: '/images/ravend.jpg', comment: "artist2Fb" },
      { artist: "artist3Name", img: '/images/erdeniz.jpg', comment: "artist3Fb" },
      { artist: "artist4Name", img: '/images/eric.jpg', comment: "artist4Fb" },
    ]
  
    useEffect(() => {
      const interval = setInterval(() => {
        if (activeIndex === comments.length - 1) {
          setActiveIndex(0)
        } else {
          setActiveIndex(activeIndex + 1)
        }
      }, 6000)
  
      return () => clearInterval(interval)
    })
  
    return (
      <div className="sm:px-6">
        <h3 className="font-bold text-2xl sm:text-5xl text-white mb-6">
          {"feedbackHomeTitle"}
        </h3>
        <div className="relative">
          <div
            ref={cloudRef}
            className="w-full p-4 sm:p-12 bg-white text-black rounded-lg h-56 sm:h-48"
          >
            {comments.map((comment, i) => (
              <FeedbackCloudContent
                key={i}
                index={i}
                activeIndex={activeIndex}
                artist={comment.artist}
                comment={comment.comment}
              />
            ))}
            {cardDeckRef.current && (
              <div
                style={{
                  left:
                    cardDeckRef.current.children[
                      activeIndex
                    ].getBoundingClientRect().left -
                    cloudRef.current.getBoundingClientRect().left,
                }}
                ref={cloudArrowRef}
                id="feedback-cloud-arrow"
              ></div>
            )}
          </div>
        </div>
        <div
          ref={cardDeckRef}
          className="flex md:justify-center ml-6 md:ml-0 items-center gap-x-12 mt-12"
        >
          {comments.map((com, i) => (
            <FeedbackArtistCard
              key={i}
              name={com.artist}
              title={"artist"}
              img={com.img}
            />
          ))}
        </div>
      </div>
    )
  }  