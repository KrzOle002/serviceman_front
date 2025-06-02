import { StyledSpinner } from "./SpinnerLoaderHolder.style"
import { ColorRing } from 'react-loader-spinner'
const SpinnerLoaderHolder = () => {
    return (
        <StyledSpinner>
            <ColorRing
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{ SpinnerLoaderHolder }}
                wrapperClass="blocks-wrapper"
                colors={['#000000', '#000000', '#000000', '#000000', '#000000']}
            />
        </StyledSpinner>
    )
}

export default SpinnerLoaderHolder