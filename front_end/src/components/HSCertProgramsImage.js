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
                                        <ul>
                                            <li>Eligible participants include those with a minimum of grade 9</li>
                                            <li>English as a second language speakers must provide proof of English language skills (e.g. IELTS 6.0; CAEL 60; MELAB 78; TOEFL 550*) or equivalency</li>
                                            <li> Current Certificate of Conduct obtained from the Royal Newfoundland Constabulary, the Royal Canadian Mounted Police, or provincial/municipal forces, including the "Vulnerable Sector Check". Documents must be dated no more than two months prior to registration. Applicants with a criminal offence may be denied a clinical placement, which will result in not being able to complete the program</li>
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