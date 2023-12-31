import "./navContact.css"

export default function NavContact() {
    return (
        <>
            <div className="p-2 border border-5 border-warning text-warning">
                <div className="row">
                    <div className="col-6 col-md icon-box navcontacttext">
                        <i className="bi bi-geo-alt-fill pe-2"></i>
                        Metoda, GIDC, Rajkot
                    </div>
                    <div className="col-6 col-md navcontacttext">
                        GST No.: 24AHJPG7548K1Z0
                    </div>
                    <div className="col-6  col-md icon-box navcontacttext">
                        <i className="bi bi-phone-fill pe-2"></i>
                        <a className="phones text-warning" href="tel:9978422542">Send SMS</a>
                    </div>
                    <div className="col-6 col-md navcontacttext">
                        <i className="bi bi-envelope-fill pe-2"></i>
                        <a className="phones text-warning" href="mailto:jayagroengineerimg@gmail.com">Send email</a>
                    </div>
                </div>
            </div>
        </>
    );
}