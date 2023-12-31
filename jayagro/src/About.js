import { Link } from "react-router-dom"

export default function About() {

    let h = "Jay Agro Engineering is one of the well-known names in the DTH rig machine manufacturing industry. We are a well-established company also manufacturing DTH rig machine parts. We are committed in our efforts towards continuously trying to innovate and develop our machines to be of even more superior quality than what it was previously"
    let A1 = "We are operating from Rajkot in Gujarat since we started on our journey in 2008. Customer satisfaction is our prime aim, so we are striving continually to reinvent ourselves so that we can move even further ahead as a company."
    let A2 = "We are trying to manufacture customer-centric and cost-effective machines that we always try to deliver on time. We can proudly declare that all our machines are top class that is why our business has also expanded globally."
    let I1 = "We have upgraded infrastructure that is capable of producing world-class rig machines and their spares and parts. We have improved on our existing capacity by upgrading our unit with the latest tools and tackles that are required for superior production."
    let I2 = "Our team is one of the best. We have in our employment a team that comprises highly qualified engineers and technicians and a strong workforce trained in their own capacity."
    let As = "At our factory premises, all our machines and parts undergo stringent and all-inclusive quality control checks before they are delivered. We are careful with every step in our production. Beginning from the sourcing of raw materials to the finishing touches that are to be applied, everything is done with utmost care. Every step is performed by highly trained professionals under Mr. Harsukhbhai G Gangajaliya."
    let arraw = ">"
    return (<>
        <div className="m-4">
            <div className="row">
                <div className="col-md-12 col-xl-8">
                    <div className="row">
                        <h2 className="p-3">About Us</h2>
                        <div className="bg-warning"><Link className="p-2" id="homelink" to="/">Home </Link>{arraw} About</div>
                    </div>
                    <div id="content" className="row pt-4">
                        <div className="row">{h}</div>
                        <div className="row pt-5">
                            <h5>Our Aim</h5>
                            {A1}
                        </div>
                        <div className="row pt-5">
                            {A2}
                        </div>
                        <div className="row pt-5">
                            <h5>Our Infrastructure and Team</h5>
                            {I1}
                        </div>
                        <div className="row pt-5">
                            {I2}
                        </div>
                        <div className="row pt-5">
                            <h5>Quality Assurance</h5>
                            {As}
                        </div>
                        <div className="row pt-5">
                            <table class="table">
                                <tbody className="border">
                                    <tr>
                                        <th className="bg-warning w-50 text-truncate">Name of Founder</th>
                                        <td className="d-flex">Mr. Harsukhbhai G Gangajaliya</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-warning w-50 text-truncate">Year of Establishment</th>
                                        <td className="d-flex">2008</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-warning w-50 text-truncate">Nature of Business</th>
                                        <td className="d-flex">Manufacturer, Exporter & Supplier</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-warning w-50 text-truncate">Number of Employees</th>
                                        <td className="d-flex">8</td>
                                    </tr>
                                    <tr>
                                        <th className="bg-warning w-50 text-truncate">GST No.</th>
                                        <td className="text-truncate">24AHJPG7548K1Z0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="col-md col-sm-12 h-25 m-lg-5 border">
                    <div className="row p-2 border-bottom border-warning">
                        <h5>Contact Us</h5>
                    </div>
                    <div className="row p-3">
                        <h5 className="text-warning pb-3 border-bottom">Jay Agro Engineering</h5>
                        <p className="pb-3 border-bottom"> Metoda, GIDC, Rajkot</p>
                        <p className="pb-3 border-bottom">
                            <h6 className="row">Mobile:</h6>
                            <a className="phones" href="tel:9978422542">+91 99784 22542</a><br />
                            <a className="phones" href="tel:9825536118">+91 98255 36118</a>
                        </p>
                        <p className="pb-3">
                            <h6 className="row">Email Us</h6>
                            <a href="mailto:jayagroengineerimg@gmail.com">jayagroengineerimg@gmail.com</a>
                        </p>

                    </div>
                </div>
            </div>
        </div>

    </>);
}