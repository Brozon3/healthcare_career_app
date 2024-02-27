import { Container, OverlayTrigger, Popover, Tabs, Tab, Nav} from "react-bootstrap";
import { NavLink } from "react-router-dom";

function Diploma3YearProgramsImage() {
    return (
        <Container fluid className="pt-5 mt-5">
            <h1 className="text-center purple-text py-2 my-2"><em>Hover</em> or <em>Click</em> to explore!</h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={"95vw"}
                height={"80vh"}
                className="ge-export-svg-dark"
                style={{
                filter: "invert(100%) hue-rotate(180deg)",
                }}
                viewBox="-0.5 -0.5 541 521"
            >
                <defs>
                <style>
                    {
                    "svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),svg.ge-export-svg-dark svg{filter:invert(100%) hue-rotate(180deg)}"
                    }
                </style>
                </defs>

                <NavLink to={"/hsdiploma"}>
                    <circle
                        cx={80}
                        cy={260}
                        r={80}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                    />
                </NavLink>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 58,
                        height: 1,
                        paddingTop: 260,
                        marginLeft: 51,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 36,
                            }}
                        >
                            {"3 Years"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <OverlayTrigger
                    placement="right"
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
                                    <b>Program Highlights</b>
                                    <ul>
                                        <li>Intense training to become an integral part of the healthcare team</li>
                                        <li>The program is seeking accreditation by Accreditation Canada</li>
                                        <li>Prepares you to challenge the Sonography Canada certification exam</li>
                                        <li>Sonography Canada provides portability within Canada</li>
                                    </ul>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                        rx={15}
                        ry={15}
                    />            
                </OverlayTrigger>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 178,
                        height: 1,
                        paddingTop: 50,
                        marginLeft: 361,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"Diagnostic Sonographer"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <OverlayTrigger
                    placement="right"
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
                                            <b>Accreditation</b>
                                            <p>The Medical Laboratory Technology (MLT) program is accredited by Accreditation Canada until May 2028.</p>
                                            <p>This program is currently “Accredited” with Accreditation Canada/EQual. Our “Accredited” status serves as 
                                                an important demonstration of our commitment to providing quality education in alignment with accreditation 
                                                and regulatory requirements. If you require additional information regarding our accreditation status and 
                                                endeavors and/or any potential implications our accreditation status may have on your future abilities to 
                                                practice as a healthcare professional, we encourage you to reach out to the Dean for the School of Health 
                                                Sciences.</p>
                                        </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={140}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                        rx={15}
                        ry={15}
                    />            
                </OverlayTrigger>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 178,
                        height: 1,
                        paddingTop: 190,
                        marginLeft: 361,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            pointerEvents={"none"}
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"Medical Laboratory Technologist"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>
                <OverlayTrigger
                    placement="right"
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
                                    <b>Program Transferability</b>
                                    <p>Graduates may elect to further their studies and obtain a Bachelor of Technology 
                                        degree from Memorial University of Newfoundland or a Bachelor of Sciences 
                                        (Post Diploma, Human Science) from Athabasca University.</p>
                                    <b>Certifications</b>
                                    <p>Students must possess valid Standard First Aid with Cardiopulmonary Resuscitation 
                                        (CPR) /Basic Life Support (BLS) certification to be eligible for graduation from the College.</p>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                            
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={280}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                        rx={15}
                        ry={15}
                    />            
                </OverlayTrigger>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 178,
                        height: 1,
                        paddingTop: 330,
                        marginLeft: 361,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"Medical Radiation Technologist"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>

                <OverlayTrigger
                    placement="right"
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
                                    <hr/>
                                </Tab>
                                <Tab eventKey={"requirements"} title={"Requirements"}>
                                    <b>Accreditation</b>
                                    <p>The Respiratory Therapy (RT) program is accredited by Accreditation Canada until May 2024.</p>
                                    <p>This program is currently “Accredited” with Accreditation Canada/EQual. Our “Accredited” status serves as an important demonstration of our commitment to providing quality education in alignment with accreditation and regulatory requirements. If you require additional information regarding our accreditation status and endeavors and/or any potential implications our accreditation status may have on your future abilities to practice as a healthcare professional, we encourage you to reach out to the Dean for the School of Health Sciences.</p>
                                </Tab>
                            </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={360}
                        y={420}
                        fill="#ffcce6"
                        stroke="#000"
                        pointerEvents="all"
                        rx={15}
                        ry={15}
                    />            
                </OverlayTrigger>
                
                <switch transform="translate(-.5 -.5)">
                <foreignObject
                    width="100%"
                    height="100%"
                    pointerEvents="none"
                    requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
                    style={{
                    overflow: "visible",
                    textAlign: "left",
                    }}
                >
                    <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                        display: "flex",
                        alignItems: "unsafe center",
                        justifyContent: "unsafe center",
                        width: 178,
                        height: 1,
                        paddingTop: 470,
                        marginLeft: 361,
                    }}
                    >
                    <div
                        data-drawio-colors="color: rgb(0, 0, 0);"
                        style={{
                        boxSizing: "border-box",
                        fontSize: 0,
                        textAlign: "center",
                        }}
                        className="unclickable"
                    >
                        <div
                        style={{
                            display: "inline-block",
                            fontSize: 12,
                            fontFamily: "Helvetica",
                            color: "#000",
                            lineHeight: 1.2,
                            pointerEvents: "all",
                            whiteSpace: "normal",
                            overflowWrap: "normal",
                        }}
                        className="unclickable"
                        >
                        <font
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"Respiratory Therapist"}
                        </font>
                        </div>
                    </div>
                    </div>
                </foreignObject>
                </switch>
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h26.82l140-210h13.18V34.5l19 15.5-19 15.5V55h-7.82l-140 210Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 45V34.5l19 15.5-19 15.5V55"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h32.18l140 210h7.82v-10.5l19 15.5-19 15.5V475h-13.18l-140-210Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 465v-10.5l19 15.5-19 15.5V475"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h28.32l140-70h11.68v-10.5l19 15.5-19 15.5V195h-9.32l-140 70Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 185v-10.5l19 15.5-19 15.5V195"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 265v-10h30.68l140 70h9.32v-10.5l19 15.5-19 15.5V335h-11.68l-140-70Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M340.5 325v-10.5l19 15.5-19 15.5V335"
                pointerEvents="all"
                />
            </svg>
        </Container>
    )
}

export default Diploma3YearProgramsImage;