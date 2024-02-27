import { Container, OverlayTrigger, Popover, Tabs, Tab } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function HSCertProgramsImage() {
    return (
        <Container fluid className="pt-5 mt-5">
            <h1 className="text-center purple-text py-2 my-2">
                <em>Hover</em> or <em>Click</em> to explore
            </h1>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                width={"95vw"}
                height={"80vh"}
                className="ge-export-svg-dark"
                style={{
                filter: "invert(100%) hue-rotate(180deg)",
                }}
                viewBox="-0.5 -0.5 526 381"
            >
                <defs>
                <style>
                    {
                    "svg.ge-export-svg-dark image:not(svg.ge-export-svg-dark switch image),svg.ge-export-svg-dark svg{filter:invert(100%) hue-rotate(180deg)}"
                    }
                </style>
                </defs>
                <NavLink to={"/highschool"}>
                    <circle
                        cx={80}
                        cy={190}
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
                        paddingTop: 190,
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
                        <font>
                            <font
                            style={{
                                fontSize: 32,
                            }}
                            >
                            {"Certificate"}
                            </font>
                            <br />
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
                            <Popover.Header as="h1">Home Care Assistant</Popover.Header>
                            <Popover.Body>
                                <Tabs fill defaultActiveKey={"details"} className="mb-3">
                                    <Tab eventKey={"details"} title={"Details"}>
                                    <b>Average Salary: </b> $51,459
                                    <hr/>
                                    <b>Program Name: </b> Home Care Assistant
                                    <hr/>
                                    <b>Program Length: </b> 3 Semesters
                                    <hr/>
                                    <b>Certification: </b> Certificate
                                    <hr/>
                                    <b>School: </b> CNA
                                    <hr/>
                                    <b>Website: </b><a href="https://www.cna.nl.ca/program/home-care-assistant#tab2">Link</a>
                                    </Tab>
                                    <Tab eventKey={"requirements"} title={"Requirements"}>
                                        <b>Requirements Note:</b>
                                        <p>Eligible participants include those with a minimum of grade 9.</p>
                                        <b>Requirements for Clinical Placement:</b>
                                        <p>Pre-placement requirements are outlined in affiliation agreements between CNA and our clinical partners. As a part of this process, students should obtain copies of their personal immunization records as early as possible to assist in the completion of the “Student Pre-Placement Immunizations and Communicable Diseases Screening Form”, and applicable waivers. Students must  also be willing to obtain an updated criminal record check (certificate of conduct and vulnerable sector check) plus all other requirements outlined by the clinical partners for placement purposes.</p>
                                    </Tab>
                                </Tabs>
                            </Popover.Body>
                        </Popover>
                    }
                >
                    <rect
                        width={180}
                        height={100}
                        x={345}
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
                        marginLeft: 346,
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
                        <span
                            style={{
                            fontSize: 24,
                            }}
                        >
                            {"Home Care Assistant"}
                        </span>
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
                                        <b>Additional Requirements:</b>
                                        <ul>
                                            <li>2 reference letters supporting enterance into program. May be provided by employers, 
                                                teachers/instructors, representative from volunteer agency</li>
                                            <li>Perform 20 volunteer service hours within the past 2 years with written verification 
                                                of hours volunteered</li>
                                            <li>Complete a 1 page written personal statement that includes the reason(s) for interest 
                                                in the program, personal skills and abilities and knowledge gained from volunteer experience</li>
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
                        x={345}
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
                        marginLeft: 346,
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
                            {"Personal Care Attendant"}
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
                            <Popover.Header as="h1">Medical Labratory Assistant</Popover.Header>
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
                                        <b>Program Highlights:</b>
                                        <ul>
                                            <li>Robust training to become an integral part of the healthcare community and fill the identified occupational need.</li>
                                            <li>The Medical Laboratory Assistant program is accredited by Accreditation Canada.</li>
                                            <li>You can leverage your certificate for transition into the Medical Laboratory Technologist program at CNA.</li>
                                            <li>Prepares graduates to challenge the Canadian Society of Medical Laboratory Science (CSMLS) certification exam.</li>
                                            <li>The CSMLS provides portability to most provinces and territories.</li>
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
                        x={345}
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
                        marginLeft: 346,
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
                            {"Medical Laboratory Assistant"}
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
                d="M160.5 195v-10h27.26l125-140h12.74V34.5l19 15.5-19 15.5V55h-8.26l-125 140Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M325.5 45V34.5l19 15.5-19 15.5V55"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 195v-10h31.74l125 140h8.26v-10.5l19 15.5-19 15.5V335h-12.74l-125-140Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M325.5 325v-10.5l19 15.5-19 15.5V335"
                pointerEvents="all"
                />
                <path
                fill="#ffcce6"
                stroke="#000"
                strokeMiterlimit={1.42}
                d="M160.5 195v-10h165v-10.5l19 15.5-19 15.5V195H190Z"
                pointerEvents="all"
                />
                <path
                fill="none"
                stroke="#000"
                d="M325.5 185v-10.5l19 15.5-19 15.5V195"
                pointerEvents="all"
                />
            </svg>
        </Container>
    )
}

export default HSCertProgramsImage;