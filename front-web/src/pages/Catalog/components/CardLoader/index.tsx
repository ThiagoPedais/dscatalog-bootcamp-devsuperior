import ContentLoader from "react-content-loader";
import './style.scss'

const CardLoader = () => (
    <div>
        <ContentLoader
            speed={2}
            width={400}
            height={460}
            viewBox="0 0 300 300"
            backgroundColor="#ecebeb"
            foregroundColor="#d6d2d2"
        >
            <rect x="7" y="18" rx="2" ry="2" width="300" height="300" />
            <rect x="76" y="0" rx="3" ry="3" width="140" height="11" />
            <rect x="127" y="48" rx="3" ry="3" width="53" height="11" />
            <rect x="187" y="48" rx="3" ry="3" width="72" height="11" />
            <rect x="18" y="48" rx="3" ry="3" width="100" height="11" />
            <rect x="0" y="71" rx="3" ry="3" width="37" height="11" />
            <rect x="18" y="23" rx="3" ry="3" width="140" height="11" />
            <rect x="166" y="23" rx="3" ry="3" width="173" height="11" />
        </ContentLoader>
    </div>
)

export default CardLoader;

