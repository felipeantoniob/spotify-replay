import Link from 'next/link'

const VinylSvg = ({ width, height }: { width: number; height: number }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 144 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_366_2235)">
      <path
        d="M139.221 54.9075L135.322 54.6587L133.414 54.5373L134.715 52.8015H127.432L131.347 48.3506L136.457 42.528L133.673 41.9211L126.795 40.426L137.719 35.6737L128.211 29.1026V26.7072L122.627 25.3194L124.094 22.9786L115.819 21.0283L117.286 18.4549L112.133 16.6219L111.757 15.1289L111.269 13.1968H106.677L108.295 10.6497L108.593 10.1965H104.457L107.478 7.48552L110.935 5.57973C102.821 4.69125 94.6632 4.25089 86.5 4.26066C73.2931 4.26066 60.8063 5.37135 49.756 7.34794C38.1615 9.42165 28.1187 12.4401 20.4551 16.1243C10.6005 20.8563 4.63834 26.6829 4.26608 33.0012C4.25192 33.2035 4.24585 33.422 4.24585 33.6344C4.24585 49.8497 41.0667 63 86.5 63C106.565 63 124.951 60.4347 139.227 56.172L139.221 54.9075Z"
        fill="black"
      />
      <path
        d="M111.087 5.49879L111.825 5.09416L112.837 4.5378C104.097 3.50103 95.3031 2.98759 86.502 3.00023C41.0667 2.9982 4.24585 16.1465 4.24585 32.3679C4.24585 32.5702 4.24585 32.7907 4.26608 33.0011C5.20683 48.9292 41.6656 61.7295 86.5 61.7295C106.561 61.7295 124.939 59.1642 139.221 54.9035L135.322 54.6546L133.414 54.5332L134.715 52.7974H127.432L131.347 48.3465L136.457 42.524L133.673 41.917L126.795 40.422L137.719 35.6696L128.211 29.0985V26.7072L122.627 25.3193L124.094 22.9786L115.819 21.0283L117.286 18.4549L112.133 16.6219L111.757 15.1289L111.269 13.1968H106.677L108.295 10.6497L108.593 10.1965H104.457L107.478 7.48549L110.935 5.57971L111.087 5.49879Z"
        fill="url(#paint0_linear_366_2235)"
      />
      <path
        d="M111.825 5.09216C103.42 4.10436 94.9634 3.61525 86.5 3.62742C59.0361 3.62742 34.8112 8.578 20.4551 16.1243C11.7739 20.6844 6.69789 26.1913 6.69789 32.1211C6.69789 47.859 42.4263 60.6168 86.498 60.6168C104.888 60.6168 121.826 58.3914 135.32 54.6627M133.412 54.5414L134.713 52.8055H127.43L131.345 48.3546L136.455 42.5321L133.671 41.9252L126.793 40.4301L137.717 35.6777L128.209 29.1066V26.7072L122.625 25.3194L124.092 22.9786L115.817 21.0283L117.284 18.4549L112.131 16.6219L111.755 15.1289L111.267 13.1968H106.675L108.293 10.6497L108.593 10.1965H104.457L107.478 7.48552L110.935 5.57973"
        stroke="url(#paint1_linear_366_2235)"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M111.087 5.49883C102.926 4.55285 94.716 4.08404 86.5 4.09479C73.2222 4.09479 60.7173 5.27224 49.756 7.35202C24.9606 12.0558 8.07965 21.3723 8.07965 32.0989C8.07965 47.5656 43.193 60.1029 86.506 60.1029C104.097 60.1029 120.335 58.0353 133.416 54.5414L134.717 52.8055H127.434L131.349 48.3547L136.459 42.5321L133.675 41.9252L126.797 40.4301L137.721 35.6778L128.213 29.1067V26.7072L122.629 25.3194L124.096 22.9786L115.821 21.0283L117.288 18.4549L112.135 16.622L111.759 15.1289L111.271 13.1968H106.679L108.297 10.6497L108.592 10.1965H104.457L107.478 7.48554L110.935 5.57976"
        stroke="url(#paint2_linear_366_2235)"
        stroke-width="2"
        stroke-miterlimit="10"
      />
      <path
        d="M86.5 38.5911C102.072 38.5911 114.696 34.083 114.696 28.522C114.696 22.961 102.072 18.4529 86.5 18.4529C70.9276 18.4529 58.3037 22.961 58.3037 28.522C58.3037 34.083 70.9276 38.5911 86.5 38.5911Z"
        stroke="url(#paint3_linear_366_2235)"
        stroke-miterlimit="10"
      />
      <path
        d="M126.795 40.424L137.719 35.6717L128.211 29.1006V26.7072L122.627 25.3194L124.094 22.9786L115.819 21.0283L117.286 18.4549L112.133 16.622L111.757 15.1289L111.269 13.1968H106.677L108.295 10.6497C107.041 10.4825 105.761 10.3314 104.457 10.1965C98.4913 9.58147 92.4975 9.27624 86.5 9.28206C51.2167 9.28611 22.6138 19.5029 22.6138 32.0989C22.6138 44.6948 51.2167 54.9076 86.5 54.9076C103.974 54.9076 119.811 52.4029 131.343 48.3425L136.453 42.52L133.669 41.913L126.795 40.424Z"
        stroke="url(#paint4_linear_366_2235)"
        stroke-miterlimit="10"
      />
      <path
        d="M126.795 40.424L133.673 41.9191C124.383 47.3633 107.597 51.0009 88.4321 51.0009C59.1959 51.0009 35.495 42.5381 35.495 32.0988C35.495 21.6595 59.1959 13.1968 88.4321 13.1968C96.8098 13.1968 104.73 13.8907 111.771 15.1289L112.147 16.6219L117.3 18.4549L115.833 21.0283L124.108 22.9786L122.641 25.3193L128.225 26.7072V29.1006L137.734 35.6717L126.795 40.424Z"
        stroke="url(#paint5_linear_366_2235)"
        stroke-miterlimit="10"
      />
      <path
        d="M86.5 36.4101C98.7014 36.4101 108.593 32.8785 108.593 28.522C108.593 24.1654 98.7014 20.6338 86.5 20.6338C74.2987 20.6338 64.4075 24.1654 64.4075 28.522C64.4075 32.8785 74.2987 36.4101 86.5 36.4101Z"
        stroke="url(#paint6_linear_366_2235)"
        stroke-miterlimit="10"
      />
      <path
        d="M86.5 34.9798C96.4176 34.9798 104.457 32.1085 104.457 28.5665C104.457 25.0245 96.4176 22.1532 86.5 22.1532C76.5825 22.1532 68.5428 25.0245 68.5428 28.5665C68.5428 32.1085 76.5825 34.9798 86.5 34.9798Z"
        fill="#7F6580"
      />
      <path
        d="M86.5 34.0652C95.0745 34.0652 102.025 31.5834 102.025 28.5219C102.025 25.4604 95.0745 22.9785 86.5 22.9785C77.9255 22.9785 70.9745 25.4604 70.9745 28.5219C70.9745 31.5834 77.9255 34.0652 86.5 34.0652Z"
        stroke="url(#paint7_linear_366_2235)"
        stroke-width="3"
        stroke-miterlimit="10"
      />
      <path
        d="M86.5 29.1005C88.0542 29.1005 89.3142 28.6503 89.3142 28.095C89.3142 27.5397 88.0542 27.0895 86.5 27.0895C84.9458 27.0895 83.6859 27.5397 83.6859 28.095C83.6859 28.6503 84.9458 29.1005 86.5 29.1005Z"
        fill="#E5E0E6"
      />
      <path d="M89.3122 25.3173H83.6859V28.095H89.3122V25.3173Z" fill="#E5E0E6" />
      <path
        d="M86.5 26.3228C88.0542 26.3228 89.3142 25.8726 89.3142 25.3173C89.3142 24.7619 88.0542 24.3118 86.5 24.3118C84.9458 24.3118 83.6859 24.7619 83.6859 25.3173C83.6859 25.8726 84.9458 26.3228 86.5 26.3228Z"
        fill="#FAF9FA"
      />
      <path d="M139.221 54.9116H139.227V56.1781L139.221 54.9116Z" fill="white" />
    </g>
    <defs>
      <filter
        id="filter0_d_366_2235"
        x="0.24585"
        y="0.627197"
        width="143.523"
        height="68.3728"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_366_2235" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_366_2235"
          result="shape"
        />
      </filter>
      <linearGradient
        id="paint0_linear_366_2235"
        x1="18.8285"
        y1="1.17942"
        x2="147.06"
        y2="71.1046"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.02" stop-color="#7F8F96" />
        <stop offset="0.08" stop-color="#616F77" />
        <stop offset="0.14" stop-color="#49565E" />
        <stop offset="0.21" stop-color="#36424A" />
        <stop offset="0.29" stop-color="#29343C" />
        <stop offset="0.39" stop-color="#212B34" />
        <stop offset="0.56" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_366_2235"
        x1="21.2927"
        y1="2.16065"
        x2="131.377"
        y2="62.1908"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.9" stop-color="#29343C" />
        <stop offset="0.91" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint2_linear_366_2235"
        x1="22.3852"
        y1="2.70287"
        x2="130.25"
        y2="61.5232"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.9" stop-color="#29343C" />
        <stop offset="0.91" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint3_linear_366_2235"
        x1="64.2638"
        y1="16.3974"
        x2="108.734"
        y2="40.6465"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.02" stop-color="#7F8F96" />
        <stop offset="0.08" stop-color="#616F77" />
        <stop offset="0.14" stop-color="#49565E" />
        <stop offset="0.21" stop-color="#36424A" />
        <stop offset="0.29" stop-color="#29343C" />
        <stop offset="0.39" stop-color="#212B34" />
        <stop offset="0.56" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint4_linear_366_2235"
        x1="34.4997"
        y1="7.86588"
        x2="127.772"
        y2="58.7272"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.02" stop-color="#7F8F96" />
        <stop offset="0.08" stop-color="#616F77" />
        <stop offset="0.14" stop-color="#49565E" />
        <stop offset="0.21" stop-color="#36424A" />
        <stop offset="0.29" stop-color="#29343C" />
        <stop offset="0.39" stop-color="#212B34" />
        <stop offset="0.56" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint5_linear_366_2235"
        x1="45.7543"
        y1="11.2242"
        x2="127.084"
        y2="55.5752"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.02" stop-color="#7F8F96" />
        <stop offset="0.08" stop-color="#616F77" />
        <stop offset="0.14" stop-color="#49565E" />
        <stop offset="0.21" stop-color="#36424A" />
        <stop offset="0.29" stop-color="#29343C" />
        <stop offset="0.39" stop-color="#212B34" />
        <stop offset="0.56" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint6_linear_366_2235"
        x1="69.0587"
        y1="19.0112"
        x2="103.941"
        y2="38.0327"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#8A9BA2" />
        <stop offset="0.02" stop-color="#7F8F96" />
        <stop offset="0.08" stop-color="#616F77" />
        <stop offset="0.14" stop-color="#49565E" />
        <stop offset="0.21" stop-color="#36424A" />
        <stop offset="0.29" stop-color="#29343C" />
        <stop offset="0.39" stop-color="#212B34" />
        <stop offset="0.56" stop-color="#1F2932" />
      </linearGradient>
      <linearGradient
        id="paint7_linear_366_2235"
        x1="74.0376"
        y1="21.7282"
        x2="98.9604"
        y2="35.3176"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#F5F5F5" />
        <stop offset="0.14" stop-color="#E4E0E4" />
        <stop offset="0.73" stop-color="#9C889C" />
        <stop offset="1" stop-color="#7F6580" />
      </linearGradient>
    </defs>
  </svg>
)

const Custom404 = () => {
  return (
    <div className="flex h-screen flex-row items-center justify-center px-12  text-center">
      <div className="invisible w-0 md:visible md:w-fit">
        <VinylSvg width={342} height={148} />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-sans text-9xl font-bold text-error-container">404</h1>
        <h2 className="font-sans text-2xl font-bold text-error-container">Something went wrong</h2>
        <p className="text-base text-error-container">
          Sorry, we couldn&apos;t find the page you were looking for.
        </p>
        <div className="mt-4 block md:hidden">
          <VinylSvg width={144} height={69} />
        </div>
        <Link
          href="/profile"
          className="mt-8 text-base font-medium text-tertiary-container underline"
        >
          BACK TO PROFILE
        </Link>
      </div>
    </div>
  )
}

export default Custom404
