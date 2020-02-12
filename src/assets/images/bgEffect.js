import React from "react"

function BgEffect(props) {
  return (
    <svg preserveAspectRatio="none" viewBox="0 0 680 766" {...props}>
      <title>{"bg-mask_r"}</title>
      <defs>
        <linearGradient x1="0%" y1="100%" x2="100%" y2="0%" id="prefix__a">
          <stop stopColor="#00bbd3" offset="0%" />
          <stop stopColor="#fff" offset="100%" />
        </linearGradient>
      </defs>
      <path
        d="M869 2v766H190.374c-5.699-18.313 13.605-108.077 67.844-183.647C326.676 488.97 399.875 401.889 407.51 383c57.419-142.033 51.419-233.255 1.523-381H869z"
        transform="translate(-189 -2)"
        fill="url(#prefix__a)"
        fillRule="nonzero"
      />
    </svg>
  )
}

export default BgEffect
