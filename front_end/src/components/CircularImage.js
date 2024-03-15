import { OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { useSpring, animated } from "react-spring";

function CircularImage({hideCertificates={hideCertificates}, hideDiplomas={hideDiplomas},
                        hideRequiresPhysics={hideRequiresPhysics}, hideRequiresChemsitry={hideRequiresChemsitry},
                        hideLessThanFiftyThousand={hideLessThanFiftyThousand}, hideLessThanThreeYears={hideLessThanThreeYears}}) {

    const spring = useSpring({
        from: { opacity: 0},
        to: { opacity: 1 },
        config: { duration: 1000 }
    })

    return(
        <animated.svg
            xmlns="http://www.w3.org/2000/svg"
            width={"80vw"}
            height={"75vh"}
            preserveAspectRatio="xMidYMid"
            version="1"
            viewBox="0 0 1447.013 543.687"
        >
            <g transform="translate(-126.6 -37.812)">
                {!hideDiplomas && <path
                    fill="#00f"
                    strokeWidth="0.1"
                    d="M1280.063 559.265c.258-1.538.982-5.141 3.182-17.141.9-4.7 2.1-11.1 2.7-14.3 1-5.5 1-5.942 1.524-8.848 1.921-13.098 2.276-15.61 2.276-23.652 0-2.6.3-10.4.7-17.4l.6-12.8H1259.745v-5l17.8.2 17.7.3-.3 19.8-.3 19.7c-.175 13.675-.76 12.257-1.606 21.576-.136 1.494-1.394 2.024-2.794 10.224-1.6 9.6-2.2 12.7-4.6 22.9-1.2 5-1.1 4.27-1.26 6.329-4.99-1.01-4.634-.036-4.322-1.888z"
                ></path>}
                {!hideCertificates && <path
                    fill="purple"
                    d="M5868.019 8717.966c16.986 8.017 30.981.034 130.981 6.034 61 4 116 4 121 1 6-4 10-69 10-161v-154h50l-2 183-3 182-147-1c-141-1-145.002-4.992-161.99-.966-6.84-57.948-2.573-11.22 2.009-55.068z"
                    transform="matrix(.1 0 0 -.1 229.31 922.888)"
                ></path>}
                {!hideDiplomas && <path
                    fill="#00f"
                    d="M8895 7669l162-163c161-160 148.327-157.12 177.12-189.056C9344.257 7194.785 9338.328 7203.007 9378 7152c11-15 47-63 81-107 33-44 64-85 69-91s22-30 37-55c14.086-27.414 16.63-25.34 50.12-79.824 160.191-259.88 164.111-259.54 235.88-398.176 60-116 69.472-100.584 87.128-172.768 16.56-63.735 27.373-79.684 51.64-122.816C10005.631 6097.221 9999 6092 10033 6003c20-54 46-128 58-165l23-67c34.771-159.72 28.5-137.576 43.648-162.992C10165.84 5594.264 10183 5510 10205 5390c9-47 21-111 27-143 10-55 15.648-52.352 12.416-77.176 11.428-74.118-1.817-84.309 7.528-161.056 19.188-49.033 22.352-211.734 25.056-260.768l6-128h-313v-50l178 2 177 3-3 198-17.12 185.704c2.864 103.503-5.118 110.905-9 220-.534 14.99-6.88 27.296-20.88 109.296-16 96-22 127-46 229-20.647 86.027-23.721 68.38-48.768 219.936C10153.528 5773.528 10159 5787 10131 5874c-16 50-43 127-60 170-28 72-48.768 75.352-34.768 91.352-33.52 75.576-34.894 66.04-72.352 170.528-6.75 18.827-15.88 27.12-48.88 96.12-22 45-63 123-92 174-143.735 252.775 16.73 5.334-55.592 112.936-87.518 130.21-36.41 70.757-126.408 188.064-3 5-25 36-48 68-23 33-65 89-93 125s-62 81-76 101l-25 36c-97.81 139.854-69.581 91.16-127.648 172.704C9242.704 7393.296 9239 7394 9086 7546c-149 149-173.472 153.88-163.472 171.88-39.962-60.144-6.499-13.417-27.528-48.88z"
                    transform="matrix(.1 0 0 -.1 229.31 922.888)"
                ></path>}
                {!hideCertificates && <path
                    fill="green"
                    d="M1994 4603c-4-14-4-106 0-204 6-168 6.412-160.644-3.116-186.588 43.17.638 11.534.472 62.58 6.588-7.82 13.412-5.996 15-5.936 94-3 45 2.472 121 2.472 170v87h310v60h-360z"
                    transform="matrix(.1 0 0 -.1 229.31 922.888)"
                ></path>}
                {!hideDiplomas && <path
                    fill="#1a1a1a"
                    d="M912.445 467.67c7.76.067-.818.035 22.382.035h112c41.155-.368 77.311 0 119.9 0h7.6l-5.9 5.3c-5.6 5-6.7 7.7-3.1 7.7 2.2 0 19.5-14.9 18.9-16.3-1-2.1-17.7-14.7-19.6-14.7-3.2 0-2 2.4 3.9 7.7l5.8 5.2-7.7.1h-231.9l-22.112.141"
                ></path>}
                {!hideCertificates && <path
                    fill="#1a1a1a"
                    d="M847.512 393.706c.069-7.76.036.818.036-22.382v-112c-.368-41.155 0-77.311 0-119.9v-7.6l5.3 5.9c5 5.6 7.7 6.7 7.7 3.1 0-2.2-14.9-19.5-16.3-18.9-2.1 1-14.7 17.7-14.7 19.6 0 3.2 2.4 2 7.7-3.9l5.2-5.8.1 7.7v231.9l.142 22.112"
                ></path>}
                {!hideCertificates && <path
                    fill="#1a1a1a"
                    d="M778.868 462.362c-7.76-.068.817-.036-22.383-.036h-112c-41.155.368-77.31 0-119.9 0h-7.6l5.9-5.3c5.6-5 6.7-7.7 3.1-7.7-2.2 0-19.5 14.9-18.9 16.3 1 2.1 17.7 14.7 19.6 14.7 3.2 0 2-2.4-3.9-7.7l-5.8-5.2 7.7-.1h231.9l22.112-.142"
                ></path>}
                <circle
                    cx="845.03"
                    cy="460.284"
                    r="75"
                    fill="#1a1a1a"
                    strokeWidth="0.75"
                    display="inline"
                ></circle>
            </g>
            <g
                fill="#000"
                strokeWidth="0.75"
                display="inline"
                fontFamily="Sans"
                fontSize="24"
                transform="translate(-126.6 -37.812)"
            >
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1305.691"
                    y="470.81"
                    fill="#00f"
                    fillOpacity="1"
                    fillRule="nonzero"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1305.691" y="470.81">
                    Diploma
                    </tspan>
                </text>}
                {!hideDiplomas && !hideLessThanThreeYears && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1213.197"
                    y="247.384"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1213.197" y="247.384" fill="#1a1a1a" strokeWidth="0.75">
                    Diagnostic Sonographer
                    </tspan>
                </text>}
                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1174.79"
                    y="196.551"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1174.79" y="196.551" fill="#1a1a1a" strokeWidth="0.75">
                    Medical Laboratory Technologist
                    </tspan>
                </text>}
                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1241.437"
                    y="304.994"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1241.437" y="304.994" fill="#1a1a1a" strokeWidth="0.75">
                    Respiratory Therapist
                    </tspan>
                </text>}
                {!hideDiplomas && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1259.511"
                    y="361.474"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1259.511" y="361.474" fill="#1a1a1a" strokeWidth="0.75">
                    Paramedic
                    </tspan>
                </text>}
                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresPhysics && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1125.955"
                    y="150.112"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1125.955" y="150.112" fill="#1a1a1a" strokeWidth="0.75">
                    Medical Radiation Technologist
                    </tspan>
                </text>}
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1292.269"
                    y="578.358"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1292.269" y="578.358" fill="#1a1a1a" strokeWidth="0.75">
                    Rehabilitation Assistant
                    </tspan>
                </text>}
                {!hideCertificates &&<text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="422.473"
                    y="429.25"
                    fill="green"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="422.473" y="429.25" fill="green" strokeWidth="0.75">
                    Certificate
                    </tspan>
                </text>}
                {!hideCertificates && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="857.026"
                    y="56.163"
                    fill="purple"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="857.026" y="56.163" fill="purple" strokeWidth="0.75">
                    Certificate
                    </tspan>
                </text>}
                {!hideCertificates && !hideLessThanFiftyThousand && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="177.348"
                    y="520.748"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="177.348" y="520.748" fill="#1a1a1a" strokeWidth="0.75">
                    Personal Care Attendant
                    </tspan>
                </text>}
                {!hideCertificates && !hideLessThanFiftyThousand && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="503.804"
                    y="54.221"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="503.804" y="54.221" fill="#1a1a1a" strokeWidth="0.75">
                    Medical Laboratory Assistant
                    </tspan>
                </text>}
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1273.151"
                    y="421.878"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1273.151" y="421.878" fill="#1a1a1a" strokeWidth="0.75">
                    Casper Exam
                    </tspan>
                </text>}
                {!hideDiplomas && !hideRequiresChemsitry && <text
                    xmlSpace="preserve"
                    style={{
                    InkscapeFontSpecification: "'Sans, Normal'",
                    fontVariantLigatures: "normal",
                    fontVariantCaps: "normal",
                    fontVariantNumeric: "normal",
                    fontVariantEastAsian: "normal",
                    }}
                    x="1304.695"
                    y="524.137"
                    fill="#1a1a1a"
                    fontStretch="normal"
                    fontStyle="normal"
                    fontVariant="normal"
                    fontWeight="normal"
                >
                    <tspan x="1304.695" y="524.137" fill="#1a1a1a" strokeWidth="0.75">
                    Practical Nurse
                    </tspan>
                </text>}
                {!hideCertificates && <text
                    xmlSpace="preserve"
                    style={{}}
                    x="858.585"
                    y="365.397"
                    fill="#000"
                    display="inline"
                >
                    <tspan x="858.585" y="365.397" fill="#000" strokeWidth="0.75">
                    English
                    </tspan>
                </text>}
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{}}
                    x="938.667"
                    y="-485.865"
                    fill="#000"
                    display="inline"
                    transform="rotate(55 0 0)"
                >
                    <tspan x="938.667" y="-485.865" fill="#000" strokeWidth="0.75">
                    English
                    </tspan>
                </text>}
                {!hideCertificates && <text
                    xmlSpace="preserve"
                    style={{}}
                    x="860.844"
                    y="289.714"
                    fill="#000"
                    display="inline"
                >
                    <tspan x="860.844" y="289.714" strokeWidth="0.75">
                    Math
                    </tspan>
                </text>}
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{}}
                    x="980.998"
                    y="-545.805"
                    fill="#000"
                    display="inline"
                    transform="rotate(55 0 0)"
                >
                    <tspan x="980.998" y="-545.805" strokeWidth="0.75">
                    Math
                    </tspan>
                </text>}
                {!hideCertificates &&<text
                    xmlSpace="preserve"
                    style={{}}
                    x="859.715"
                    y="219.678"
                    fill="#000"
                    display="inline"
                >
                    <tspan x="859.715" y="219.678" strokeWidth="0.75">
                    Science
                    </tspan>
                </text>}
                {!hideDiplomas && <text
                    xmlSpace="preserve"
                    style={{}}
                    x="1026.406"
                    y="-609.381"
                    fill="#000"
                    display="inline"
                    transform="rotate(55 0 0)"
                >
                    <tspan x="1026.406" y="-609.381" strokeWidth="0.75">
                    Science
                    </tspan>
                </text>}
                <text
                    xmlSpace="preserve"
                    style={{}}
                    x="819.049"
                    y="445.599"
                    fill="#fff"
                >
                    <tspan x="819.049" y="445.599" fill="#fff" strokeWidth="0.75">
                    High
                    </tspan>
                </text>
                <text
                    xmlSpace="preserve"
                    style={{}}
                    x="808.883"
                    y="481.747"
                    fill="#fff"
                >
                    <tspan x="808.883" y="481.747" strokeWidth="0.75">
                    School
                    </tspan>
                </text>
            </g>
            <g display="inline" transform="translate(-126.6 -37.812)">
                {!hideDiplomas && <OverlayTrigger
                    placement="right"
                    overlay={
                        <Popover>
                            <Popover.Header>Diploma</Popover.Header>
                            <Popover.Body>
                                Obtaining a diploma typically requires less time and financial investment compared to 
                                pursuing a degree, making it a more accessible option for many individuals. Diplomas 
                                often provide hands-on training and practical skills directly applicable to specific 
                                industries, offering a quicker path to entry-level positions or career advancement. 
                                Additionally, diplomas can be a strategic choice for those seeking specialized 
                                knowledge and immediate employment opportunities in fields such as healthcare, 
                                trades, or technology.
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1205.264"
                        cy="463.325"
                        fill="#00f"
                        strokeWidth="0.978"
                        rx="14.685"
                        ry="14.402"
                    ></ellipse>           
                </OverlayTrigger>}
                
                {!hideCertificates && <OverlayTrigger
                    placement="right"
                    overlay={
                        <Popover>
                            <Popover.Header as="h1">Certificate</Popover.Header>
                            <Popover.Body>
                                Choosing a certificate program over a diploma often provides the opportunity 
                                to gain expertise in a specific skill or area of study in a shorter timeframe. 
                                Certificates are highly focused, allowing individuals to quickly acquire 
                                specialized knowledge and credentials to meet the demands of specific 
                                industries or job roles. Additionally, certificate programs are often 
                                flexible, offering online or part-time options, making them convenient for 
                                individuals balancing work or other commitments while seeking to enhance their 
                                skill set. 
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="487.078"
                        cy="464.712"
                        fill="green"
                        strokeWidth="0.978"
                        display="inline"
                        rx="14.685"
                        ry="14.402"
                    ></ellipse>         
                </OverlayTrigger>}
                
                {!hideDiplomas && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Casper Admissions Exam</Popover.Header>
                            <Popover.Body>
                                <b>Link to Exam: </b> <a href="https://acuityinsights.app/">Casper Exam</a>
                                <hr/>
                                <b>Learn More: </b> <a href="https://www.youtube.com/watch?v=wkbSXYLre8o">Casper Introduction</a>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1257.176"
                        cy="414.741"
                        fill="#666"
                        strokeWidth="0.778"
                        rx="11.861"
                        ry="11.296"
                    ></ellipse>          
                </OverlayTrigger>}
                
                {!hideDiplomas && <OverlayTrigger
                    placement="top"
                    overlay={
                        <Popover>
                            <Popover.Header>English</Popover.Header>
                            <Popover.Body>
                                <b>See program specific requirements to ensure eligibility</b>
                                <hr/>
                                English 3201 (Minimum 60%)
                                <hr/>
                                English 3202 (Minimum 60%)
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="950.35"
                        cy="464.941"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                    ></ellipse>         
                </OverlayTrigger>}
                
                {!hideDiplomas && !hideRequiresChemsitry && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Paramedic</Popover.Header>
                            <Popover.Body>
                                <Tabs>
                                    <Tab eventKey={"pcp"} title={"Primary"}>
                                        <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                            <Tab eventKey={"details"} title={"Details"}>
                                                <b>Average Salary: </b> $74,131
                                                <hr/>
                                                <b>Program Name: </b> Primary Care Paramedicine
                                                <hr/>
                                                <b>Program Length: </b> 68 Weeks
                                                <hr/>
                                                <b>Certification: </b> Diploma
                                                <hr/>
                                                <b>School: </b> CNA
                                                <hr/>
                                                <b>Website: </b><a href="https://www.cna.nl.ca/program/primary-care-paramedicine">Link</a>
                                            </Tab>
                                            <Tab eventKey={"requirements"} title={"Requirements"}>
                                                <b>Competitive Entry</b>
                                                <hr/>
                                                English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                                <hr/>
                                                Biology 2201 
                                                <hr/>
                                                Biology 3201 
                                                <hr/>
                                                Chemistry 3202
                                                <hr/>
                                                4 credits from:
                                                <br/>
                                                <b>Advanced: </b>
                                                <ul>
                                                    <li>Math 2200 (Minimum 50%)</li>
                                                    <li>Math 3200 (Minimum 50%)</li>
                                                </ul>
                                                <b>Academic: </b>
                                                <ul>
                                                    <li>Math 2201 (Minimum 50%)</li>
                                                    <li>Math 3201 (Minimum 60%)</li>
                                                </ul>
                                                <hr/>
                                                Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a>
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                    <Tab eventKey={"acp"} title={"Advanced"}>
                                        <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                            <Tab eventKey={"details"} title={"Details"}>
                                            <b>Average Salary: </b> $74,131
                                            <hr/>
                                            <b>Program Name: </b> Advanced Care Paramedicine
                                            <hr/>
                                            <b>Program Length: </b> 4 Semesters
                                            <hr/>
                                            <b>Certification: </b> Post-Diploma
                                            <hr/>
                                            <b>School: </b> CNA
                                            <hr/>
                                            <b>Website: </b><a href="https://www.cna.nl.ca/program/advanced-care-paramedicine">Link</a>
                                            </Tab>
                                            <Tab eventKey={"requirements"} title={"Requirements"}>
                                                <ul>
                                                    <li>Completion of a paramedic diploma or certificate with successful completion of national COPR examination (PCP) or provincial equivalent</li>
                                                    <li>Completion of a comprehensive entrance exam covering prerequisite PCP knowledge and skills administered by CNA as a pre-assessment and indicator of a student's PCP knowledge base</li>
                                                    <li>Minimum of one-year experience (1,900 hours) as a Primary Care Paramedic</li>
                                                    <li>Hold and maintain an active license to practice as a PCP in the province of NL for the duration of the program</li>
                                                </ul>
                                            </Tab>
                                        </Tabs>
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1245.572"
                        cy="355.846"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>        
                </OverlayTrigger>}

                {!hideDiplomas && !hideRequiresChemsitry && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Practical Nurse</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $68,140
                                        <hr/>
                                        <b>Program Name: </b> Practical Nursing
                                        <hr/>
                                        <b>Program Length: </b> 19 Months
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/practical-nursing">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201
                                        <hr/>
                                        Biology 2201 <b>AND</b> Biology 3201 
                                        <br/>
                                        <b>OR</b> 
                                        <br/>
                                        Chemistry 3202
                                        <hr/>
                                        Math 3200 <b>OR</b> Math 3201
                                        <hr/>
                                        One of the following:
                                        <ul>
                                            <li>Social Studies 3201 <b>OR</b> equivalent</li>
                                            <li>Sciences Humaines 3231</li>
                                            <li>2 credits at the 3000 level in Religious Studies, French or other MCL</li>
                                        </ul>
                                        <hr/>
                                        2 credits in any subject area at the 3000 level
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1290.957"
                        cy="511.516"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>         
                </OverlayTrigger>}

                {!hideDiplomas && !hideRequiresChemsitry && !hideLessThanThreeYears && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Respiratory Therapist</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $77,521
                                        <hr/>
                                        <b>Program Name: </b> Respitory Therapy
                                        <hr/>
                                        <b>Program Length: </b> 3 Years
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/respiratory-therapy">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        Biology 2201
                                        <hr/>
                                        Biology 3201
                                        <hr/>
                                        Chemistry 3202
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a>
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1226.369"
                        cy="301.49"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>       
                </OverlayTrigger>}
                
                {!hideDiplomas && !hideRequiresPhysics && !hideLessThanThreeYears && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Diagnostic Sonographer</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $78,843
                                        <hr/>
                                        <b>Program Name: </b> Diagnostic Ultrasonography
                                        <hr/>
                                        <b>Program Length: </b> 3 Years
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/diagnostic-ultrasonography#tab2">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        Biology 2201
                                        <hr/>
                                        Biology 3201
                                        <hr/>
                                        Physics 3204
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/> 
                                        Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a> 
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1199.258"
                        cy="245.355"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>        
                </OverlayTrigger>}
                
                {!hideDiplomas && !hideRequiresChemsitry && !hideLessThanThreeYears && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Medical Laboratory Technologist</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $73,864
                                        <hr/>
                                        <b>Program Name: </b> Medical Laboratory Technology
                                        <hr/>
                                        <b>Program Length: </b> 3 Years
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-laboratory-technology">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        Biology 2201 (Minimum 60%)
                                        <hr/>
                                        Biology 3201 (Minimum 60%)
                                        <hr/>
                                        Chemistry 3202 (Minimum 60%)
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a> 
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1161.334"
                        cy="193.472"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>        
                </OverlayTrigger>}
                {!hideDiplomas && !hideLessThanThreeYears && !hideRequiresPhysics && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Medical Radiation Technologist</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $76,031
                                        <hr/>
                                        <b>Program Name: </b> Medical Radiography
                                        <hr/>
                                        <b>Program Length: </b> 3 Years
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-radiography">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Competitive Entry</b>
                                        <hr/>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        Biology 2201
                                        <hr/>
                                        Biology 3201
                                        <hr/>
                                        Physics 3204
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        Completion of the <a href="https://acuityinsights.app/">Casper Admissions Exam</a> 
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1113.91"
                        cy="146.357"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>         
                </OverlayTrigger>}

                {!hideCertificates && !hideLessThanFiftyThousand && !hideRequiresChemsitry && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header as="h1">Medical Laboratory Assistant</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $47,240
                                        <hr/>
                                        <b>Program Name: </b> Medical Laboratory Assistant
                                        <hr/>
                                        <b>Program Length: </b> 1 Year
                                        <hr/>
                                        <b>Certification: </b> Certificate
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/medical-laboratory-assistant#tab2">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        Biology 2201 (Minimum 60%)
                                        <hr/>
                                        Biology 3201 (Minimum 60%)
                                        <hr/>
                                        Chemistry 3202 (Minimum 60%)
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        2 credits chosen from any of the remaining 3000 level courses offered in the Senior High School Program
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="806.934"
                        cy="49.509"
                        fill="purple"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>         
                </OverlayTrigger>}    
                
                {!hideCertificates && !hideLessThanFiftyThousand && <OverlayTrigger
                    placement="right"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header as="h1">Personal Care Attendant</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $41,246
                                        <hr/>
                                        <b>Program Name: </b> Personal Care Attendant
                                        <hr/>
                                        <b>Program Length: </b> 2 Semesters
                                        <hr/>
                                        <b>Certification: </b> Certificate
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/personal-care-attendant">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <ul>
                                            <li>Grade 12 diploma <b>OR</b> Grade 12 equivalency documentation.</li>
                                            <li>Current Certificate of Conduct including the “Vulnerable Sector Check”</li>
                                            <li>2 reference letters supporting entrance into the program. References may be provided by individuals such as: employers, teachers/instructors or representative from a volunteer agency</li>
                                            <li>Perform 20 volunteer service hours within the past two years. Volunteer service may include, but is not limited to: Community agencies, School programs, Church groups or Charitable organizations</li>
                                            <li>Complete a one page written personal statement addressing one of the following: Reason(s) for interest in the program, Personal characteristics/skills/abilities that applicants bring to the program or Knowledge gained from volunteer experience(s)</li>
                                            <li>The School of Health Science Student Information Program Awareness Form</li>
                                            <li>The Newfoundland and Labrador Student Pre-Placement Immunization and Communicable Diseases Screening Form</li>
                                        </ul>
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="432.34"
                        cy="511.468"
                        fill="green"
                        strokeWidth="0.75"
                        display="inline"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>         
                </OverlayTrigger>}
                
                {!hideCertificates && <OverlayTrigger
                    placement="right"
                    overlay={
                        <Popover>
                            <Popover.Header as="h1">Certificate</Popover.Header>
                            <Popover.Body>
                                Choosing a certificate program over a diploma often provides the opportunity 
                                to gain expertise in a specific skill or area of study in a shorter timeframe. 
                                Certificates are highly focused, allowing individuals to quickly acquire 
                                specialized knowledge and credentials to meet the demands of specific 
                                industries or job roles. Additionally, certificate programs are often 
                                flexible, offering online or part-time options, making them convenient for 
                                individuals balancing work or other commitments while seeking to enhance their 
                                skill set. 
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="844.727"
                        cy="102.15"
                        fill="purple"
                        strokeWidth="1.035"
                        rx="15.673"
                        ry="15.108"
                    ></ellipse>        
                </OverlayTrigger>}
                
                {!hideDiplomas && <OverlayTrigger
                    placement="left"
                    trigger={"click"}
                    rootClose={"true"}
                    overlay={
                        <Popover>
                            <Popover.Header>Rehabilitation Assistant</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"}    className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                        <b>Average Salary: </b> $51,438
                                        <hr/>
                                        <b>Program Name: </b> Rehabilitation Assistant
                                        <hr/>
                                        <b>Program Length: </b> 9 Semesters
                                        <hr/>
                                        <b>Certification: </b> Diploma
                                        <hr/>
                                        <b>School: </b> CNA
                                        <hr/>
                                        <b>Website: </b><a href="https://www.cna.nl.ca/program/rehabilitation-assistant">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        English 3201 <b>OR</b> English 3202 (Minimum 60%)
                                        <hr/>
                                        4 credits from:
                                        <ul>
                                            <li>Biology 2201</li>
                                            <li>Biology 3201</li>
                                            <li>Physics 3204</li>
                                            <li>Chemistry 3202</li>
                                            <li>Earth Systems 3209</li>
                                        </ul>
                                        <hr/>
                                        4 credits from:
                                        <br/>
                                        <b>Advanced: </b>
                                        <ul>
                                            <li>Math 2200 (Minimum 50%)</li>
                                            <li>Math 3200 (Minimum 50%)</li>
                                        </ul>
                                        <b>Academic: </b>
                                        <ul>
                                            <li>Math 2201 (Minimum 50%)</li>
                                            <li>Math 3201 (Minimum 60%)</li>
                                        </ul>
                                        <hr/>
                                        2 credits from any of the remaining 3000 level courses offered in the Senior High School Program
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1279.209"
                        cy="570.485"
                        fill="#00f"
                        strokeWidth="0.75"
                        rx="11.296"
                        ry="11.014"
                    ></ellipse>         
                </OverlayTrigger>}
                
                {!hideDiplomas && <OverlayTrigger
                    placement="top"
                    overlay={
                        <Popover>
                            <Popover.Header>Math</Popover.Header>
                            <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            4 credits from:
                            <br/>
                            <b>Advanced: </b>
                            <ul>
                                <li>Math 2200 (Minimum 50%)</li>
                                <li>Math 3200 (Minimum 50%)</li>
                            </ul>
                            <b>Academic: </b>
                            <ul>
                                <li>Math 2201 (Minimum 50%)</li>
                                <li>Math 3201 (Minimum 60%)</li>
                            </ul>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1021.455"
                        cy="465.027"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                    ></ellipse>      
                </OverlayTrigger>}
                
                {!hideDiplomas && <OverlayTrigger
                    placement="top"
                    overlay={
                        <Popover>
                            <Popover.Header>Science</Popover.Header>
                            <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            Biology 2201
                            <hr/>
                            Biology 3201
                            <hr/>
                            Chemistry 3202
                            <hr/>
                            Physics 3204
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="1097.691"
                        cy="465.073"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                    ></ellipse>      
                </OverlayTrigger>}
                
                {!hideCertificates && <OverlayTrigger
                    placement="left"
                    overlay={
                        <Popover>
                            <Popover.Header>Science</Popover.Header>
                            <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            Biology 2201
                            <hr/>
                            Biology 3201
                            <hr/>
                            Chemistry 3202
                            <hr/>
                            Physics 3204
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="209.705"
                        cy="-844.992"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                        transform="rotate(90)"
                    ></ellipse>       
                </OverlayTrigger>}
                
                {!hideCertificates && <OverlayTrigger
                    placement="left"
                    overlay={
                        <Popover>
                            <Popover.Header>Math</Popover.Header>
                            <Popover.Body>
                            <b>See program specific requirements to ensure eligibility</b>
                            <hr/>
                            4 credits from:
                            <br/>
                            <b>Advanced: </b>
                            <ul>
                                <li>Math 2200 (Minimum 50%)</li>
                                <li>Math 3200 (Minimum 50%)</li>
                            </ul>
                            <b>Academic: </b>
                            <ul>
                                <li>Math 2201 (Minimum 50%)</li>
                                <li>Math 3201 (Minimum 60%)</li>
                            </ul>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="280.809"
                        cy="-844.906"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                        transform="rotate(90)"
                    ></ellipse>        
                </OverlayTrigger>}
                
                {!hideCertificates && <OverlayTrigger
                    placement="left"
                    overlay={
                        <Popover>
                            <Popover.Header>English</Popover.Header>
                            <Popover.Body>
                                <b>See program specific requirements to ensure eligibility</b>
                                <hr/>
                                English 3201 (Minimum 60%)
                                <hr/>
                                English 3202 (Minimum 60%)
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <ellipse
                        cx="357.045"
                        cy="-844.861"
                        fill="#666"
                        strokeWidth="0.778"
                        display="inline"
                        rx="11.861"
                        ry="11.296"
                        transform="rotate(90)"
                    ></ellipse>         
                </OverlayTrigger>}
            </g>
        </animated.svg>
    )
};

export default CircularImage;