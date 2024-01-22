const URL_PDF ='https://ibidarne-ayoub.vercel.app/IBIDARNE-AYOUB.pdf'
function DownloadCV() {
    const downloadFileAtURL =(url)=>{
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href=url;
        aTag.setAttribute('download',fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    }
    return (
        <>
        <button className="button" onClick={()=>{downloadFileAtURL(URL_PDF)}}>
            <span className="button_lg">
                <span className="button_sl"></span>
                <span className="button_text"><i className="fa-solid fa-cloud-arrow-down"></i> DOWNLOAD CV</span>
            </span>
        </button>
        </>
    )
}

export default DownloadCV;