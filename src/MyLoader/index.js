import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
    <ContentLoader
        speed={2}
        width={476}
        height={124}
        viewBox="0 0 476 124"
        backgroundColor="#bfbbbb"
        foregroundColor="#ecebeb"
        style={{ width: '100%' }}
        {...props}
    >
        <rect x="0" y="29" rx="0" ry="0" width="715" height="48" />
    </ContentLoader>
)

export { MyLoader }
