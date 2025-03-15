import './CenteredHeader.css';

const CenteredHeader = ({title, subTitle, children}) => {
    return <>
        <h1 className='title'>{ title }</h1>
        <h2 className='sub-title'>{ subTitle }</h2>

        {children}
    </>;
}

export default CenteredHeader;