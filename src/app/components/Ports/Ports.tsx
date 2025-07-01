// import './Ports.css';

export default function Ports(props: any) {
    const {_id, piPath, title, link, repo, onMouseOver, onMouseLeave} = props;
    return(
        <div className='col p-0 p-img-div my-1 mx-auto' id={_id} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <img className='portimage' src={piPath} alt={title + ' project'}/>
            <div className='view-destroyer' id={'cover-' + title}>
                <h1 className='col-12 destroyer-text'>{title}</h1>
                <a className='col another-a' href={link} target='_blank'>App</a>
                <a className='col another-a' href={repo} target='_blank'>Repository</a>
            </div>
        </div>
    );
};

