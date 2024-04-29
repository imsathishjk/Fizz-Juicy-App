import { InfinitySpin } from 'react-loader-spinner'

export const Loader = () => {
    return (
        <InfinitySpin
            height="120"
            width="120"
            radius="9"
            color="#E57373"
            ariaLabel="three-dots-loading"
            wrapperStyle
            wrapperClass
        />
    )
}